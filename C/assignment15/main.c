
// Task 15 : Reverse, Sum, Swap of Array using pointers

#include <stdio.h>
#include <stdlib.h>
#define SIZE 4

void swap();
void fullArray(int*);
int sum(int*);
void reverse(int*);

int main()
{
int arr[SIZE];
int *ptr=arr;

fullArray(ptr);
sum(&arr);
reverse(ptr);
swap();
    return 0;
}

reverse(int *ptr){

  printf("reversed array :");
   for (int j=SIZE-1 ; j>=0 ; j-- ){
             printf("%d",ptr[j]);
    }
    printf("\n");
}

fullArray(int *ptr){
  printf("Enter %d numbers: \n",SIZE);

  for (int i=0;i<SIZE ; i++ ){
    scanf(" %d",&ptr[i]);
  }
}

sum(int *ptr){
  int sum =0;

  for (int i=0 ; i<SIZE ; i++){
        sum= sum+ptr[i];
        }
  printf("Sum : %d \n",sum);
}


swap(){
int x;
int y;
int* px = x;
int* py = y;
printf("Enter 2 values : \n");
scanf(" %d" , &px);
scanf(" %d" , &py);
printf("Before Swapping %d : %d \n",px,py);
int temp;
temp=px;
px=py;
py=temp;
printf("After Swapping %d : %d \n",px,py);
}
