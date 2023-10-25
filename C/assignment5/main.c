#include <stdio.h>
#define MAX_SIZE 5

int main() {
    int numbers[MAX_SIZE];
    int size = 0;
    char choice;
    int maximum = numbers[0];
    int minimum = numbers[0];
    int sum = 0;

    do {
        printf("\nMenu:\n");
        printf("a. Take numbers\n");
        printf("b. Show numbers\n");
        printf("c. Sort array (ascending & descending)\n");
        printf("d. Reverse array\n");
        printf("e. Get min & max number\n");
        printf("g. Sum array\n");
        printf("q. Quit\n");
        printf("Enter your choice: ");
        scanf(" %c", &choice);

        switch (choice) {
            case 'a': {
            printf("Please enter the array size which up to %d :", MAX_SIZE);
            scanf("%d", &size);
            if(size < 0 || size > MAX_SIZE) {
                printf("Invalid Size :( ");
            }
            else {
                printf("Enter %d numbers :", size);
                for(int i = 0; i < size; i++) {
                    scanf("%d", &numbers[i]);
                }
            }
            break;
            }

            case 'b': {
            printf("Numbers in array:\n");
            for(int i = 0; i < size; i++) {
                printf("%d ",numbers[i]);
            }
            printf("\n");
            break;
            }

            case 'c': {
                for (int i = 0; i < size; i++) {
                    for (int j = 0; j < size; j++) {

                        if (numbers[j] > numbers[i])
                            {
                                int tmp = numbers[i];
                                numbers[i] = numbers[j];
                                numbers[j] = tmp;
                            }
                        }
                    }

                printf("\n\nAscending : ");
                    for (int i = 0; i < size; i++)
                        {
                            printf("%d", numbers[i]);
                        }

                for (int i = 0; i < size; i++)
                    {
                        for (int j = 0; j < size; j++)
                        {
                            if (numbers[j] < numbers[i])
                            {
                                int tmp = numbers[i];
                                numbers[i] = numbers[j];
                                numbers[j] = tmp;
                            }
                        }
                    }
                printf("\n\nDescending : ");
                    for (int i = 0; i < size; i++)
                        {
                            printf("%d", numbers[i]);
                        }

                    break;
            }

            case 'd': {
                printf("Reversed array: ");
                for (int i = size - 1; i >= 0; i--) {
                    printf("%d ", numbers[i]);
                }
                printf("\n");
                break;
            }

            case 'e': {
                int minimum = numbers[0];
                int maximum = numbers[0];
                for (int i = 1; i < size; i++) {
                    if (numbers[i] > maximum) {
                        maximum = numbers[i];
                    }
                    if (numbers[i] < minimum) {
                        minimum = numbers[i];
                    }
                }
                printf("Maximum number: %d\n", maximum);
                printf("Minimum number: %d\n", minimum);
                break;
            }

            case 'g': {
                int sum = 0;
                for (int i = 0; i < size; i++) {
                    sum = sum + numbers[i];
                }
                printf("Sum of numbers is: %d\n", sum);
                break;
            }
            case 'q': {
                printf("\n Quitting the program.\n");
                break;
            }
            default: printf("Invalid choice. Please try again.\n");
        }
    } while (choice != 'q');

    return 0;
}
