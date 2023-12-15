#include <iostream>
#include "LinkedList.h"

using namespace std;

int main()
{
    LinkedList stack;

    stack.Push(3);
    stack.Push(5);
    stack.Push(7);
    stack.Push(9);

    cout << "Stack: ";
    stack.Display();
    cout << endl;

    int popped1 = stack.Pop();
    int popped2 = stack.Pop();

    cout << "Removed elements [ Last In First Out ] : : " <<popped1<< ", " <<popped2 << endl;

    cout << "Updated Stack: ";
    stack.Display();
    cout << endl;

    return 0;
}
