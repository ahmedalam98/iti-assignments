#include <iostream>
#include "LinkedList.h"

using namespace std;

int main()
{
    LinkedList myList;

    myList.Add(3);
    myList.Add(5);
    myList.Add(7);
    myList.Add(9);
    myList.Add(11);
    myList.Display();
    cout<<endl;
    myList.InsertAfter(6,5);
    myList.InsertAfter(7,6);
    myList.Display();

    myList.Remove(15);

    int myCount=myList.GetCount();
    cout<<endl<<myCount<<endl;

    int myData=  myList.GetByIndex(1);
    cout<<myData<<endl;

    int flag = myList.Search(15);

    return 0;
}
