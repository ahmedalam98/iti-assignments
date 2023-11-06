// ---------------- Stack with dynamic memory allocation ---------------- //


#include <iostream>
using namespace std;

class Stack {
    int top, SIZE;
    int* st;

public:
    Stack() {
        top = 0;
        SIZE = 10;
        st = new int[SIZE];
    }

    Stack(int s) {
        top = 0;
        SIZE = s;
        st = new int[SIZE];
    }

    Stack(const Stack&);

    Stack& operator=(const Stack&);

    void push(int);
    int pop();

    ~Stack() {
        delete[] st;
    }
};

int main() {
    int stackSize;
    cout << "Enter the size of the stack: ";
    cin >> stackSize;

    Stack s1(stackSize);
    Stack s2(stackSize);

    int n;
    cout << "Enter values to push onto s2, or -1 to stop: "<< endl;
    while (cin >> n && n != -1) {
        s2.push(n);
    }

    s1 = s2;

    cout << "Popping values from s1:" << endl;
    while (true) {
        int value = s1.pop();
        if (value == 0) {
            break;
        }
        cout << value << endl;
    }

    return 0;
}

Stack::Stack(const Stack& x) {
    top = x.top;
    SIZE = x.SIZE;
    st = new int[SIZE];
    for (int i = 0; i < top; i++) {
        st[i] = x.st[i];
    }
}

Stack& Stack::operator=(const Stack& x) {
    if (this == &x) {
        return *this;
    }

    delete[] st;
    top = x.top;
    SIZE = x.SIZE;
    st = new int[SIZE];
    for (int i = 0; i < top; i++) {
        st[i] = x.st[i];
    }

    return *this;
}

void Stack::push(int n) {
    if (top == SIZE) {
        cout << "Stack is full" << endl;
    } else {
        st[top] = n;
        top++;
    }
}

int Stack::pop() {
    int retval;
    if (top == 0) {
        cout << "Stack is empty" << endl;
        retval = 0;
    } else {
        top--;
        retval = st[top];
    }
    return retval;
}
