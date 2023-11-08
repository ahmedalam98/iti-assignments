// --------------------- Complex Class --------------------- //

#include <iostream>

using namespace std;

class Complex
{

private:
    float real;
    float img;

public:
    void setReal(float);
    float getReal();
    void setImg(float);
    float getImg();
    void print();
    // overloading plus operator
    Complex operator+(Complex c1) ;
    // overloading minus operator
    Complex operator-(Complex c1) ;
    // overloading += operator
    Complex operator+=(Complex c1) ;
    // overloading -= operator
    Complex operator-=(Complex c1) ;
    // overloading ++ operator
    Complex operator++() ;
    // overloading -- operator
    Complex operator--() ;
    // overloading < operator
    bool operator<(Complex c1) ;
    // overloading > operator
    bool operator>(Complex c1) ;
    // overloading <= operator
    bool operator<=(Complex c1) ;
    // overloading >= operator
    bool operator>=(Complex c1) ;
    // overloading == operator
    bool operator==(Complex c1) ;
    // overloading != operator
    bool operator!=(Complex c1) ;
    // overloading int + complex operator
    friend Complex operator+(int n, Complex c1);

    //override << operator
    friend ostream& operator<<(ostream& out, Complex c1);

    //override >> operator
    friend istream& operator>>(istream& in, Complex& c1);
};


Complex sum(Complex c1, Complex c2, Complex c3)
{
    Complex sum;
    sum.setReal(c1.getReal() + c2.getReal()+ c3.getReal());
    sum.setImg(c1.getImg() + c2.getImg()+ c3.getImg());
    return sum;

}

Complex sum(Complex c1, Complex c2)
{
    Complex sum;
    sum.setReal(c1.getReal() + c2.getReal());
    sum.setImg(c1.getImg() + c2.getImg());
    return sum;

}

Complex sum(Complex c1, float f)
{
    Complex sum;
    sum.setReal(c1.getReal() + f);
    sum.setImg(c1.getImg());
    return sum;

}

Complex sum( float f, Complex c1)
{
    Complex sum;
    sum.setReal(c1.getReal() + f);
    sum.setImg(c1.getImg() );
    return sum;

}

Complex sub(Complex c1, Complex c2)
{
    Complex sub;
    sub.setReal(c1.getReal() - c2.getReal());
    sub.setImg(c1.getImg() - c2.getImg());
    return sub;

}

Complex sub(Complex c1, Complex c2, Complex c3)
{
    Complex sub;
    sub.setReal(c1.getReal() - c2.getReal() - c3.getReal());
    sub.setImg(c1.getImg() - c2.getImg()- c3.getImg());
    return sub;

}

Complex sub(Complex c1, float f)
{
    Complex sub;
    sub.setReal(c1.getReal() - f);
    sub.setImg(c1.getImg() );
    return sub;

}


Complex sub(float f, Complex c1 )
{
    Complex sub;
    sub.setReal(c1.getReal() - f);
    sub.setImg(c1.getImg());
    return sub;

}


void Complex::setReal(float r)
{
    real = r;
}

void Complex::setImg(float i)
{
    img = i;
}

float Complex::getReal()
{
    return real;
}

float Complex::getImg()
{
    return img;
}

void Complex::print()
{
    if(this->getImg() == 0 && this->getReal() == 0)
    {
        cout<<" 0";
    }
    else if(this->getImg() == 0 && this->getReal() != 0)
    {
        cout<<" "<<this->getReal();
    }
    else if(this->getImg() != 0 && this->getReal() == 0)
    {
        if(this->getImg() == 1)
        {
            cout<<" j";
        }
        else if(this->getImg() == -1)
        {
            cout<<" -j";
        }
        else
        {
            cout<<" "<<this->getImg()<<"j";
        }
    }
    else
    {
        if(this->getImg() == 1)
        {
            cout<<" "<<this->getReal()<<" + j";
        }
        else if(this->getImg()== -1)
        {
            cout<<" "<<this->getReal()<<" - j";
        }
        else
        {
            if(this->getImg() > 0)
            {
                cout << " "<<this->getReal() << " + " << this->getImg()<<"j";
            }
            else
            {
                cout<<" " << this->getReal()<<" "<<this->getImg()<<"j";
            }
        }
    }
}

Complex Complex::operator+(Complex c1)
{
    Complex sum;
    sum.real = this->real + c1.real;
    sum.img = this->img + c1.img;
    return sum;
}

Complex Complex::operator-(Complex c1)
{
    Complex sub;
    sub.real = this->real - c1.real;
    sub.img = this->img - c1.img;
    return sub;
}

Complex Complex::operator+=(Complex c1)
{
    this->real += c1.real;
    this->img += c1.img;
    return *this;
}

Complex Complex::operator-=(Complex c1)
{
    this->real -= c1.real;
    this->img -= c1.img;
    return *this;
}

Complex Complex::operator++()
{
    this->real++;
    return *this;
}

Complex Complex::operator--()
{
    this->real--;
    return *this;
}

bool Complex::operator<(Complex c1)
{
    if(this->real < c1.real && this->img < c1.img)
    {
        return true;
    }
    else
    {
        return false;
    }
}

bool Complex::operator>(Complex c1)
{
    if(this->real > c1.real && this->img > c1.img)
    {
        return true;
    }
    else
    {
        return false;
    }
}

bool Complex::operator<=(Complex c1)
{
    if(this->real <= c1.real && this->img <= c1.img)
    {
        return true;
    }
    else
    {
        return false;
    }
}

bool Complex::operator>=(Complex c1)
{
    if(this->real >= c1.real && this->img >= c1.img)
    {
        return true;
    }
    else
    {
        return false;
    }
}

bool Complex::operator==(Complex c1)
{
    if(this->real == c1.real && this->img == c1.img)
    {
        return true;
    }
    else
    {
        return false;
    }
}

bool Complex::operator!=(Complex c1)
{
    if(this->real != c1.real || this->img != c1.img)
    {
        return true;
    }
    else
    {
        return false;
    }
}

Complex operator+(int n, Complex c1)
{
    Complex sum;
    sum.real = n + c1.real;
    sum.img = c1.img;
    return sum;
}


ostream& operator<<(ostream& out , Complex c1){

    out<<  "complex is " <<"("<<c1.real<<","<<c1.img<<")"<<"\n";
    return out;
}


istream& operator>>(istream& in , Complex& c1){

    cout<<"Enter real part: ";
    in>>c1.real;
    cout<<"Enter imaginary part: ";
    in>>c1.img;
    cout<<"\n";
    return in;
}

int main()
{
    Complex c1, c2;

    cin>>c1;

    cout<<c1;

    cin>>c2;

    cout<<c2;

}
