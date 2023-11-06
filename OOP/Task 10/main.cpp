// ----------------- Dynamic drawer [ Picture , Circle , Rectangle , Line Classes ] -----------------

#include <iostream>
#include <stdlib.h>
#include <graphics.h>
#include <conio.h>

//////////////////////////////////////////////////////////////////////////////////////////

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

   // Copy constructor

   Point(Point &p)
   {
       this->x = p.x;
       this->y = p.y;
   }
};

//////////////////////////////////////////////////////////////////////////////////////////

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

//////////////////////////////////////////////////////////////////////////////////////////

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

//////////////////////////////////////////////////////////////////////////////////////////

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

//////////////////////////////////////////////////////////////////////////////////////////

class Picture
{
    int cNum;
    int rNum;
    int lNum;

    Circle *pcircles;
    Rect *prects;
    Line *plines;

public:
    Picture()
    {
        cNum = rNum = lNum = 0;
        pcircles = 0;
        prects = 0;
        plines = 0;
    }

    Picture(int c, int r, int l, Circle *pc, Rect *pr, Line *pl)
    {
        cNum = c;
        rNum = r;
        lNum = l;
        pcircles = pc;
        prects = pr;
        plines = pl;
    }

    void setcircles(int c, Circle *pc)
    {
        cNum = c;
        pcircles = pc;
    }

    void setrectangle(int r, Rect *pr)
    {
        rNum = r;
        prects = pr;
    }
    void setlines(int l, Line *pl)
    {
        lNum = l;
        plines = pl;
    }

    void paint();
};

void Picture:: paint()
{
    int i;

    for(i = 0; i < cNum; i++)
    {
        pcircles[i].draw();
    }
    for(i = 0; i < rNum; i++)
    {
        prects[i].draw();
    }
    for(i = 0; i < lNum; i++)
    {
        plines[i].draw();
    }
}

//////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////

int main()
{
    int x;      // no. circles
    int y;      // no. rectangles
    int z;      // no. lines
    int c1;     // point 1
    int c2;     // point 2
    int c3;     // point 3
    int c4;     // point 4
    int r;      // radius

    cout<<"Enter Circles Number : "<<endl;
    cin >> x;

    // Arrays Pointers
    Circle *cr = new Circle[x];
    Rect *rec= new Rect[y];
    Line *li= new Line[z];

    for(int i = 0 ; i < x ; i++)
    {
        cout<<"Enter Circle " << i+1 <<" Center Point ( x , y ) : " <<endl;
        cin >> c1;
        cin >> c2;
        cout<<"Enter Circle Radius: " <<endl;
        cin >> r;

        cr[i].setCenter(c1,c2);
        cr[i].setRadius(r);
    }

    cout<<"Enter Rectangles Number : "<<endl;
    cin >> y;

    for(int i = 0 ; i < y; i++)
    {
        cout<<"Enter rectangle" << i+1 << " upper right point ( x1 , y1 ) : " <<endl;
        cin >> c1;
        cin >> c2;
        cout<<"Enter rectangle " << i+1 << " lower left point ( x2 , y2 ) : " <<endl;
        cin >> c3;
        cin >> c4;

        rec[i].setTopLeft(c1,c2);
        rec[i].setBottomRight(c3,c4);
    }

    cout<<"Enter Lines Number : "<<endl;
    cin >> z;
    for(int i = 0 ; i < z; i++)
    {
        cout<<"Enter line " << i+1 << " start point ( x1 , y1 ) : " <<endl;
        cin >> c1;
        cin >> c2;
        cout<<"Enter line " << i+1 << " end point ( x2 , y2 ) : " <<endl;
        cin >> c3;
        cin >> c4;

        li[i].setStart(c1,c2);
        li[i].setEnd(c3,c4);
    }

    //    Circle c1(507,347,230);
    //    Rect r1(319,537,679,655);
    //    Line l1(421,533,421,403);

    initgraph();
    setcolor(10);

    // Create a Picture object and set the shapes
    //    Picture pic(x,y,z,cr,rec,li);

    Picture pic;
    pic.setcircles(x, cr);
    pic.setrectangle(y,rec);
    pic.setlines(z,li);


    // Draw the shapes
    pic.paint();

    getch();
    return 0;
}
