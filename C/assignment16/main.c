// Task 16 : Highlighted Menu ( functions + edit , delete )

#include <stdio.h>
#include <stdlib.h>
#include <conio.h>
#include <windows.h>


void textattr(int i)
{
    SetConsoleTextAttribute(GetStdHandle(STD_OUTPUT_HANDLE), i);
}

void gotoxy(int x, int y)
{
    COORD coord;
    coord.X = x;
    coord.Y = y;
    SetConsoleCursorPosition(GetStdHandle(STD_OUTPUT_HANDLE), coord);
}

struct Employee
{
    char name[50];
    char age[5];
    char id[10];
    char salary[20];
    char bonus[20];
};


void displayMainMenu(int choice);
void newEmployee(int *employeeCount,struct Employee employees[]);
void displayEmployeeByID(int employeeCount,struct Employee employees[]);
void displayAllEmployees(int employeeCount,struct Employee employees[]);

int main()
{
    int choice = 0;
    struct Employee employees[100];
    int employeeCount = 0;

    while (1)
    {
        system("cls");
        displayMainMenu(choice);

        char ch = getch();
        if (ch == -32)
        {
            ch = getch(); // Extended key

            if (ch == 77)
            {
                break;
            }
            else if (ch == 75)
            {
                choice = 0;
            }

            if (ch == 72)   // Up arrow
            {
                if (choice == 0)
                {
                    choice = 5;
                }
                else
                    choice--;
            }
            else if (ch == 80)     // Down arrow
            {
                if (choice == 5)
                {
                    choice = 0;
                }
                else
                    choice++;
            }
        }
        else if (ch == 13)     // Enter key
        {
            if (choice == 0)
            {
                newEmployee(&employeeCount,employees);
            }
            else if (choice == 1)
            {
                displayEmployeeByID(employeeCount,employees);
            }
            else if (choice == 2)
            {
                displayAllEmployees(employeeCount,employees);
            }
            else if (choice == 3)
            {
                editEmployee(employeeCount, employees);
            }
            else if (choice == 4)
            {
                deleteEmployee(&employeeCount, employees);
            }
            else if (choice == 5)
            {
                break;
            }
        }
    }

    return 0;
}

void displayMainMenu(int choice)
{
    textattr(0x0B);
    printf("Main Menu\n");

    if (choice == 0)
    {
        textattr(0x0D);
        printf("> New\n");
        textattr(0x0B);
        printf("  DisplayID\n");
        printf("  DisplayAll\n");
        printf("  EditEmployee\n");
        printf("  DeleteEmployee\n");
        printf("  Exit\n");
    }
    else if (choice == 1)
    {
        printf("  New\n");
        textattr(0x0D);
        printf("> DisplayID\n");
        textattr(0x0B);
        printf("  DisplayAll\n");
        printf("  EditEmployee\n");
        printf("  DeleteEmployee\n");
        printf("  Exit\n");
    }
    else if (choice == 2)
    {
        textattr(0x0B);
        printf("  New\n");
        printf("  DisplayID\n");
        textattr(0x0D);
        printf("> DisplayAll\n");
        textattr(0x0B);
        printf("  EditEmployee\n");
        printf("  DeleteEmployee\n");
        printf("  Exit\n");
    }
    else if (choice == 3)
    {
        textattr(0x0B);
        printf("  New\n");
        printf("  DisplayID\n");
        printf("  DisplayAll\n");
        textattr(0x0D);
        printf("> EditEmployee\n");
        textattr(0x0B);
        printf("  DeleteEmployee\n");
        printf("  Exit\n");
    }
    else if (choice == 4)
    {
        textattr(0x0B);
        printf("  New\n");
        printf("  DisplayID\n");
        printf("  DisplayAll\n");
        printf("  EditEmployee\n");
        textattr(0x0D);
        printf("> DeleteEmployee\n");
        textattr(0x0B);
        printf("  Exit\n");
    }
    else if (choice == 5)
    {
        textattr(0x0B);
        printf("  New\n");
        printf("  DisplayID\n");
        printf("  DisplayAll\n");
        printf("  EditEmployee\n");
        printf("  DeleteEmployee\n");
        textattr(0x0D);
        printf("> Exit\n");
    }
}

