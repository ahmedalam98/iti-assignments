#include <stdio.h>
#include <stdlib.h>

// Task 12 : Decimal to Hexadecimal Recursive Function

void decimalToHexa(int n) {
    if (n == 0) {
        return;
    }

    int rem = n % 16;
    decimalToHexa(n / 16);

    if (rem < 10) {
        printf("%d", rem);
    } else {
        // For values 10-15, print A-F
        printf("%c", 'A' + rem - 10);
    }
}

void main() {
    int value;

    printf("Enter a Decimal value: ");
    scanf("%d", &value);

    if (value < 0) {
        printf("Please enter a non-negative decimal value.\n");
        return 1;
    }

    printf("Hexadecimal: ");

    if (value == 0) {
        printf("0");
    } else {
        decimalToHexa(value);
    }

    printf("\n");

}


