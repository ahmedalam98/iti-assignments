
#include <iostream>

using namespace std;

//////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////

class Node
{
public:
    int Data;
    Node *Left, *Right;

    Node(int data)
    {
        Data = data;
        Left = Right = NULL;
    }

protected:

private:
};

//////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////

class Tree
{
    Node *root;

public:
    Tree()
    {
        root = NULL;
    }

    int GetMaxDepth() {
        return CalculateMaxDepth(root);
    }

    void Add(int data)
    {
        Node *node = new Node(data);

        if(root == NULL)
        {
            root = node;
        }
        else
        {
            Node *current = root;
            Node *parent;

            while(current != NULL)
            {
                parent = current;

                if(data > current->Data)
                    current = current->Right;
                else
                    current = current->Left;
            }

            if(data > parent->Data)
                parent->Right = node;
            else
                parent->Left = node;
        }
    }

    void Remove(int data)
    {
        Node *node = GetNodeByData(data);

        if(node == NULL)
            return;

        if(node == root)
        {
            if(root->Left == NULL && root->Right == NULL)
            {
                root = NULL;
            }
            else if(root->Right == NULL)
            {
                root = root->Left;
            }
            else if(root->Left == NULL)
            {
                root = root->Right;
            }
            else
            {
                Node *newRoot = root->Left;
                Node *maxRight = GetMaxRight(newRoot);

                maxRight->Right = root->Right;
                root = newRoot;
            }
        }
        else
        {
            Node *parent = GetParent(node);
            Node *newChild;

            if(node->Left == NULL && node->Right == NULL)
            {
                newChild = NULL;
            }
            else if(node->Right == NULL)
            {
                newChild = node->Left;
            }
            else if(node->Left == NULL)
            {
                newChild = node->Right;
            }
            else
            {
                Node* newParent = node->Left;
                Node *maxRight = GetMaxRight(newParent);

                maxRight->Right = node->Right;

                newChild = newParent;
            }

            if(parent->Left == node)
                parent->Left = newChild;
            else
                parent->Right = newChild;
        }

        delete node;
    }

    void Traverse()
    {
        Display(root);
    }

protected:

private:

    void Display(Node *node)
    {
        if(node == NULL)
            return;

        Display(node->Left);
        cout << node->Data<<"\t";
        Display(node->Right);
    }

    Node* GetNodeByData(int data)
    {
        Node *current = root;

        while(current != NULL)
        {
            if(data == current->Data)
                return current;

            if(data > current->Data)
                current = current->Right;
            else
                current = current->Left;
        }

        return NULL;
    }

    Node* GetParent(Node *node)
    {
        Node *parent = root;

        while(parent != NULL)
        {
            if(parent->Left == node ||
                    parent->Right == node)
            {
                return parent;
            }

            if(node->Data > parent->Data)
                parent = parent->Right;
            else
                parent = parent->Left;
        }

        return NULL;
    }

    Node* GetMaxRight(Node *node)
    {
        while(node->Right != NULL)
        {
            node = node->Right;
        }

        return node;
    }

    int CalculateMaxDepth(Node *node) {
        if (node == NULL) {
            return 0;
        }

        int leftDepth = CalculateMaxDepth(node->Left);
        int rightDepth = CalculateMaxDepth(node->Right);

        return 1 + std::max(leftDepth, rightDepth);
    }
};

//////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////

int main()
{
    Tree myTree;


    myTree.Add(50);
    myTree.Add(30);
    myTree.Add(70);
    myTree.Add(20);
    myTree.Add(40);
    myTree.Add(60);
    myTree.Add(80);
    myTree.Add(100);
    myTree.Add(70);
    myTree.Add(120);
    myTree.Add(130);

    cout << "    Main Tree : ";
    myTree.Traverse();
    cout << endl <<  "\n";

    int maxDepth = myTree.GetMaxDepth();
    cout << "    Maximum Depth of the Tree : " << maxDepth << endl;


    return 0;
}
