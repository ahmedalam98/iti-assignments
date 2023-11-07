// ------------------ Template class stack for a stack data structure ------------------ //

#include <iostream>

using namespace std;
template<class T>
class stack
{
    int top;
    int size;
    T*ptr;
    static int counter;

public:
    stack()
    {
        top=0;
        size=10;
        ptr=new T[size];
        counter++;
    }

    stack (int s)
    {
        top=0;
        size=s;
        ptr=new T[size];
        counter++;
    }

    ~stack()
        {
            delete []ptr;
            counter--;
        }
        static int getcounter()
        {
            return counter;
        }
        stack (stack&);
        void push(T);
        T pop();
        template<class U>
        friend void viewcontent(stack<U>&);

    };

    template<class T>
    int stack <T>::counter=0;

    template<class T>
    stack<T>::stack(stack <T>&myst)
    {
        top=myst.top;
        size=myst.size;
        ptr=new T[size];
        for (int i=0; i<top; i++)
        {
            ptr[i]=myst.ptr[i];
        }
        counter++;
    }

    template<class T>
    void stack<T>::push(T n)
    {
        if(top==size)
            cout<<"Stack Is full";
            else
    {
        ptr[top]=n;
        top++;
    }
    }

    template<class T>
    T stack<T>::pop()
    {
        T retval = 0;
        if(top==0)
        cout<<"stack Is empty";
        else
        {

            top--;
            retval=ptr[top];

        }
        return retval;
    }

    template<class u>
    void viewcontent(stack<u>&mys)
    {
        int n = mys.top;
        for(int i=0; i<n; i++)
        {
            cout<<mys.ptr[i]<<endl;
        }
    };
    int main()
    {
        stack<int>s2;
        stack<int>s1(5);
        s2.push(10);
        s1.push(3);
        s1.push(2);
        cout<<s1.pop()<<endl;
        stack<char> sch;
        sch.push('x');
        sch.push('y');
        viewcontent(sch);
        cout<<sch.pop()<<endl;
        cout<<sch.pop()<<endl;
        stack<int>::getcounter();
        stack<char>::getcounter();
        return 0;
    }
