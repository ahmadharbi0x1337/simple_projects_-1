#include "vault.h"
#include <string.h>

int main(int argc, char *argv[])
{
    if (argc == 1) {        /* no args ⇒ REPL */
        start_repl();
        return SUCCESS;
    }

    /* legacy single‑shot mode (same checks you already wrote) */
    if (argc < 2 || argc > 5 || argc == 4) {
        /* print usage … */
        return -1;
    }

    switch (command_id(argv[1])) {
        case 1: return vault_add   (argv[2], argv[3], argv[4]);
        case 2: return vault_get   (argv[2]);
        case 3: return vault_list  ();
        case 4: return vault_delete(argv[2]);
        default: puts("invalid usage"); return -1;
    }
}

