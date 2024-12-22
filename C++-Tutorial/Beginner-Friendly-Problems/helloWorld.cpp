#include <iostream>
#include <string> // For std::string and getline

int main() {
    std::string name; // Allocate memory for the string
    std::cout << "Hello World!" << std::endl;

    std::cout << "Enter your full name: ";
    std::getline(std::cin, name); // Read the entire line, including spaces

    std::cout << "Your name is: " << name << std::endl;
    return 0;
}