void newEmployee(int* employeeCount, struct Employee employees[])
{
    system("cls");
    gotoxy(0, 2);
    printf("Name: ");
    gotoxy(20, 2);
    printf("Age: ");
    gotoxy(10, 0);
    printf("Id: ");
    gotoxy(0, 4);
    printf("Salary: ");
    gotoxy(20, 4);
    printf("Bonus: ");

    gotoxy(14, 0);
    scanf("%s", employees[*employeeCount].id);
    gotoxy(5, 2);
    scanf("%s", employees[*employeeCount].name);
    gotoxy(25, 2);
    scanf("%s", employees[*employeeCount].age);
    gotoxy(8, 4);
    scanf("%s", employees[*employeeCount].salary);
    gotoxy(26, 4);
    scanf("%s", employees[*employeeCount].bonus);

    (*employeeCount)++;
}

void displayEmployeeByID(int employeeCount,struct Employee employees[])
{
    system("cls");
    printf("Enter Employee ID: ");
    char searchId[10];
    scanf("%s", searchId);
    int found = 0;
    for (int i = 0; i < employeeCount; i++)
    {
        if (strcmp(employees[i].id, searchId) == 0)
        {
            printf("Employee Found:\n");
            printf("Name: %s\n", employees[i].name);
            printf("Age: %s\n", employees[i].age);
            printf("ID: %s\n", employees[i].id);
            printf("Salary: %s\n", employees[i].salary);
            printf("Bonus: %s\n", employees[i].bonus);
            found = 1;
            break;
        }
    }
    if (!found)
    {
        printf("Employee with ID %s not found.\n", searchId);
    }
    getch();
}
void editEmployee(int employeeCount,struct Employee employees[])
{
    system("cls");
    printf("Enter Employee ID to edit: ");
    char searchId[10];
    scanf("%s", searchId);
    int found = 0;

    for (int i = 0; i < employeeCount; i++)
    {
        if (strcmp(employees[i].id, searchId) == 0)
        {
            gotoxy(0, 4);
            printf("Name: %s\n", employees[i].name);
            gotoxy(20, 4);
            printf("Age: %s\n", employees[i].age);
            gotoxy(10, 2);
            printf("ID: %s\n", employees[i].id);
            gotoxy(0, 6);
            printf("Salary: %s\n", employees[i].salary);
            gotoxy(20, 6);
            printf("Bonus: %s\n", employees[i].bonus);


            gotoxy(0, 10);
            printf("Name: \n");

            gotoxy(20, 10);
            printf("Age: \n");

            gotoxy(0, 12);
            printf("Salary: \n" );

            gotoxy(20, 12);
            printf("Bonus: \n");

            gotoxy(5, 10);
            scanf("%s", employees[i].name);
            gotoxy(25, 10);
            scanf("%s", employees[i].age);
            gotoxy(7, 12);
            scanf("%s", employees[i].salary);

            gotoxy(27, 12);
            scanf("%s", employees[i].bonus);
            gotoxy(0, 14);
            printf("Employee data updated.\n");
            found = 1;
            break;
        }
    }

    if (!found)
    {
        printf("Employee with ID %s not found.\n", searchId);
    }

    getch();
}

void deleteEmployee(int *employeeCount,struct Employee employees[])
{
    system("cls");
    printf("Enter Employee ID to Delete: ");
    char idToDelete[10];
    scanf("%s", idToDelete);
    int found = 0;

    for (int i = 0; i < *employeeCount; i++)
    {
        if (strcmp(employees[i].id, idToDelete) == 0)
        {
            for (int j = i; j < *employeeCount - 1; j++)
            {
                employees[j] = employees[j + 1];
            }
            printf("Employee data deleted.\n");
            (*employeeCount)--;
            found = 1;

            break;
        }
    }

    if (!found)
    {
        printf("Employee with ID %s not found.\n", idToDelete);
    }

    getch();
}
void displayAllEmployees(int employeeCount,struct Employee employees[])
{
    system("cls");
    for (int i = 0; i < employeeCount; i++)
    {
        printf("Employee %d :\n \n", i + 1);
        printf("Name: %s\n", employees[i].name);
        printf("Age: %s\n", employees[i].age);
        printf("Id: %s\n", employees[i].id);
        printf("Salary: %s\n", employees[i].salary);
        printf("Bonus: %s\n", employees[i].bonus);
        printf("\n");
    }
    getch();
}

