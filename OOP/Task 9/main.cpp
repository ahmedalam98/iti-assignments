// ----- Utilizing graphics.h draw geometric shapes, including rectangles, lines, and circles ----- //

#include <iostream>
#include <stdlib.h>
#include <graphics.h>
#include <conio.h>

// class point
class Point
{
    int x, y;

public:
    Point()
    {
        this->x = 0;
        this->y = 0;
    }

    Point(int x, int y)
    {
        this->x = x;
        this->y = y;
    }

    void setX(int x)
    {
        this->x = x;
    }

    void setY(int y)
    {
        this->y = y;
    }

    int getX()
    {
        return this->x;
    }

    int getY()
    {
        return this->y;
    }

    // copy constructor
    Point(Point &p)
    {
        this->x = p.x;
        this->y = p.y;
    }
};

// class circle
class Circle
{
    Point center;
    int radius;

public:
    Circle()
    {
        this->radius = 0;
    }

    Circle(int x, int y, int radius) : center(x, y)
    {
        this->radius = radius;
    }

    void setCenter(int x, int y)
    {
        this->center.setX(x);
        this->center.setY(y);
    }

    void setRadius(int radius)
    {
        this->radius = radius;
    }

    void getCenter(Point &p)
    {
        p = this->center;
    }

    Point getCenter()
    {
        Point p(this->center);
        return p;
    }

    int getRadius()
    {
        return this->radius;
    }

    void draw()
    {
        circle(this->center.getX(), this->center.getY(), this->radius);
    }
};

// class rectangle
class Rect
{
    Point topLeft, bottomRight;
    public:
    Rect(): topLeft(), bottomRight() {}
    Rect(int x1, int y1, int x2, int y2): topLeft(x1, y1), bottomRight(x2, y2) {}
    void setTopLeft(int x, int y)
    {
        this->topLeft.setX(x);
        this->topLeft.setY(y);
    }

    void setBottomRight(int x, int y)
    {
        this->bottomRight.setX(x);
        this->bottomRight.setY(y);
    }

    Point getTopLeft()
    {
        Point p(this->topLeft);
        return p;
    }

    void getTopLeft(Point &p)
    {
        p = this->topLeft;
    }

    Point getBottomRight()
    {
        Point p(this->bottomRight);
        return p;
    }

    void getBottomRight(Point &p)
    {
        p = this->bottomRight;
    }

    void draw()
    {
        rectangle(this->topLeft.getX(), this->topLeft.getY(), this->bottomRight.getX(), this->bottomRight.getY());
    }

};

// class line
class Line
{
    Point start, end;
    public:
    Line(): start(), end() {}
    Line(int x1, int y1, int x2, int y2): start(x1, y1), end(x2, y2) {}
    void setStart(int x, int y)
    {
        this->start.setX(x);
        this->start.setY(y);
    }

    void setEnd(int x, int y)
    {
        this->end.setX(x);
        this->end.setY(y);
    }

    Point getStart()
    {
        Point p(this->start);
        return p;
    }

    void getStart(Point &p)
    {
        p = this->start;
    }

    Point getEnd()
    {
        Point p(this->end);
        return p;
    }

    void getEnd(Point &p)
    {
        p = this->end;
    }

    void draw()
    {
        line(this->start.getX(), this->start.getY(), this->end.getX(), this->end.getY());
    }
};



int main()
{
    Rect r1(319,537,679,655);
    Line l1(421,533,421,403);
    Line l2(585,531,585,399);
    Circle c1(507,347,230);
    Line l3(425,271,467,141);
    Line l4(581,269,537,143);
    Circle c2(503,109,100);
    initgraph();
    r1.draw();
    l1.draw();
    l2.draw();
    c1.draw();
    l3.draw();
    l4.draw();
    c2.draw();


    getch();
    return 0;
}
