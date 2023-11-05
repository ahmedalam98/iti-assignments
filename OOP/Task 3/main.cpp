// ------------------ Addition, Subtraction, and Printing Complex Numbers ------------------ //

#include <iostream>

using namespace std;

class Complex {

    private:
    float real;
    float img;

    public:
    void setReal(float);
    void setImg(float);
    float getReal();
    float getImg();
    void print();

    // Overloaded Add and Sub functions
    Complex Add(Complex c2);
    Complex Add(float f);
    Complex Add(Complex c2, float f);
    Complex Sub(Complex c2);
    Complex Sub(float f);
    Complex Sub(Complex c2, float f);
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

Complex Add(Complex c1, Complex c2, Complex c3) {
    Complex result;
    result.setReal(c1.getReal() + c2.getReal() + c3.getReal());
    result.setImg(c1.getImg() + c2.getImg() + c3.getImg());
    return result;
}

Complex Sub(Complex c1, Complex c2, Complex c3) {
    Complex result;
    result.setReal(c1.getReal() - c2.getReal() - c3.getReal());
    result.setImg(c1.getImg() - c2.getImg() - c3.getImg());
    return result;
}


Complex Add(Complex c2, float f) {
    Complex result;
    result.setReal(c2.getReal() + f);
    result.setImg(c2.getImg());
    return result;
}

Complex Sub(Complex c2, float f) {
    Complex result;
    result.setReal(c2.getReal() - f);
    result.setImg(c2.getImg());
    return result;
}

Complex Add(float f, Complex c2) {
    Complex result;
    result.setReal(f + c2.getReal() );
    result.setImg(c2.getImg());
    return result;
}

Complex Sub(float f, Complex c2) {
    Complex result;
    result.setReal(f - c2.getReal());
    result.setImg(c2.getImg());
    return result;
}

int main () {
    int x, y;
    cout << "Enter first number: ";
    cin >> x;
    cout << "Enter second number: ";
    cin >> y;

    Complex c1, c2, c3;
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

    int m, n;
    cout << "Enter fifth number: ";
    cin >> m;
    cout << "Enter sixth number: ";
    cin >> n;

    c3.setReal(m);
    c3.setImg(n);

    cout << "Third complex number result is: ";
    c3.print();

    float f;
    cout<< "Enter float number: ";
    cin >> f;


    Complex addResult = Add(c1, c2);
    Complex subResult = Sub(c1, c2);
    Complex firstAdd = Add(c1, c2, c3);
    Complex firstSub = Sub(c1, c2, c3);
    Complex secondAdd = Add(c1, f);
    Complex secondSub = Sub(c1, f);
    Complex thirdAdd = Add(f, c1);
    Complex thirdSub = Sub(f, c1);

    cout << "Addition Result: ";
    addResult.print();

    cout << "Subtraction Result: ";
    subResult.print();

    cout << "First Addition: ";
    firstAdd.print();

    cout << "First Subtraction: ";
    firstSub.print();

    cout << "Second Addition: ";
    secondAdd.print();

    cout << "Second Subtraction: ";
    secondSub.print();

    cout << "Third Addition: ";
    thirdAdd.print();

    cout << "Third Subtraction: ";
    thirdSub.print();

    return 0;
}


void Complex::setReal(float r) {
   real = r;
}

void Complex::setImg(float i) {
   img = i;
}

float Complex::getReal() {
   return real;
}

float Complex::getImg() {
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

