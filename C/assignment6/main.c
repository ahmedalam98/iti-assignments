#include<stdio.h>
#define STD 3
#define SUB 4

void main() {
int marks[STD][SUB];
int i,j;
int sum[STD] ={0};

    for (int i =0; i < STD; i++) {
        printf("Student number: %d \n",i+1);
            for(int j=0; j < SUB; j++){
                printf("Enter subject grade: %d \n",j+1);
                scanf("%d", &marks[i][j]);
            }
        }
    }


