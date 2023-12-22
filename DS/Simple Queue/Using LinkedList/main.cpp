#include <iostream>
#include "LinkedList.h"

using namespace std;

int main()
{
    LinkedList queue;

    queue.Enqueue(3);
    queue.Enqueue(5);
    queue.Enqueue(7);
    queue.Enqueue(9);

    cout << "Queue: ";
    queue.Display();
    cout << endl;

    int dequeued1 = queue.Dequeue();
    int dequeued2 = queue.Dequeue();

    cout << "Dequeued elements [ First In First Out ] : " << dequeued1 << ", " << dequeued2 << endl;

    cout << "Updated Queue: ";
    queue.Display();
    cout << endl;

    return 0;
}
