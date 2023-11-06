// ---- Overloading operators for addition, subtraction, compound assignment, increment, decrement, and relational operations ---- //

#include <iostream>

using namespace std;
class Complex
{
    float real;
    float img;

public:
    void setReal(float);
    float getReal();
    void setImg(float);
    float getImg();
    void print();
    Complex operator +(Complex);
    Complex operator -(Complex);
    Complex operator +=(Complex);
    Complex operator -=(Complex);
    Complex operator ++();
    Complex operator --();
    Complex operator ++(int);
    Complex operator --(int);
    int operator ==(Complex);
    int operator !=(Complex);
    int operator >(Complex);
    int operator <(Complex);
    int operator >=(Complex);
    int operator <=(Complex);
    friend Complex operator + (float, Complex);
    Complex()
    {
        real=0.0;
        img=0.0;
    }
    ~Complex()
    {
    }

};

int main()
{
    char ch;
    Complex c1, c2,c3, result;
    float real1,real2,img1,img2,real3,img3;
    do
    {
        cout<<"-------------------"<<endl;
        cout<<"a. ( + ) numbers"<<endl;
        cout<<"b. ( - ) numbers"<<endl;
        cout<<"c. ( += ) numbers"<<endl;
        cout<<"d. ( -= ) numbers"<<endl;
        cout<<"e. ( ++ ) numbers"<<endl;
        cout<<"f. ( -- ) numbers"<<endl;
        cout<<"g. ( == ) numbers"<<endl;
        cout<<"h. ( > ) check numbers"<<endl;
        cout<<"i. ( < ) check numbers"<<endl;
        cout<<"j. ( >= ) check numbers"<<endl;
        cout<<"k. ( <= ) check numbers"<<endl;
        cout<<"l. ( != ) check numbers"<<endl;
        cout<<"m. Integer plus complex number"<<endl<<endl;
        cin>>ch;
        cout<<"-------------------"<<endl;

        switch(ch)
        {
        case 'a':
            cout<<"Enter real number for first complex : ";
            cin>>real1;
            cout<<"Enter imaginary number for first complex : ";
            cin>>img1;
            c1.setReal(real1);
            c1.setImg(img1);
            cout<<"Enter real number for second complex : ";
            cin>>real2;
            cout<<"Enter imaginary number for second complex : ";
            cin>>img2;
            c2.setReal(real2);
            c2.setImg(img2);
            result=c1+c2;
            result.print();
            break;

        case 'b':
            cout<<"Enter real number for first complex : ";
            cin>>real1;
            cout<<"Enter imaginary number for first complex : ";
            cin>>img1;
            c1.setReal(real1);
            c1.setImg(img1);
            cout<<"Enter real number for second complex : ";
            cin>>real2;
            cout<<"Enter imaginary number for second complex : ";
            cin>>img2;
            c2.setReal(real2);
            c2.setImg(img2);
            cout<<"Enter real number for third complex : ";
            cin>>real2;
            cout<<"Enter imaginary number for third complex : ";
            cin>>img3;
            c3.setReal(real3);
            c3.setImg(img3);
            result=c1-c2-c3;
            result.print();
            break;

        case 'c':
            cout<<"Enter real number for first complex : ";
            cin>>real1;
            cout<<"Enter imaginary number for first complex : ";
            cin>>img1;
            c1.setReal(real1);
            c1.setImg(img1);
            cout<<"Enter real number for second complex : ";
            cin>>real2;
            cout<<"Enter imaginary number for second complex : ";
            cin>>img2;
            c2.setReal(real2);
            c2.setImg(img2);
            c1+=c2;
            c1.print();
            break;

        case 'd':
            cout<<"Enter real number for first complex : ";
            cin>>real1;
            cout<<"Enter imaginary number for first complex : ";
            cin>>img1;
            c1.setReal(real1);
            c1.setImg(img1);
            cout<<"Enter real number for second complex : ";
            cin>>real2;
            cout<<"Enter imaginary number for second complex : ";
            cin>>img2;
            c2.setReal(real2);
            c2.setImg(img2);
            c1-=c2;
            c1.print();
            break;

        case 'e':
            cout<<"Enter real number for first complex : ";
            cin>>real1;
            cout<<"Enter imaginary number for first complex : ";
            cin>>img1;
            c1.setReal(real1);
            c1.setImg(img1);

            result=c1++;
            result.print();
            break;

        case 'f':
            cout<<"Enter real number for first complex : ";
            cin>>real1;
            cout<<"Enter imaginary number for first complex : ";
            cin>>img1;
            c1.setReal(real1);
            c1.setImg(img1);

            result=c1--;
            result.print();
            break;

        case 'g':
            cout<<"Enter real number for first complex : ";
            cin>>real1;
            cout<<"Enter imaginary number for first complex : ";
            cin>>img1;
            c1.setReal(real1);
            c1.setImg(img1);
            cout<<"Enter real number for second complex : ";
            cin>>real2;
            cout<<"Enter imaginary number for second complex : ";
            cin>>img2;
            c2.setReal(real2);
            c2.setImg(img2);
            if(c1==c2)
            {
                cout<<"They're equal"<<endl;
            }
            else
                cout<<"They're not equal"<<endl;

            break;

        case 'h':
            cout<<"Enter real number for first complex : ";
            cin>>real1;
            cout<<"Enter imaginary number for first complex : ";
            cin>>img1;
            c1.setReal(real1);
            c1.setImg(img1);
            cout<<"Enter real number for second complex : ";
            cin>>real2;
            cout<<"Enter imaginary number for second complex : ";
            cin>>img2;
            c2.setReal(real2);
            c2.setImg(img2);
            if(c1>c2)
            {
                cout<<"First is greater than the second"<<endl;
            }
            else
                cout<<"First is not greater than the second"<<endl;

            break;

        case 'i':
            cout<<"Enter real number for first complex : ";
            cin>>real1;
            cout<<"Enter imaginary number for first complex : ";
            cin>>img1;
            c1.setReal(real1);
            c1.setImg(img1);
            cout<<"Enter real number for second complex : ";
            cin>>real2;
            cout<<"Enter imaginary number for second complex : ";
            cin>>img2;
            c2.setReal(real2);
            c2.setImg(img2);
            if(c1<c2)
            {
                cout<<"First is smaller than the second"<<endl;
            }
            else
                cout<<"First is not smaller than the second"<<endl;

            break;

        case 'j':
            cout<<"Enter real number for first complex : ";
            cin>>real1;
            cout<<"Enter imaginary number for first complex : ";
            cin>>img1;
            c1.setReal(real1);
            c1.setImg(img1);
            cout<<"Enter real number for second complex : ";
            cin>>real2;
            cout<<"Enter imaginary number for second complex : ";
            cin>>img2;
            c2.setReal(real2);
            c2.setImg(img2);
            if(c1>=c2)
            {
                cout<<"First is greater than or equal the second"<<endl;
            }
            else
                cout<<"Second is greater than the first"<<endl;

            break;

        case 'k':
            cout<<"Enter real number for first complex : ";
            cin>>real1;
            cout<<"Enter imaginary number for first complex : ";
            cin>>img1;
            c1.setReal(real1);
            c1.setImg(img1);
            cout<<"Enter real number for second complex : ";
            cin>>real2;
            cout<<"Enter imaginary number for second complex : ";
            cin>>img2;
            c2.setReal(real2);
            c2.setImg(img2);
            if(c1<=c2)
            {
                cout<<"First is smaller than or equal the the second"<<endl;
            }
            else
                cout<<"Second is smaller than the first"<<endl;

            break;

        case 'l':
            cout<<"Enter real number for first complex : ";
            cin>>real1;
            cout<<"Enter imaginary number for first complex : ";
            cin>>img1;
            c1.setReal(real1);
            c1.setImg(img1);
            cout<<"Enter real number for second complex : ";
            cin>>real2;
            cout<<"Enter imaginary number for second complex : ";
            cin>>img2;
            c2.setReal(real2);
            c2.setImg(img2);
            if(c1!=c2)
            {
                cout<<"They're not equal"<<endl;
            }
            else
                cout<<"They're equal"<<endl;

            break;

        case 'm':
            cout<<"Enter the integer number:";
            cin>>real1;
            cout<<"Enter real number for second complex : ";
            cin>>real2;
            cout<<"Enter imaginary number for second complex : ";
            cin>>img2;
            c2.setReal(real2);
            c2.setImg(img2);
            result=real1+c2;
            result.print();
            break;
        default:
            break;
        }
    }

    while(ch!='y');
    return 0;
}

