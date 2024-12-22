import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.println("Hello World!");

        System.out.print("Enter your full name: ");
        String name = scanner.nextLine(); // Read the entire line, including spaces

        System.out.println("Your name is: " + name);

        scanner.close();
    }
}
