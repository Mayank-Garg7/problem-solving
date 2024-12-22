#include <stdio.h>

int main() {
    char s[100]; // Allocate memory for the string with a sufficient size
    printf("Hello World!\n");

    printf("Enter your name: ");
    scanf("%99s", s); // Use %s to read a string and limit the input to prevent buffer overflow

    printf("Your name is: %s\n", s); // Use %s to display the string
    return 0;
}
