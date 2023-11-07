// ------------ Calculate the area of geometric shapes using inheritance --------------- //

#include <iostream>

using namespace std;

class Geoshape
{
protected:
    float dim1;
    float dim2;

public:
    Geoshape()
    {
        dim1 = dim2 = 0;
    }
    Geoshape(float d)
    {
        dim1 = dim2 = d;
    }
    Geoshape(float d1, float d2)
    {
        dim1 = d1;
        dim2 = d2;
    }
    void setDim1(float d1)
    {
        dim1 = d1;
    }
    void setDim2(float d2)
    {
        dim2 = d2;
    }
    float getDim1()
    {
        return dim1;
    }
    float getDim2()
    {
        return dim2;
    }
    float calcArea()
    {
        return 0.0;
    }
};

class Rect: public Geoshape
{
public:
    Rect() {}
    Rect(float d1, float d2) :Geoshape(d1, d2){}
    float calcArea()
    {
        return dim1 * dim2;
    }
};

class Square: protected Rect
{
public:
    Square(){}
    Square(int l): Rect(l, l) {}
    void setDim(float d)
    {
        dim1 = dim2 = d;
    }
    float calcArea()
    {
        return Rect::calcArea();
    }
};

class Circle: protected Geoshape
{
public:
    Circle(){}
    Circle(float r): Geoshape(r){}
    float calcArea()
    {
        return 3.14 * dim1 * dim2;
    }
    void setRadius(float r)
    {
        dim1 = dim2 = r;
    }
};

class Triangle: public Geoshape
{
public:
    Triangle(){}
    Triangle(float b, float h): Geoshape(b, h){}
    float calcArea()
    {
        return .5 * dim1 * dim2;
    }
};

int main()
{
    Triangle t(20, 40);
    cout << "Triangle Area :   " << t.calcArea() << " cm^2" << endl;
    Circle c(10);
    cout << "Circle Area :     " << c.calcArea() << " cm^2" << endl;
    Rect r(2, 5);
    cout << "Rectangle Area :  " << r.calcArea() << " cm^2" << endl;
    Square s(10);
    cout << "Square Area :     " << s.calcArea() << " cm^2" << endl;
    return 0;
}
