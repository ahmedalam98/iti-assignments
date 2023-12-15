#ifndef NODE_H
#define NODE_H


class Node
{
    public:
        int Data;
        Node *Prev, *Next;

        Node(int data)
        {
            Data = data;
            Prev = Next = NULL;
        }

    protected:

    private:
};

#endif // NODE_H
