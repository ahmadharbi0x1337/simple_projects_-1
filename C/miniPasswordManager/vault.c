#include <stdio.h>
#include <string.h>
#include <stdbool.h>

#define MAX_LINE 384
#define SUCCESS 0
#define FILE_ERROR 2
#define NOT_FOUND 3

int add(const char* site, const char* username, const char* password);
int get (const char* site);
int list();
int delete(const char* site);
int check(const char* command);


int main(int argc, char* argv[])
{
	if (argc < 2 || argc > 5 || argc == 4)
	{
		printf("Invalid Usage. Try one of the following: ./vault add <site> <username> <password>\n"
				"./vault get <site>\n"
				"./vault list\n"
				"./vault delete <site>\n");
		return -1;
	}
	int command = check(argv[1]);
	switch (command)
	{
		case 1:
			add(argv[2], argv[3], argv[4]);
			break;
		case 2:
			get(argv[2]);
			break;
		case 3:
			list();
			break;
		case 4:
			delete(argv[2]);
			break;
		case 5:
			printf("invalid usage\n");
			break;
	}
	return SUCCESS;

}


int check(const char* command)
{
	if (strcmp(command, "add") == 0)
	{
		return 1;
	}
	else if (strcmp(command, "get") == 0)
	{
		return 2;
	}
	else if (strcmp(command, "list") == 0)
	{
		return 3;
	}
	else if (strcmp(command, "delete") == 0)
	{
		return 4;
	}
	else
	{
		return 5;
	}
}

int add(const char* site, const char* username, const char* password)
{
	printf("Adding Credentials For %s: %s / %s\n", site, username, password);
	// APPEND MODE
	FILE *file = fopen("vault.txt", "a");
	if (!file)
	{
		perror("Failed To Open vault.txt");
		return FILE_ERROR;
	}
	fprintf(file, "%s %s %s\n", site, username, password);
	fclose(file);
	printf("Successfully Added The Credentials To vault.txt\n");
	return SUCCESS;
}

int get (const char* site)
{
	FILE *file = fopen("vault.txt", "r");
	if (!file)
	{
		perror("Failed To Open vault.txt\n");
		return FILE_ERROR;
	}
	char line[MAX_LINE];
	char username[100], password[100], ssite[100];
	// fgets IDEAL FOR LINE BASED READING
	// fgets() READS ONE LINE AT A TIME , MEANING STOPS AT \n
	while (fgets(line, sizeof(line), file))
	{
		// sscanf() IDEAL FOR PARSING TOKENS FROM A LINE
		// sscanf() READS UNTIL FACING [whitespace, \n, EOF, skips multiple spaces, \t, skips multiple \t]
		if (sscanf(line, "%99s %99s %99s", ssite, username, password) == 3)
		{
			if (strcmp(ssite, site) == 0)
			{
				printf("Found: Site:%s | Username:%s | Password:%s\n", ssite, username, password);
				fclose(file);
				return SUCCESS;
			}
		}
	}
	fclose(file);
	printf("No Credentials Found for %s\n", site);
	return NOT_FOUND;
}

int list()
{
	FILE *file = fopen("vault.txt", "r");
	if (!file)
	{
		perror("Failed To Open vault.txt");
		return FILE_ERROR;
	}
	int counter = 0;
	char line[MAX_LINE];
	char site[100], username[100], password[100];
	while (fgets(line, sizeof(line), file))
	{
		if (sscanf(line, "%99s %99s %99s", site, username, password) == 3)
		{
			printf("Site: %s | Username: %s | Password: %s\n", site, username, password);
			counter++;
		}
	}
	if (counter == 0)
	{
		printf("No Saved Credentials Was Found\n");
	}
	return SUCCESS;
}

int delete(const char* site)
{
	return SUCCESS;
}
