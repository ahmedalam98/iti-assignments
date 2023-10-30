// Task 3 : Write a program to display a menu with 3 choices of food items and their prices. 

#include <stdio.h>
#include <stdlib.h>

int main()
{
   char choice;

    printf("Menu:\n");
    printf("A- Burger\n");
    printf("B- Pasta\n");
    printf("C- Chicken\n");
    printf("Enter your choice: ");
    scanf("%c", &choice);

    if (choice == 'A' || choice == 'a') {
        printf("You have chosen Burger. Price: $35\n");
    } else if (choice == 'B' || choice == 'b') {
        printf("You have chosen Pasta. Price: $22\n");
    } else if (choice == 'C' || choice == 'c') {
        printf("You have chosen Chicken. Price: $60\n");
    } else {
        printf("Invalid choice\n");
    }
}
