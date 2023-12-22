#include <iostream>
#include "Linkedlist.h"

using namespace std;

int main()
{
    LinkedList myList;
    myList.Add(1);
    myList.Add(9);
    myList.Add(7);
    myList.Add(5);
    cout << "  Linked list Nodes : \t";
    myList.Display();

    cout << endl;
    myList.BubbleSort();
    cout << "  Bubble Sort : \t";
    myList.Display();

    cout << endl;
    cout << "  Binary Search (5) : \t";
    cout << myList.BinarySearch(5);

    cout << endl;
    cout << "  Binary Search (9) : \t";
    cout << myList.BinarySearch(9);

    cout << endl;
    cout << "  Binary Search (6) : \t";
    cout << myList.BinarySearch(6);
    return 0;
}
