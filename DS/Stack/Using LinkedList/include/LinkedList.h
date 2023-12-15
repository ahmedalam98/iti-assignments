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

    ////////////////////////////////
    //      Stack Push & Pull     //
    ////////////////////////////////

    void Push(int data)
    {
        Node *node = new Node(data);

        if (head == NULL)
        {
            head = tail = node;
        }
        else
        {
            node->Prev = tail;
            tail->Next = node;
            tail = node;
        }
    }

    ////////////////////////////////////////////////////////////////////////////

    int Pop()
    {
        if (tail == NULL)
        {
            cout << "Stack is empty." << endl;
            return -1;
        }

        int data = tail->Data;
        Node *temp = tail;

        if (head == tail)
        {
            head = tail = NULL;
        }
        else
        {
            tail = tail->Prev;
            tail->Next = NULL;
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
