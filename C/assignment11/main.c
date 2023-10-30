// Task 11 : Decimal to Binary without recursive function

#include <stdio.h>
#include <stdlib.h>

void main (){

    int value;

    printf("Enter a Decimal value: ");
    scanf("%d", &value);


        int binary[10];
        int i = 0;

        while (value > 0) {
            binary[i] = value % 2;
            value = value / 2;
            i++;
        }

        printf("Binary: ");
        for (int j = i - 1; j >= 0; j--) {
            printf("%d", binary[j]);
        }

}
