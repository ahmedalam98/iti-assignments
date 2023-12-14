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

    void Add(int data)
    {
        Node *node = new Node(data);

        if(head == NULL)
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

    void Display()
    {
        Node *current = head;

        while(current != NULL)
        {
            cout << current->Data << "\t";
            current = current->Next;
        }
    }

    void Remove(int data)
    {
        Node *node = GetNodeByData(data);

        if(node == NULL)
            return;

        if(node == head)
        {
            if(node == tail)
            {
                head = tail = NULL;
            }
            else
            {
                head = head->Next;
                head->Prev = NULL;
            }
        }
        else if(node == tail)
        {
            tail = tail->Prev;
            tail->Next = NULL;
        }
        else
        {
            Node *A = node->Prev;
            Node *B = node->Next;

            A->Next = B;
            B->Prev = A;
        }


        delete node;
    }

    int Search(int data)
    {
        Node *node = GetNodeByData(data);

        return node != NULL;
    }

    /////////////////////////////////////////////////////////////////////////////

    void InsertAfter(int data, int afterData)
    {
        Node *oldNode = GetNodeByData(afterData);
        Node *newNode = new Node(data);
        if (oldNode == NULL)
        {
            cout << "Node not found." << endl;
        }

        newNode->Next=oldNode->Next;
        oldNode->Next=newNode;
        newNode->Prev=oldNode;
    }

    /////////////////////////////////////////////////////////////////////////////

    int GetCount()
    {
        int count=0;
        Node *current = head;

        if(head==NULL)
        {
            cout<<"Your list is empty";
        }

        while(current != NULL)
        {
            count++;
            current=current->Next;
        }

        return count;
    }

    ////////////////////////////////////////////////////////////////////////////

    int GetByIndex(int index)
    {
        int myData;
        Node *current=head;
        if(index==0){
            return head->Data;
        }
        for(int i=0; i<index; i++)
        {
            current=current->Next;
            myData=current->Data;

        }
        return myData;

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
