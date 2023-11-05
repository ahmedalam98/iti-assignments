// ------------------------------ Class for representing complex numbers with member functions ------------------------------ //

#include <iostream>

using namespace std;

class Complex {

    private:
    int real;
    int img;

    public:
    void setReal(int);
    void setImg(int);
    int getReal();
    int getImg();
    void print();
};

Complex Add(Complex c1,Complex c2) {
    Complex result;
    result.setReal(c1.getReal() + c2.getReal());
    result.setImg(c1.getImg() + c2.getImg());
    return result;
}

Complex Sub(Complex c1, Complex c2) {
    Complex result;
    result.setReal(c1.getReal() - c2.getReal());
    result.setImg(c1.getImg() - c2.getImg());
    return result;
}

int main () {
    int x, y;
    cout << "Enter first number: ";
    cin >> x;
    cout << "Enter second number: ";
    cin >> y;

    Complex c1, c2;
    c1.setReal(x);
    c1.setImg(y);

    cout << "First complex number result is: ";
    c1.print();

    int a, b;
    cout << "Enter third number: ";
    cin >> a;
    cout << "Enter fourth number: ";
    cin >> b;

    c2.setReal(a);
    c2.setImg(b);

    cout << "Second complex number result is: ";
    c2.print();

    Complex addResult = Add(c1, c2);
    Complex subResult = Sub(c1, c2);

    cout << "Addition Result: ";
    addResult.print();

    cout << "Subtraction Result: ";
    subResult.print();

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
        if (img != 1) {
        cout << "The result is " << real << " + " << img << "i" << endl;
        } else {
        cout << "The result is " << real << " + " << "i" << endl;
        }
    } else if (real < 0 && img < 0) {
        if (img != 1) {
        cout << "The result is " << " - " << -real << " - " << -img << "i" << endl;
        } else {
        cout << "The result is " << real << " + " << "i" << endl;
        }
    } else if (real < 0 && img > 0) {
        if( img != 1) {
        cout << "The result is -" << -real << " + " << img << "i" << endl;
        } else {
        cout << "The result is -" << -real << " + " << "i" << endl;
        }
    } else if (real > 0 && img < 0) {
        if (img != -1) {
            cout << "The result is " << real << " - " << -img << "i" << endl;
        } else {
            cout << "The result is " << real << " - i" << endl;
        }
    } else if (real == 0 && img > 0) {
        if (img != 1) {
        cout << "The result is " << img << "i" << endl;
        } else {
        cout << "The result is " << "i" << endl;
        }
    } else if (real == 0 && img < 0) {
        if ( img != -1) {
        cout << "The result is " << img << "i" << endl;
        } else {
        cout << "The result is " << "-i" << endl;
        }
    } else if (real > 0 && img == 0) {
        if (img != 1) {}
        cout << "The result is " << real << endl;
    } else if (real < 0 && img == 0) {
        cout << "The result is " << real << endl;
    } else if (real == 0 && img == 0) {
        cout << 0 << endl;
    } else {
        cout << "No handle case for this condition" << endl;
    }
}

