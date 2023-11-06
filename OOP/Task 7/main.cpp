// ------- Demonstration of the use of the equal operator with a stack class ------- //

#include <iostream>

using namespace std;

class Stack
{
    int *st;
    int top, Size;

public:
    Stack(int s)
    {
        Size = s;
        top = 0;
        st = new int[Size];
        cout<<"I'm the Parameterized Constructor"<<endl;
    }

    ~Stack()
    {
        delete  []st;
        cout<<endl;
        cout<<"I'm the Destructor"<<endl;
    }

    void viewStack();
    void push(int n);
    int pop();
    int& operator[](int index);

    Stack &operator=(Stack&);
};

int main()
{
    int x, y;
    cout << "Enter size of array: ";
    cin >> y;
    cout << "Enter number to push: ";
    cin >> x;

    Stack s1(y);
    s1.push(x);
    Stack s2=s1;
    cout<<"--------------------------"<<endl;
    cout<<"Equal Operator Is Now Used"<<endl;
    cout<<"--------------------------"<<endl;
    s2.viewStack();
    s1.push(99);
    s1.push(999);

    cout << "Base stack element at index 0: " << s1[0] << endl;
    cout << "Base stack element at index 1: " << s1[1] << endl;
    cout << "Base stack element at index 2: " << s1[2] << endl;
    cout << s1.pop() << endl;
    cout << s1.pop() << endl;

    return 0;
}

void Stack::push(int n)
{
    if(top ==Size)
        cout<<"Stack is full"<<endl;
    else
    {
        st[top] = n;
        top++;
    }
}

int Stack:: pop()
{
    if(!top)
    {
        cout<<"Stack is empty"<<endl;
    }
    else
    {
        top--;
        return st[top];

    }
}

void Stack::viewStack()
{
    if (top == 0)
    {
        cout << "Stack is empty." << endl;
    }
    else
    {
        cout<<endl;
        cout << "Stack Elements: ";
        for (int i = 0; i < top; i++)
        {
            cout << st[i] << " ";
        }
        cout << endl;
    }
}

Stack& Stack::operator=(Stack & x)
{
    delete[]st;
    top=x.top;
    Size=x.Size;
    st=new int[Size];
    for(int i =0; i<top; i++)
        st[i]=x.st[i];

    return *this;
}

int& Stack::operator[](int index)
{
    if (index < 0 || index >= top)
    {
        cout<<"Index Out of Stack Range";
        return st[0];
    }
    return st[index];
}
