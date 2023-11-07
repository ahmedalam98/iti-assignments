// ---------- Picture class allows the user to input the number of circles, rectangles, and lines. ---------- //
// ---------- and their respective details (coordinates, dimensions, and colors) ---------- //

#include <iostream>
#include <graphics.h>

using namespace std;

class Color
{
    int c;

public:
    Color()
    {
        c = 0;
    }
    Color(int x)
    {
        c = x;
    }
    void setColor(int x)
    {
        c = x;
    }
    int getColor()
    {
        return c;
    }
};

class Point
{
    int x;
    int y;

public:
    Point() {
        x = 0;
        y = 0;
    }
    Point(int a) {
        x = y = a;
    }
    Point(int a, int b) {
        x = a;
        y = b;
    }
    void setX(int a) {
        x = a;
    }
    void setY(int b) {
        y = b;
    }
    int getX() {
        return x;
    }
    int getY() {
        return y;
    }
};

class Rect: public Color
{
    Point ul;
    Point lr;

public:
    Rect() : ul(), lr() {}
    Rect(int x1, int y1, int x2, int y2, int c) : ul(x1, y1), lr(x2, y2), Color(c) {}
    void draw() {
        setcolor(getColor());
        rectangle(ul.getX(), ul.getY(), lr.getX(), lr.getY());
    }
    void setRect(int x, int y, int a, int b, int c) {
        ul.setX(x);
        ul.setY(y);
        lr.setX(a);
        lr.setY(b);
        setColor(c);
    }
    Point getUl() {
        return ul;
    }
    Point getLr() {
        return lr;
    }
};

class Line: public Color
{
    Point start;
    Point end;

public:
    Line() : start(), end() {}
    Line(int x1, int y1, int x2, int y2, int c) : start(x1, y1), end(x2, y2), Color(c) {}
    void setStart(Point a) {
        start = a;
    }
    void setLine(int a, int b, int x, int y, int c) {
        start.setX(a);
        start.setY(b);
        end.setX(x);
        end.setY(y);
        setColor(c);
    }
    void draw() {
        setcolor(getColor());
        line(start.getX(), start.getY(), end.getX(), end.getY());
    }
};

class Circle: public Color
{
    Point center;
    int rad;

public:
    Circle() : center() {
        rad = 0;
    }
    Circle(int x, int y, int r, int c) : center(x, y), Color(c) {
        rad = r;
    }
    void setCircle(int x, int y, int r, int c) {
        center.setX(x);
        center.setY(y);
        rad = r;
        setColor(c);
    }
    void draw() {
        setcolor(getColor());
        circle(center.getX(), center.getY(), rad);
//        setcolor(7);
    }
};

class Picture
{
    int cNum;
    int rNum;
    int lNum;
    Circle* pCircles;
    Rect* pRects;
    Line* pLines;

public:
    Picture() {
        cNum = rNum = lNum = 0;
        pCircles = 0;
        pRects = 0;
        pLines = 0;
    }
    Picture(int c, int r, int l, Circle* pc, Rect* pr, Line* pl) {
        cNum = c;
        rNum = r;
        lNum = l;
        pCircles = pc;
        pRects = pr;
        pLines = pl;
    }
    void setCircles(int c, Circle* pc) {
        cNum = c;
        pCircles = pc;
    }
    void setRects(int r, Rect* pr) {
        rNum = r;
        pRects = pr;
    }
    void setLines(int l, Line* pl) {
        lNum = l;
        pLines = pl;
    }
    void paint();
};

int main() {


    Picture pic;

    int circleNum;
    int rectNum;
    int lineNum;

    Circle* pCircles;
    Rect* pRects;
    Line* pLines;

    int x;
    int y;
    int x2;
    int y2;
    int rad;
    int color;

    cout << "Enter the number of circles: ";
    cin >> circleNum;
    cout << "Enter the number of rectangles: ";
    cin >> rectNum;
    cout << "Enter the number of lines: ";
    cin >> lineNum;

    pCircles = new Circle[circleNum];
    pRects = new Rect[rectNum];
    pLines = new Line[lineNum];

    for (int i = 0; i < circleNum; i++) {
        cout << "Enter circle " << i + 1 << " x point: ";
        cin >> x;
        cout << "Enter circle " << i + 1 << " y point ";
        cin >> y;
        cout << "Enter circle " << i + 1 << " radius: ";
        cin >> rad;
        cout << "Enter circle " << i + 1 << " color: ";
        cin >> color;

        pCircles[i].setCircle(x, y, rad, color);
    }

    for (int i = 0; i < rectNum; i++) {
        cout << "Enter rectangle " << i + 1 << " x point 1 : ";
        cin >> x;
        cout << "Enter rectangle " << i + 1 << " y point 1 : ";
        cin >> y;
        cout << "Enter rectangle " << i + 1 << " x point 2 : ";
        cin >> x2;
        cout << "Enter rectangle " << i + 1 << " y point 2 : ";
        cin >> y2;
        cout << "Enter rectangle " << i + 1 << " color: ";
        cin >> color;

        pRects[i].setRect(x, y, x2, y2, color);
    }

    for (int i = 0; i < lineNum; i++) {
        cout << "Enter line " << i + 1 << " x point 1 : ";
        cin >> x;
        cout << "Enter line " << i + 1 << " y point 1 : ";
        cin >> y;
        cout << "Enter line " << i + 1 << " x point 2 : ";
        cin >> x2;
        cout << "Enter line " << i + 1 << " y point 2 : ";
        cin >> y2;
        cout << "Enter line " << i + 1 << " color: ";
        cin >> color;

        pLines[i].setLine(x, y, x2, y2, color);
    }

    system("cls");
    initgraph();

    pic.setCircles(circleNum, pCircles);
    pic.setRects(rectNum, pRects);
    pic.setLines(lineNum, pLines);

    pic.paint();

    delete[] pCircles;
    delete[] pRects;
    delete[] pLines;
    return 0;
}

void Picture::paint() {
    int i;

    for (i = 0; i < cNum; i++) {
        pCircles[i].draw();
    }
    for (i = 0; i < rNum; i++) {
        pRects[i].draw();
    }
    for (i = 0; i < lNum; i++) {
        pLines[i].draw();
    }
}
