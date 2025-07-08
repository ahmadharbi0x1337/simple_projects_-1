#include <stdio.h>
#include <stdlib.h>
#include <unistd.h>
#include <string.h>
#include <sys/socket.h>
#include <arpa/inet.h>
#include <netinet/in.h>


#define PROXY "127.0.0.1"
#define PROXY_PORT 9050
#define USERNAME "toralize"
#define reqsize sizeof(Req)
#define ressize sizeof(Res)


typedef unsigned char int8;
typedef unsigned short int int16;
typedef unsigned int int32;


typedef struct proxy_request {
	int8 vn;
	int8 cd;
	int16 dstport;
	int32 dstip;
	unsigned char userid[8];

}__attribute__((__packed__)) Req;

typedef struct proxy_response {
	int8 vn;
	int8 cd;
	int16 _;
	int32 __;
}__attribute__((__packed__)) Res;


Req *request(const char*,const int);

int main(int,char**);