CC   = gcc
CFLAGS = -Wall -Wextra -Iinclude

SRC  = src/main.c src/repl.c src/vault_ops.c
OBJ  = $(SRC:.c=.o)

vault: $(OBJ)
	$(CC) $(CFLAGS) $^ -o $@

clean:
	rm -f $(OBJ) vault

