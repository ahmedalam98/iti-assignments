#include <stdio.h>
#include <conio.h>

int main() {
    char ch;

    printf("Press a key: ");


    ch = getch();

    if (ch == -32) {
        printf("\n You pressed an Extended key. ASCII key code: %d\n", ch);
    } else {
        printf("\n You pressed a normal key. ASCII key code: %d\n", ch);
    }

    return 0;
}
