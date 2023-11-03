// ----------------------- Math Menu Dynamic Allocation ----------------------- //

#include <stdio.h>

void getNumbers(int arr[], int size);
void displayNumbers(int arr[], int size);
void sortNumbers(int arr[], int size);
void reverseData(int arr[], int size);
void getMin(int arr[], int size);
void getMax(int arr[], int size);
void sum(int arr[], int size);
void printError();

int main() {
    int size;
    char c;

    printf("Enter Elements Number: ");
    scanf("%d", &size);
    int* arr;

    arr = (int*) malloc(sizeof(int) * size);
    if (!arr)
        return 1;

    getNumbers(arr, size);

    do {
        printf("\n Choose Mathematical Operation :\n a. take numbers\n b. show numbers\n c. sort\n d. reverse\n e. min & max\n f. sum\n q. quit\n\nYour choice is: ");

        fflush(stdin);
        scanf(" %c", &c);

        switch (c) {
            case 'a':
            case 'A':
                getNumbers(arr, size);
                break;
            case 'b':
            case 'B':
                displayNumbers(arr, size);
                break;
            case 'c':
            case 'C':
                sortNumbers(arr, size);
                break;
            case 'd':
            case 'D':
                reverseData(arr, size);
                break;
            case 'e':
            case 'E':
                getMin(arr, size);
                getMax(arr, size);
                break;
            case 'f':
            case 'F':
                sum(arr, size);
                break;
            case 'q':
            case 'Q':
                return 0;
            default: printf("Invalid choice. Please try again.\n");
        }
    } while (1);

    free(arr);
    return 0;
}



void getNumbers(int arr[], int size) {
    for (int i = 0; i < size; i++) {
        printf("Enter number %d: ", i + 1);
        scanf("%d", &arr[i]);
    }
}

void displayNumbers(int arr[], int size) {
    printf("Numbers: ");
    for (int i = 0; i < size; i++) {
        printf("%d ", arr[i]);
    }
    printf("\n");
}

void reverseData(int arr[], int size) {
    int first = 0;
    int second = size - 1;

    while (first < second) {
        int temp = arr[first];
        arr[first] = arr[second];
        arr[second] = temp;

        first++;
        second--;
    }

    printf("Reversed numbers:\n");
    displayNumbers(arr, size);
}

void sortNumbers(int arr[], int size) {
    char typeOfSorting;

    printf("Ascending (a) or Descending (d)? ");
    fflush(stdin);
    scanf(" %c", &typeOfSorting);

    for (int i = 0; i < size; i++) {
        for (int j = i; j < size; j++) {
            if ((typeOfSorting == 'a' || typeOfSorting == 'A') ? (arr[i] > arr[j]) : (arr[i] < arr[j])) {
                int temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    printf("Sorted numbers:\n");
    displayNumbers(arr, size);
}

void getMin(int arr[], int size) {
    int min = arr[0];
    for (int i = 1; i < size; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    printf("\nMinimum number: %d\n", min);
}

void getMax(int arr[], int size) {
    int max = arr[0];
    for (int i = 1; i < size; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    printf("Maximum number: %d\n\n", max);
}

void sum(int arr[], int size) {
    int total = 0;
    for (int i = 0; i < size; i++) {
        total += arr[i];
    }
    printf("\nSum: %d\n\n", total);
}


