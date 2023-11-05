// ------------------ Dynamic Size Stack ------------------ //

#include <iostream>

using namespace std;
class Stack
{
    int * arr;
    int top,size;
public:
    Stack()
    {
        size=10;
        top=0;
        arr = new int[size];
        cout<<"I'm The Default Constructor"<<endl;

    }

    Stack(int s)
    {
        size=s;
        top=0;
        arr = new int[size];
        cout<<"I'm The Dynamic Constructor"<<endl;
    }
    void push(int);
    int pop();
    ~Stack()
    {
        delete arr;
        cout<<"I'm The Destructor"<<endl;
    }
};

int main()
{
    int size, number;
    cout<<"Enter Stack Size : ";
    cin>>size;
    Stack s(size);
    cout<<"Enter Numbers of Stack :"<<endl;
    for(int i=0 ; i<size; i++)
    {
        cin>>number;
        s.push(number);
    }
    cout << "Numbers in Stack: ";
    for (int i = 0; i < size; i++)
    {
        cout << s.pop();
        if (i < size - 1)
        {
            cout << "\t";
        }
    }
    cout << endl;

    return 0;
}

void Stack::push(int n)
{
    if(top==10)
    {
        cout<<"Stack is full"<<endl;
    }
    else
    {
        arr[top]=n;
        top++;
    }
}

int Stack::pop()
{
    int return_val;
    if(top==0)
    {
        cout<<"Stack is empty"<<endl;
        return_val=0;
    }
    else
    {
        top--;
        return_val=arr[top];
    }
    return return_val;
}
