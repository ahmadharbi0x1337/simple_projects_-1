#include <stdio.h>
#include <string.h>
#include "vault.h"

int vault_add(const char* site, const char* username, const char* password)
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

int vault_get (const char* site)
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

int vault_list(void)
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
		printf("No saved credentials were found\n");
	}
	fclose(file);
	return SUCCESS;
}

int vault_delete(const char* site)
{
	FILE *file = fopen("vault.txt", "r");
	FILE *tmp = fopen("vault_tmp.txt", "w");
	if (!file)
	{
		perror("Failed to open vault.txt");
		return FILE_ERROR;
	}
	if (!tmp)
	{
		perror("Failed to open vault_tmp.txt");
		fclose(file);
		return FILE_ERROR;
	}
	int delete_counter = 0, counter = 0;
	char line[MAX_LINE];
	char ssite[100], username[100], password[100];
	while (fgets(line, sizeof(line), file))
	{
		if (sscanf(line, "%99s %99s %99s", ssite, username, password) == 3)
		{
			if (strcmp(ssite, site) == 0)
			{
				if (delete_counter != 1)
				{
					delete_counter++;
					continue;
				}
			}
			fprintf(tmp, "%s %s %s\n", ssite, username, password);
			counter++;
		}
	}
	if (counter == 0)
	{
		printf("File is Empty");
	}
	if (delete_counter == 0)
	{
		printf("No credentials found for %s\n", site);
	}
	else
	{
		printf("Deleted credentials for %s\n", site);
	}
	fclose(file);
	fclose(tmp);
	int renamed = rename("vault_tmp.txt", "vault.txt");
	if (renamed != 0)
	{
		perror("rename");
		return FILE_ERROR;
	}
	return SUCCESS;
}

int command_id(const char* cmd)
{
    if (strcmp(cmd, "add")    == 0) return 1;
    if (strcmp(cmd, "get")    == 0) return 2;
    if (strcmp(cmd, "list")   == 0) return 3;
    if (strcmp(cmd, "delete") == 0) return 4;
    return 5;   /* anything else */
}
