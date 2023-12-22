#ifndef LINKEDLIST_H
#define LINKEDLIST_H

#include <iostream>
#include "Node.h"

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

        void Display()
        {
            Node *current = head;

            while(current != NULL)
            {
                cout << current->Data << "   ";
                current = current->Next;
            }
        }

        int Search(int data)
        {
            Node *node = GetNodeByData(data);
            return node != NULL;
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
            else if (node == tail)
            {
                tail = tail->Prev;
                tail->Next = NULL;
            }
            else
            {
                node->Prev->Next = node->Next;
                node->Next->Prev = node->Prev;
            }

            delete node;

        }

        int GetCount()
        {
            Node *current = head;
            int Count = 0;
            while (current != NULL) {
                Count++;
                current = current->Next;
            }
            return Count;
        }

        int GetDataByIndex(int index)
        {
            Node *current = head;
            for (int i = 0; i < index; i++) {
                if(current->Next != NULL)
                    current = current->Next;
                else
                    return current->Data;
            }
            return current->Data;
        }

        void InsertAfter(int data, int afterData)
        {
            Node *node = new Node(data);
            Node *current = GetNodeByData(afterData);

            if(current == NULL)
                return;

            if(current == head)
            {
                if(current == tail)
                {
                    tail = node;
                }
                else
                {
                    head->Next->Prev = node;
                    node->Next = head->Next;
                    head->Next = node;
                }
            }
            else if(current == tail)
            {
                tail->Next = node;
                node->Prev = tail;
                tail = node;
            }
            else
            {
                node->Next = current->Next;
                node->Next->Prev = node;
                node->Prev = current;
                current->Next = node;
            }
        }

        ////////////////////////////////////////////////////////////////////////////
        ////////////////////////////////////////////////////////////////////////////

        void BubbleSort()
        {
            Node *node;
            int sorted = 0;
            int Count = GetCount();

            for(int counter = 0; counter < Count - 1 && sorted == 0; counter++ )
            {
                sorted = 1;
                node = head;
                for(int i = 0; i < Count - 1 - counter; i++)
                {
                    if(node->Data > node->Next->Data)
                    {
                        int temp = node->Data;
                        node->Data = node->Next->Data;
                        node->Next->Data = temp;
                        sorted = 0;
                    }
                    node = node->Next;
                }
            }
        }

        ////////////////////////////////////////////////////////////////////////////
        ////////////////////////////////////////////////////////////////////////////

        int BinarySearch(int data)
        {
            int Front = 0;
            int Rear = GetCount() - 1;
            int mid;
            Node *node;

            while(Front <= Rear)
            {
                mid = (Front + Rear)/2;

                if(GetDataByIndex(mid) == data)
                    return 1;

                if(data > GetDataByIndex(mid))
                {
                    Front = mid + 1;
                }
                else
                {
                    Rear = mid - 1;
                }
            }
            return -1;
        }

    protected:

    private:
        Node* GetNodeByData(int data)
        {
            Node *current = head;

            while(current != NULL)
            {
                if(current->Data == data)
                {
                    return current;
                }
                current = current->Next;
            }

            return NULL;
        }
};

#endif // LINKEDLIST_H
