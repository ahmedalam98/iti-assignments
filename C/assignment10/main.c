// Task 10 : Highlighted Menu of 4 options

#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <windows.h>

#define EXTENDED -32
#define UP 72
#define DOWN 80
#define HOME 71
#define END 79
#define TAB 9
#define ENTER 13
#define ESC 27


struct Employee
{
    char name[20];
    int age;
    float salary;
    int id;
    float bonus;
    float tax;
};


void gotoxy(int column, int line)
{
    COORD coord;
    coord.X = column;
    coord.Y = line;
    SetConsoleCursorPosition(GetStdHandle(STD_OUTPUT_HANDLE), coord);
}

void textattr(int i)
{
    SetConsoleTextAttribute(GetStdHandle(STD_OUTPUT_HANDLE), i);
}


void printMenu(int counter, char menu[4][20])
{
    system("cls");
    for (int i = 0; i < 4; i++)
    {
        if (counter == i)
        {
            textattr(13); // Change text color to violet (purple)
        }
        else
        {
            textattr(7);
        }
        gotoxy(5, 3 * i + 2);
        puts(menu[i]);
    }
}

void addEmp()
{
    gotoxy(10, 2);
    printf("ID: ");
    gotoxy(40, 2);
    printf("Name: ");
    gotoxy(10, 6);
    printf("Age: ");
    gotoxy(40, 6);
    printf("Salary: ");
    gotoxy(10, 10);
    printf("Bonus: ");
    gotoxy(40, 10);
    printf("Tax: ");
}

int main()
{
    char menu[4][20] = {"New Employee", "Display by id", "Display all", "Exit"};
    int counter = 0;
    char ch;
    int close = 0;
    int addedEmp[11] = {-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1};
    struct Employee employees[11];
    int index = 0;
    int count = 0;
    do
    {
        printMenu(counter, menu);
        ch = getch();
        switch (ch)
        {
        case EXTENDED:
            ch = getch();
            switch (ch)
            {
            case UP:
                counter--;
                if (counter < 0)
                {
                    counter = 3;
                }
                break;
            case DOWN:
                counter++;
                if (counter > 3)
                {
                    counter = 0;
                }
                break;
            case HOME:
                counter = 0;
                break;
            case END:
                counter = 3;
                break;
            }
            break;
        case ENTER:
            switch(counter)
            {
            case 0:
                system("cls");
                gotoxy(15 , 0);
                printf("ID Limit : 10");
                struct Employee emp;
                addEmp();
                gotoxy(15, 2);
                scanf("%d", &emp.id);
                gotoxy(46, 2);
                scanf("%s", &emp.name);
                gotoxy(15, 6);
                scanf("%d", &emp.age);
                gotoxy(50, 6);
                scanf("%f", &emp.salary);
                gotoxy(17, 10);
                scanf("%f", &emp.bonus);
                gotoxy(50, 10);
                scanf("%f", &emp.tax);
                employees[emp.id] = emp;
                addedEmp[emp.id] = emp.id;
                index++;
                count++;
                system("cls");
                break;
            case 1:
                system("cls");
                int id ;
                printf("Enter the id of emplyee : ");
                scanf("%d" , &id);
                if(addedEmp[id] == -1)
                {
                    printf("\nEmployee not found");
                }

                else{
                    gotoxy(10, 2);
                    printf("ID: ");
                    gotoxy(40, 2);
                    printf("Name: ");
                    gotoxy(10, 6);
                    printf("Age: ");
                    gotoxy(40, 6);
                    printf("Salary: ");
                    gotoxy(10, 10);
                    printf("Bonus: ");
                    gotoxy(40, 10);
                    printf("Tax: ");
                    gotoxy(10, 12);

                    gotoxy(15, 2);
                    printf("%d", employees[id].id);
                    gotoxy(46, 2);
                    printf("%s", employees[id].name);
                    gotoxy(15, 6);
                    printf("%d", employees[id].age);
                    gotoxy(50, 6);
                    printf("%f", employees[id].salary);
                    gotoxy(17, 10);
                    printf("%f", employees[id].bonus);
                    gotoxy(50, 10);
                    printf("%f", employees[id].tax);
                }
                getch();

                break;


            case 2:
                system("cls");
                int e ;
                int pos = 0;
                for(int i = 0 ; i < 11 ; i++)
                {
                    if(addedEmp[i] == -1){
                        continue;
                    }
                    else{
                    e = addedEmp[i];
                    gotoxy(10, 2 +(pos*11) );
                    printf("ID: ");
                    gotoxy(40, 2+(pos*11));
                    printf("Name: ");
                    gotoxy(10, 6+(pos*11));
                    printf("Age: ");
                    gotoxy(40, 6+(pos*11));
                    printf("Salary: ");
                    gotoxy(10, 10+(pos*11));
                    printf("Bonus: ");
                    gotoxy(40, 10+(pos*11));
                    printf("Tax: ");
                    gotoxy(10, 12+(pos*11));
                    printf("--------------------------------------------------------------------------");

                    gotoxy(15, 2+(pos*11));
                    printf("%d", employees[e].id);
                    gotoxy(46, 2+(pos*11));
                    printf("%s", employees[e].name);
                    gotoxy(15, 6+(pos*11));
                    printf("%d", employees[e].age);
                    gotoxy(50, 6+(pos*11));
                    printf("%f", employees[e].salary);
                    gotoxy(17, 10+(pos*11));
                    printf("%f", employees[e].bonus);
                    gotoxy(50, 10+(pos*11));
                    printf("%f", employees[e].tax);
                    pos++;

                    }
                }
                getch();
                break;


            case 3:
                exit(0);
                break;

            }
            break;
        case ESC:
            close = 1;
            break;
        case TAB:
            counter++;
            if(counter > 3)
            {
                counter = 0;
            }
            break;
        }
    }
    while(!close);
}
