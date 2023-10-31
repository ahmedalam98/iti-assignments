// Task 14 : Factorial Number using Recursive Function

#include <stdio.h>
#include <stdlib.h>

int factorial(int n) {
    if (n == 0 || n == 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

void main() {
    int number;
    printf("Enter a number: ");
    scanf("%d", &number);

    if (number < 0) {
        printf("Enter a positive number next time.\n");
    } else {
        int result = factorial(number);
        printf("Recursive Factorial of %d is : %d\n", number, result);
    }

}
