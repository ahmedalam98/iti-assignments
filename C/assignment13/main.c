// Task 13 : Factorial Number using For Loop

#include <stdio.h>
#include <stdlib.h>

int factorial(int n) {
    int result = 1;

    for (int i = 1; i <= n; i++) {
        result *= i;
    }

    return result;
}

int main() {
    int number;
    printf("Enter a number: ");
    scanf("%d", &number);

    if (number < 0) {
        printf("Enter a positive number next time.\n");
    } else {
        int result = factorial(number);
        printf("For Loop Factorial of %d is : %d\n", number, result);
    }

    return 0;
}
