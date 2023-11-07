// ----------------- Basic Class Inheritance ----------------- //

#include <iostream>

using namespace std;

class Base
{
protected:
    int a, b;

public:
    Base()
    {
        a = b = 0;
    }
    Base(int n)
    {
        a = b = n;
    }
    Base(int m, int n)
    {
        a = m;
        b = n;
    }
    void setA(int m)
    {
        a = m;
    }
    void setB(int n)
    {
        b = n;
    }
    int getA()
    {
        return a;
    }
    int getB()
    {
        return b;
    }
    int calcSum()
    {
        return a + b;
    }
};

class Derived: public Base
{
    int c;

public:
    Derived()
    {
        c = 0;
    }
    Derived(int x): Base(x)
    {
        c = x;
    }
    Derived(int m, int n, int x): Base(m, n)
    {
        c = x;
    }
    void setC(int x)
    {
        c = x;
    }
    int getC()
    {
        return c;
    }
    calcSum()
    {
        return Base::calcSum() + c;
    }
};

int main()
{
    Derived d;
    Derived d1(5);
    Derived d2(1, 5, 10);

    cout << "First Derived Sum : "<< d.calcSum() << endl;
    cout << "Second Derived Sum : "<< d1.calcSum() << endl;
    cout << "Third Derived Sum : "<< d2.calcSum() << endl;
    return 0;
}

