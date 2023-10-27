#include <stdio.h>
#include <string.h>

int main() {
    char names[5][2][11]; // 11 ---> 10 for maximum name length and 1 for the null ( \0 )

    // Input names for each user
    for (int i = 0; i < 5; i++) {
        printf("Enter First name for User %d: ", i + 1);
        scanf("%s", names[i][0]);
        printf("Enter Last name for User %d: ", i + 1);
        scanf("%s", names[i][1]);
    }

    printf("---------------------------------------------------------------------- \n");

    for (int i = 0; i < 5; i++) {
        char fullname[22];
        strcpy(fullname, names[i][0]);
        strcat(fullname, " ");
        strcat(fullname, names[i][1]);

        printf("User %d Fullname is: %s\n", i + 1, fullname);
    }

    return 0;
}





