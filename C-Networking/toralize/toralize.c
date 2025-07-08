#include "toralize.h"

int main (int argc, char *argv[])
{
	char *host;
	int port, s;
	struct sockaddr_in sock;
	Req *req;
	Res *res;
	char buffer[ressize];
	int success;
	char tmp[512];

	if (argc < 3)
	{
		fprintf(stderr, "Usage: %s <host> <port>\n", argv[0]);
		return -1;
	}
	// example usage:  ./toralize 1.2.3.4 80
	host = argv[1];
	port = atoi(argv[2]);
	// Socket
	s = socket(AF_INET, SOCK_STREAM, 0);
	if (s < 0) 
	{
		perror("Socket Creation Failed");
		return -2;
	}
	sock.sin_family = AF_INET;
	sock.sin_port = htons(PROXY_PORT);
	sock.sin_addr.s_addr = inet_addr(PROXY);
	// Connection
	if (connect(s, (struct sockaddr *)&sock, sizeof(sock)) != 0)
	{
		perror("Connection Failed");
		return -3;
	}

	printf("Connected To Proxy\n");

	req = request(host, port);
	write(s, req, reqsize);
	memset(buffer, 0, ressize);
	if (read(s, buffer, ressize) < 1)	
	{
		perror("read");
		free(req);
		close(s);
		return -4;
	}

	res = (Res *)buffer;
	success = (res->cd == 90);
	if (!success){
		fprintf(stderr, "Unable To Traverse The Proxy, error code: %d\n", res->cd);
		close(s);
		free(req);
		return -5;
	}

	printf("Successfully Connected Through The Proxy To %s:%d\n", host, port);
	memset(tmp, 0, 512);
	snprintf(tmp, 511,
		"HEAD / HTTP/1.0\r\n"
		"Host: www.networktechnology.org\r\n"
		"\r\n");
	write(s, tmp, strlen(tmp));
	memset(tmp, 0, 512);
	read(s, tmp, 511);
	printf("'%s'\n", tmp);
	close(s);
	return 0;
}


Req *request(const char* dstip, const int dstport)
{
	Req *req;
	req = malloc(reqsize);
	req->vn = 4;
	req->cd = 1;
	req->dstip = inet_addr(dstip);
	req->dstport = htons(dstport);
	strncpy(req->userid, USERNAME, 8);
	return req;
}
