// --------------------------  Structure for representing complex numbers -------------------------- //

#include <iostream>

using namespace std;

struct Complex {
    int real;
    int img;

    void setReal(int);
    void setImg(int);
    int getReal();
    int getImg();
    void print();
};

int main () {
   int x, y;
   cout << "Enter first number: ";
   cin >> x;
   cout << "Enter second number: ";
   cin >> y;

   Complex c1;
   c1.real = x;
   c1.img = y;
   c1.print();

   return 0;
}

void Complex::setReal(int r) {
   real = r;
}

void Complex::setImg(int i) {
   img = i;
}

int Complex::getReal() {
   return real;
}

int Complex::getImg() {
   return img;
}

void Complex::print() {
    if (real > 0 && img > 0) {
        cout << "The result is " << real << " + " << img << "i" << endl;
    } else if (real < 0 && img > 0) {
        cout << "The result is -" << -real << " + " << img << "i" << endl;
    } else if (real > 0 && img < 0) {
        cout << "The result is " << real << " - " << -img << "i" << endl;
    } else if (real == 0 && img > 0) {
        cout << "The result is " << img << "i" << endl;
    } else if (real > 0 && img == 0) {
        cout << "The result is " << real << endl;
    } else if (real < 0 && img == 0) {
        cout << "The result is " << real << endl;
    } else if (real == 0 && img < 0) {
        cout << "The result is " << img << "i" << endl;
    } else {
        cout << "The result is 0" << endl;
    }
}



