#include <stdio.h>
#include <stdlib.h>
#define STD 3
#define CRS 4

int main()
{
    int num;
    int arr[STD][CRS];
    int sum_row_arr[STD];
    char grade_arr[STD];
    float avg_col_arr[CRS];
    float avg_crs;
    int sum_crs;
    float avg_std;
    printf("Enter grades : \n");

    for (int i=0;i<STD;i++){
        for(int j=0;j<CRS;j++){
            printf("Student %d Course %d = " , i+1 ,j+1);
            scanf(" %d",&num);
            arr[i][j]=num;
        }
    }

    printf("--------------------------------------------------------\n");

    // sum of each row
     for (int i=0;i<STD;i++){
        int sum_std=0;
        printf("Student %d : ", i+1);

        for(int j=0;j<CRS;j++){
            printf(" %d" ,arr[i][j]);
            sum_std+=arr[i][j];
        }
        sum_row_arr[i]=sum_std;
        printf("\n");
    }

    for(int i=0;i<STD;i++){

     printf("The Sum of Student %d = %d \n",i+1,sum_row_arr[i]);
    }

    printf("--------------------------------------------------------\n");

    // avg for each col
    for (int j=0;j<CRS;j++){
        sum_crs=0;
        for(int i=0;i<STD;i++){

            sum_crs+=arr[i][j];

        }
        avg_crs = (float)sum_crs/STD;                               // (float) ---> because sum_crs & STD are integers
        avg_col_arr[j]=avg_crs;
        printf("\n");
    }

        for(int i=0;i<CRS;i++){

     printf("The Average of Course %d = %f \n",i+1,avg_col_arr[i]);
    }

    printf("--------------------------------------------------------\n");

    //get grade for each student

    for(int i=0;i<STD;i++){
        avg_std=(float)sum_row_arr[i]/CRS;

            printf("%d\n",sum_row_arr[i]);

        if (sum_row_arr[i]>=85){
            grade_arr[i]='A';
            printf(" %c\n",grade_arr[i]);
        }

        else if (sum_row_arr[i]<=84 && sum_row_arr[i]>=75){
            grade_arr[i]='B';
            printf(" %c\n",grade_arr[i]);
        }

        else if (sum_row_arr[i]<=74 && sum_row_arr[i]>=65){
            grade_arr[i]='C';
            printf(" %c\n",grade_arr[i]);
        }
        else if (sum_row_arr[i]<=64 && sum_row_arr[i]>=60){
            grade_arr[i]='D';
            printf(" %c\n",grade_arr[i]);
        }
        else{
            grade_arr[i]='F';
            printf(" %c\n",grade_arr[i]);
        }
    }

    printf("--------------------------------------------------------\n");

    //sort grade

    printf("\n Sorted grades: \n");
    char min_grade;
    int index_min;

    for(int i=0;i<STD;i++){
        min_grade=0;

        index_min=-1;
        char temp;
     for(int j=0;j<STD;j++){
        if (min_grade<grade_arr[j]){
            min_grade=grade_arr[j];
            index_min=j;

        }


     }
        temp=grade_arr[i];
        grade_arr[i]=min_grade;
        grade_arr[index_min]=temp;

    }

    for(int i=0;i<STD;i++){
        printf(" %c\n",grade_arr[i]);
    }

    return 0;
}
