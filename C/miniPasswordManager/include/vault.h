#ifndef VAULT_H
#define VAULT_H

#include <stdio.h>
#include <stdbool.h>

#define MAX_LINE 384
#define SUCCESS   0
#define FILE_ERROR 2
#define NOT_FOUND  3

/* vault_ops.c -------------------------------- */
int  vault_add   (const char *site,
                  const char *user,
                  const char *pass);

int  vault_get   (const char *site);
int  vault_list  (void);
int  vault_delete(const char *site);
// For Reusability Purposes, the check() function will go into vault_ops.c as well
int command_id (const char *cmd);
/* repl.c ------------------------------------- */
void start_repl(void);     /* blocks until user exits */

#endif /* VAULT_H */

