// Task 4 : Magic Box (Diagonal Method)

#include <stdio.h>
#include <stdlib.h>
#include <windows.h>

void gotoxy(int x, int y){ COORD coord; coord.X = x; coord.Y = y; SetConsoleCursorPosition(GetStdHandle(STD_OUTPUT_HANDLE), coord); }

void main() {
    int row = 1, size, i;
    printf("Enter odd size of the box : ");
    scanf("%d", &size);
    int col = (size + 1)/2;

    if(size % 2 != 0) {

        for(i = 1; i <= (size * size); i++){
            gotoxy(col*6, row);
            printf("%d", i);

            if(i % size != 0) {
                row--;
                col--;
            }else if(i%size == 0){
                row++;
            }

            if(row < 1 ){
                row = size;
            }

            if(col < 1){
                col = size;
            }

            if(row > size) {
                row = 1;
            }
        }
    }else {
        printf("Please Enter Odd Number Only");
    }
    }

