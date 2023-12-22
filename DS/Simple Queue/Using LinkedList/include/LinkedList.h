#ifndef LINKEDLIST_H
#define LINKEDLIST_H

#include "Node.h"
#include <iostream>

using namespace std;

class LinkedList
{
    Node *head, *tail;


public:
    LinkedList()
    {
        head = tail = NULL;
    }

    /////////////////////////////////////////////////////////////////////////////

    void Display()
    {
        Node *current = head;

        while(current != NULL)
        {
            cout << current->Data << "\t";
            current = current->Next;
        }
    }

    /////////////////////////////////////////////
    //      Simple Queue enqueue & dequeue     //
    /////////////////////////////////////////////


    void Enqueue(int data)
    {
        Node *node = new Node(data);

        if (head == NULL)
        {
            head = tail = node;
        }
        else
        {
            tail->Next = node;
            node->Prev = tail;
            tail = node;
        }
    }

    ////////////////////////////////////////////////////////////////////////////

    int Dequeue()
    {
        if (head == NULL)
        {
            cout << "Queue is empty." << endl;
            return -1;
        }

        int data = head->Data;
        Node *temp = head;

        if (head == tail)
        {
            head = tail = NULL;
        }
        else
        {
            head = head->Next;
            head->Prev = NULL;
        }

        delete temp;
        return data;
    }

protected:

private:

    Node* GetNodeByData(int data)
    {
        Node *current = head;

        while(current != NULL)
        {
            if(data == current->Data)
                return current;

            current = current->Next;
        }

        return NULL;
    }
};

#endif // LINKEDLIST_H
