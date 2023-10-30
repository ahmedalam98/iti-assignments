// Task 1 : Basic I/O Programs

#include<stdio.h>
#include<conio.h>

int main()
{

//1
     printf("Hello World!\n");

     printf("--------------------------------------------------------------------------\n");

//2
    int ASCII;
    printf("Enter an ASCII value:");
    scanf("%d", &ASCII);
    printf("The char is: %c \n",ASCII);

    printf("--------------------------------------------------------------------------\n");

//3
    printf("Enter character:");
     char x=getch();
    printf("The ASCII is: %d\n",x);

     printf("--------------------------------------------------------------------------\n");

//4
    int a;
    printf("Enter an integer: ");
    scanf("%d", &a);

    printf("Hexadecimal: %X\n", a);
    printf("Octal: %o\n", a);

     printf("--------------------------------------------------------------------------\n");

//5
    int ch;

    /* Stream and standard input ?! */
    printf("Enter a character using getc(): ");
    ch = getc(stdin);
    printf("Character in getc(): %c", ch);

    /* Consoled and don't need enter */
    printf("Enter a character using getchar(): ");
    ch = getchar();
    printf("Character in getchar(): %c\n", ch);

    /* Consoled and need enter */
    printf("Enter a character using getche(): ");
    ch = getche();
    printf("\nCharacter in getche(): %c\n", ch);

    /* Not Consoled used for passwords */
    printf("Enter a character using getch(): ");
    ch = getch();
    printf("Character in getch(): %c\n", ch);



     printf("--------------------------------------------------------------------------\n");

//6
    int number, shift;
    printf("Enter a number: ");
    scanf("%d", &number);

    printf("Enter shift number: ");
    scanf("%d", &shift);

    int leftShifted = number << shift;
    int rightShifted = number >> shift;

    printf("Left Shifted: %d\n", leftShifted);
    printf("Right Shifted: %d\n", rightShifted);
}
