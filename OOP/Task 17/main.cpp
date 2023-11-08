// ------------------------ Color Class Pointer to Pointer ------------------------ //

#include <iostream>
#include <graphics.h>

using namespace std;

class ColorPicture
{
    int color;

public:
    ColorPicture()
    {
        color = 0;
    }
    ColorPicture(int c)
    {
        color = c;
    }

    void setColor(int c)
    {
        color = c;
    }

    int getColor()
    {
        return color;
    }

    virtual void draw() = 0;


};

class Point
{
    int x, y;
public:
    Point()
    {
        x = 0;
        y = 0;
    }

    Point(int d)
    {
        x=y=d;
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
        return x;
    }
    int getY()
    {
        return y;
    }

    Point(Point &p)
    {
        this->x = p.x;
        this->y = p.y;
    }

};

class Circle : public ColorPicture
{
    Point center;
    int radius;
public:
    Circle()
    {
        radius = 0;
    }
    Circle(int x, int y, int r, int c):center(x,y), ColorPicture(c)
    {
        radius = r;
    }
    void setRadius(int r)
    {
        radius = r;
    }
    int getRadius()
    {
        return radius;
    }
    void setCenter(int x, int y)
    {
        center.setX(x);
        center.setY(y);
    }
    Point getCenter()
    {
        Point p(center);
        return p;
    }

    void getCenter(int &x, int &y)
    {
        x = center.getX();
        y = center.getY();
    }

    void draw()
    {
        setcolor(getColor());
        circle(center.getX(), center.getY(), radius);
    }

};


class Rect : public ColorPicture
{
    Point ul, br;
public:
    Rect()  {  }
    Rect (int x1, int y1, int x2, int y2, int c):ul(x1,y1), br(x2,y2), ColorPicture(c) {  }

    void setUL(int x, int y)
    {
        ul.setX(x);
        ul.setY(y);
    }

    void setBR(int x, int y)
    {
        br.setX(x);
        br.setY(y);
    }

    Point getUL()
    {
        Point p(ul);
        return p;
    }

    Point getBR()
    {
        Point p(br);
        return p;
    }

    void getUL(int &x, int &y)
    {
        x = ul.getX();
        y = ul.getY();
    }

    void getBR(int &x, int &y)
    {
        x = br.getX();
        y = br.getY();
    }

    void draw()
    {
        setcolor(getColor());
        rectangle(ul.getX(), ul.getY(), br.getX(), br.getY());
    }
};

class Line: public ColorPicture
{

    Point st, e;
public:
    Line() {};
    Line(int x1, int y1, int x2, int y2, int c) : st(x1, y1), e(x2,  y2), ColorPicture(c)  {}
    void setStart(int x, int y)
    {
        st.setX(x);
        st.setY(y);
    }
    void setEnd(int x, int y)
    {
        e.setX(x);
        e.setY(y);
    }

    Point getStart()
    {
        Point p(st);
        return p;
    }

    Point getEnd()
    {
        Point p(e);
        return p;
    }
    void draw()
    {
        setcolor(getColor());
        line(st.getX(), st.getY(), e.getX(), e.getY());
    }

};


class Picture
{
    int cNum;
    int rNum;
    int lNum;
    Circle *pCircles;
    Rect *pRects;
    Line *pLines;

    ColorPicture **pPictures;


public:
    int pNum;
    Picture()
    {
        cNum = rNum = lNum = 0;
    }

    Picture(int n, ColorPicture **p)
    {
        pNum = n;
        pPictures = p;
    }

    Picture(int c,  int r, int l, Circle * pC, Rect * pR, Line * pL)
    {
        cNum = c;
        rNum = r;
        lNum = l;
        pCircles = pC;
        pRects = pR;
        pLines = pL;
    }

    void setCircles(int c, Circle* pc)
    {
        cNum = c;
        pCircles = pc;
    }

    Circle getCirle(int i)
    {
        return pCircles[i];
    }

    void setRects(int r, Rect* pr)
    {
        rNum = r;
        pRects = pr;
    }

    void setLines(int l, Line* pl)
    {
        lNum = l;
        pLines = pl;
    }

    void paint()
    {
        for(int i = 0; i < pNum; i++)
        {
            pPictures[i]->draw();
        }
    }
};

int main()
{
    Circle c(150, 150, 75, 2);
    Line l(20, 20, 120, 120, 3);
    Rect r(20, 20, 120, 80, 1);
    ColorPicture *p[3];
    p[0] = &c;
    p[1] = &l;
    p[2]=&r;
    Picture pic(3, p);

    initgraph();
    pic.paint();

    while(1) {};
}
