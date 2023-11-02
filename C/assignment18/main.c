// ---------------- Different input number of names with different size using pointer to pointer ---------------- //

#include <stdio.h>
#include <stdlib.h>

void main()
{
    char** names;
    int size;
    int nameSize;

    printf("Enter number of names: ");
    scanf("%d", &size);

    names = (char**) malloc(sizeof(char*) * size);
    if (!names)
    {
        return 1;
    }

    for (int i = 0; i < size; i++)
    {
        printf("Enter name %d size (number) : ", i + 1);
        scanf("%d", &nameSize);
        names[i] = (char*) malloc(sizeof(char) * nameSize);
        if (!names[i])
        {
            return 1;
        }
    }

    for (int i = 0; i < size; i++)
    {
        printf("Enter name %d: ", i + 1);
        scanf("%s", names[i]);
    }

    printf("\n");
    printf("--------------------------------------\n");
    for (int i = 0; i < size; i++)
    {
        printf("Name %d is %s \n", i + 1, names[i]);
    }

    for (int i = 0; i < size; i++)
    {
        free(names[i]);
    }
    free(names);
    printf("--------------------------------------\n");
}

