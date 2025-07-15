#include "vault.h"
#include <string.h>

	/* ---------- helpers for the REPL ---------- */

	/* strip trailing newline (if any) */
	static void chomp(char *s)
	{
    		size_t n = strlen(s);
    		if (n && s[n - 1] == '\n') s[n - 1] = '\0';
	}

	/* split input line into tokens (argv‑style). 
   	returns token count (max 5). */
	static int tokenize(char *line, char *argv[], int max_tokens)
	{
    		int argc = 0;
   	 	char *tok = strtok(line, " \t");
    		while (tok && argc < max_tokens)
		{
       			 argv[argc++] = tok;
       		 	tok = strtok(NULL, " \t");
		}
 		return argc;
	}


void start_repl(void)
{
	    /* ----------  REPL mode ---------- */
    puts(
" #     #   ##   #    # #      #####  \n"                                                                                                                                                                                   
" #     # #    # #    # #        #    \n"                                                                                    
"  #   #  ###### #    # #        #    \n"                                                                                    
"   # #   #    # #    # #        #    \n"                                                                                    
"    #    #    #  ####  ######   #    \n"                                                                                    
"\n"                                                                                                                         
"    #       ######   \n"                                                                                                    
"   # #      #     #   ##    ####   ####  #    #  ####  #####  #####     #    #   ##   #    #   ##    ####  ###### #####  \n"
"  #   #     #     #  #  #  #      #      #    # #    # #    # #    #    ##  ##  #  #  ##   #  #  #  #    # #      #    # \n"
" #     #    ######  #    #  ####   ####  #    # #    # #    # #    #    # ## # #    # # #  # #    # #      #####  #    # \n"
" #######    #       ######      #      # # ## # #    # #####  #    #    #    # ###### #  # # ###### #  ### #      #####  \n"
" #     #    #       #    # #    # #    # ##  ## #    # #   #  #    #    #    # #    # #   ## #    # #    # #      #   #  \n"
" #     #    #       #    #  ####   ####  #    #  ####  #    # #####     #    # #    # #    # #    #  ####  ###### #    # \n"                                                                                                               
"    #                                       #  \n"                                                                          
"   # #   #    # ##### #    #  ####  #####  ### \n"                                                                          
"  #   #  #    #   #   #    # #    # #    #  #  \n"                                                                          
" #     # #    #   #   ###### #    # #    #     \n"                                                                          
" ####### #    #   #   #    # #    # #####   #  \n"                                                                          
" #     # #    #   #   #    # #    # #   #  ### \n"                                                                          
" #     #  ####    #   #    #  ####  #    #  #  \n"                                                                          
"\n"                                                                                                                         
"    #                                      #   \n"                                                                          
"   # #   #    # #    #   ##   #####       # #   #      #    #   ##   #####  #####  #\n"                                     
"  #   #  #    # ##  ##  #  #  #    #     #   #  #      #    #  #  #  #    # #    # #\n"                                     
" #     # ###### # ## # #    # #    #    #     # #      ###### #    # #    # #####  #\n"                                     
" ####### #    # #    # ###### #    #    ####### #      #    # ###### #####  #    # #\n"                                     
" #     # #    # #    # #    # #    #    #     # #      #    # #    # #   #  #    # #\n"                                     
" #     # #    # #    # #    # #####     #     # ###### #    # #    # #    # #####  #\n"                                              
"Type 'help' for commands, 'exit' to quit.\n");

    char line[512];
    char *args[5];          /* max tokens we expect */
    while (1) {
        printf("vault> ");
        if (!fgets(line, sizeof line, stdin)) break; /* EOF (Ctrl‑D) */
        chomp(line);
        if (!*line) continue;                        /* empty line */

        int argc_repl = tokenize(line, args, 5);
        if (argc_repl == 0) continue;

        int cmd = command_id(args[0]);

        switch (cmd) {
            case 1:  /* add */
                if (argc_repl != 4) {
                    puts("Usage: vault_add <site> <user> <pass>");
                } else {
                    vault_add(args[1], args[2], args[3]);
                }
                break;
            case 2:  /* get */
                if (argc_repl != 2) {
                    puts("Usage: vault_get <site>");
                } else {
                    vault_get(args[1]);
                }
                break;
            case 3:  /* list */
                if (argc_repl != 1) {
                    puts("Usage: vault_list");
                } else {
                    vault_list();
                }
                break;
            case 4:  /* delete */
                if (argc_repl != 2) {
                    puts("Usage: vault_delete <site>");
                } else {
                    vault_delete(args[1]);
                }
                break;
            default:        /* not add/get/list/delete */
                if (strcmp(args[0], "help") == 0) {
                    puts(
"Commands:\n"
"  add <site> <user> <pass>   store credentials\n"
"  get <site>                 retrieve first match\n"
"  list                       list all credentials\n"
"  delete <site>              delete first match\n"
"  help                       show this help\n"
"  exit                       quit the program");
                } else if (strcmp(args[0], "exit") == 0 ||
                           strcmp(args[0], "quit") == 0) {
                    puts("Good‑bye!");
                    return;
                } else {
                    puts("Unknown command. Type 'help'.");
                }
        }
    }
}
