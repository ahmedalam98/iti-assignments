#include <stdio.h>

int main() {
    char characters[6];  // Array to store the characters (plus one extra space for null terminator)
    int count = 0;

    printf("Enter characters (press Enter to submit):\n");

    while (count < 5) {
        int ch = getche();

        if (ch==13) {  // Check for the Enter key (ASCII 10)
            break;
        }

        characters[count] = ch;
        count++;
    }

    characters[count] = '\0';  // Add a null terminator to make it a valid C string

    printf("\nYou entered: %s\n", characters);

    return 0;
}
