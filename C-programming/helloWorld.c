#include <stdio.h>

int main() {
    char s[100]; // Allocate memory for the string with a sufficient size
    printf("Hello World!\n");

    printf("Enter your full name: ");
    fgets(s, sizeof(s), stdin); // Read the entire line, including spaces

    printf("Your name is: %s", s);
    return 0;
}