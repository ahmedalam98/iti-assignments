// ------------------ Stack using an array with push, pop, and printStack operations ------------------ //

#include <iostream>

using namespace std;

class Stack {
    int top;
    int arr[5];

public:
    Stack() {
        top = 0;
    }

    void push(int);
    int pop();
    void printStack();
};

void Stack::push(int n) {
    if (top == 5) {
        cout << "Stack is Full" << endl;
    } else {
        arr[top] = n;
        top++;
    }
}

int Stack::pop() {
    if (top == 0) {
        cout << "Stack Empty !!" << endl;
    } else {
        top--;
        return arr[top];
    }
}

void Stack::printStack() {
    for (int i = 0; i < top; i++) {
        cout << arr[i] << endl;
    }
}

int main() {
    cout << "----- Stack -----" << endl;
    Stack S1;

    int value;
    char choice;

    do {
        cout << "Enter a value to push onto the stack: ";
        cin >> value;
        S1.push(value);

        cout << "Do you want to push another value or print the stack? (y/n/p): ";
        cin >> choice;

        if (choice == 'p' || choice == 'P') {
            cout << "Stack contents: " << endl;
            S1.printStack();
            cout << "Do you want to push another value or stop execution? (y/n): ";
            cin >> choice;
        }
    } while (choice == 'y' || choice == 'Y');

    return 0;
}