void Complex::setReal(float r)
{
    real=r;
}
void Complex::setImg(float i)
{
    img=i;
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
    if(real==0&&img==0)
    {
        cout<<0;
    }
    else if(real!=0&&img==0)
    {
        cout<<real;
    }
    else if(img!=0&&real==0)
    {
        if(img==1)
        {
            cout<<"i";
        }
        else if (img==-1)
        {
            cout<<"-i";
        }
        else if(img>0)
        {
            cout<<img;
        }
        else if(img<0)
        {
            cout<<"-"<<img;
        }
    }
    else if (real!=0&&img!=0)
    {
        if(img==1)
        {
            cout<<real<<"+i";
        }
        else if (img==-1)
        {
            cout<<real<<"-i";
        }
        else if(img>0)
        {
            cout<<real<<'+'<<img<<"i";
        }
        else if(img<0)
        {
            cout<<real<<img<<"i";
        }
    }
    cout<<endl;
}

//////////////////////////////////////////////////////////////////////

Complex Complex::operator+(Complex c)
{
    Complex res;
    res.real=this->real+c.real;
    res.img=this->img+c.img;
    return res;
}

Complex Complex::operator-(Complex c)
{
    Complex res;
    res.real=this->real-c.real;
    res.img=this->img-c.img;
    return res;
}

Complex Complex::operator+=(Complex c)
{
    real=real+c.real;
    img=img+c.img;
    return *this;
}

Complex Complex::operator-=(Complex c)
{
    real=real-c.real;
    img=img-c.img;
    return *this;
}

Complex Complex::operator++()
{
    this->real++;
    return *this;
}

Complex Complex::operator++(int)
{
    Complex temp=*this;
    real++;
    return *this;
}

Complex Complex::operator--()
{
    this->real--;
    return *this;
}

Complex Complex::operator--(int)
{
    Complex temp=*this;
    real--;
    return *this;
}

int Complex::operator==(Complex c)
{
    return((real==c.real)&&(img==c.img));
}

int Complex::operator>(Complex c)
{
    return((real>c.real));
}

int Complex::operator<(Complex c)
{
    return((real<c.real));
}

int Complex::operator>=(Complex c)
{
    return((real>c.real||real==c.real));
}

int Complex::operator<=(Complex c)
{
    return((real<c.real||real==c.real));
}

int Complex::operator!=(Complex c)
{
    return((real!=c.real)&&(img!=c.img));
}

Complex operator +(float r, Complex c)
{
    Complex res;
    res.real=r+c.real;
    res.img=c.img;
    return res;
}
