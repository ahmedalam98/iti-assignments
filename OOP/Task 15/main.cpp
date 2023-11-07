// ---------------------- Geo Shape Inheritance ---------------------- //

#include <iostream>

using namespace std;

class GeoShape
{

protected :
    float dim1, dim2;
public:
    GeoShape()
    {
        dim1 = dim2 = 0;
    }
    GeoShape(float d)
    {
        dim1 = dim2 =d;
    }

    GeoShape(float d1, float d2)
    {
        dim1 = d1;
        dim2 = d2;
    }

    void setDim1(float d)
    {
        dim1 = d;
    }

    void setDim2(float d)
    {
        dim2 = d;
    }

    float getDim1()
    {
        return dim1;
    }

    float getDim2()
    {
        return dim2;
    }

    virtual float calcArea() = 0;

};

class Rectangle : public GeoShape
{
public:
    Rectangle():GeoShape() {}

    Rectangle(float d1, float d2):GeoShape(d1,d2) {}

    float calcArea() override
    {
        return dim1 * dim2;
    }
};

class Square : public Rectangle
{
public:
    Square():Rectangle() {}

    Square(float d):Rectangle(d,d) {}


};

class Circle : public GeoShape
{
public:
    Circle():GeoShape() {}

    Circle(float d):GeoShape(d) {}

    float calcArea() override
    {
        return 3.14 * dim1 * dim1;
    }
};

class Triangle : public GeoShape
{

public:
    Triangle():GeoShape() {}

    Triangle(float d1, float d2):GeoShape(d1,d2) {}

    float calcArea() override
    {
        return 0.5 * dim1 * dim2;
    }
};


int main()
{
    Rectangle r(5,10);
    cout << "Area of Rectangle : " << r.calcArea() << " cm^2" << endl;

    Square s(5);
    cout << "Area of Square : " << s.calcArea() << " cm^2" << endl;

    Circle c(5);
    cout << "Area of Circle : " << c.calcArea() << " cm^2" << endl;

    Triangle t(5,10);
    cout << "Area of Triangle : " << t.calcArea() << " cm^2" << endl;

    return 0;

}
