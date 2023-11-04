// ------------- Single line editor program - Dynamic Allocation -------------

#include <stdio.h>
#include <stdlib.h>
#include <conio.h>
#include <windows.h>
#include <ctype.h>

// Function Prototypes
void textattr(int);
void gotoxy(int, int);
void drawBox(int);
void clearScreen();

#define size 50
#define row 8
#define home 71
#define end 79
#define right 77
#define left 75
#define enter 13
#define esc 27
#define backspace 8
#define delete 83

int main()
{
    int i = 0;
    char *textArr = (char*)malloc(size * sizeof(char));

    char ch;
    int first = 8, current = 8, last = 8;
    char *pfirst = textArr;
    char *pcurrent = textArr;
    char *plast = textArr;

    clearScreen();
    drawBox(size);
    gotoxy(current, row);

    do
    {
        gotoxy(current, row);
        ch = getch();
        switch (ch)
        {
        case -32:
            ch = getch();

            switch (ch)
            {

            case right:
                current++;
                pcurrent++;
                if (current >= last)
                {
                    current = last;
                    pcurrent = plast;
                }
                break;

            case left:
                current--;
                pcurrent--;
                if (current <= first)
                {
                    current = first;
                    pcurrent = pfirst;
                }
                break;

            case home:
                current = first;
                pcurrent = pfirst;
                break;

            case end:
                current = last;
                pcurrent = plast;
                break;

            case delete:
                if (current <= first)
                {
                    current = first;
                    pcurrent = pfirst;
                }
                for (int i = 0; i < last - size; i++)
                {
                    textArr[i] = textArr[i+1];
                }
                last--;
                plast--;
                current=first;
                pcurrent=pfirst;
                gotoxy(first, row);
                for (int i = 0; i < last - size; i++)
                {
                    printf("%c", textArr[i]);
                }
                printf(" ");
                gotoxy(current, row);

                break;
            }
            break;

        case backspace:
            if (current > first)
            {
                for (int i = current - first - 1; i < last - size; i++)
                {
                    textArr[i] = textArr[i + 1];
                }
                last--;
                plast--;
                current--;
                pcurrent--;
                gotoxy(current, row);
                for (int i = current - first; i < last - size; i++)
                {
                    printf("%c", textArr[i]);
                }
                printf(" ");
                gotoxy(last, row);
            }
            break;

        default:
            // Print character if text does not exceed the specified size
            if (isprint(ch) && i < size)
            {
                textArr[i] = ch;
                current++;
                pcurrent++;
                last++;
                plast++;
                i++;
                printf("%c", ch);
            }
            break;
        }
    }
    while (ch != enter && ch != esc);

    // Output
    gotoxy(8,9);
    printf("Your text is: %s\n", textArr);

    printf("\n\n");

    free(textArr);
    return 0;
}

void drawBox(int len)
{
    textattr(0x60);
    for (int i = 0; i < len; i++)
    {
        gotoxy(8 + i, row);
        _cprintf(" ");
    }
}

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

void clearScreen()
{
    system("cls");
}
