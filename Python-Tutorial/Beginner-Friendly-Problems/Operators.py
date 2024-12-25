# Python Program Demonstrating Various Operators

# -------------------------------------------------------------------------------------------------------------------------------
# Problem Description: Demonstrate all types of operators in Python with examples
# Input: User inputs numbers or expressions as required
# Output: Results of various operator computations

# Prompt user for inputs
num1 = int(input("Enter the first number: "))
num2 = int(input("Enter the second number: "))

# -------------------------------------------------------------------------------------------------------------------------------
# Arithmetic Operators
print("\n--- Arithmetic Operators ---")
print(f"Addition: {num1} + {num2} = {num1 + num2}")
print(f"Subtraction: {num1} - {num2} = {num1 - num2}")
print(f"Multiplication: {num1} * {num2} = {num1 * num2}")
print(f"Division: {num1} / {num2} = {num1 / num2}")
print(f"Floor Division: {num1} // {num2} = {num1 // num2}")
print(f"Modulus: {num1} % {num2} = {num1 % num2}")
print(f"Exponentiation: {num1} ** {num2} = {num1 ** num2}")

# -------------------------------------------------------------------------------------------------------------------------------
# Comparison Operators
print("\n--- Comparison Operators ---")
print(f"Is {num1} > {num2}? {num1 > num2}")
print(f"Is {num1} < {num2}? {num1 < num2}")
print(f"Is {num1} >= {num2}? {num1 >= num2}")
print(f"Is {num1} <= {num2}? {num1 <= num2}")
print(f"Is {num1} == {num2}? {num1 == num2}")
print(f"Is {num1} != {num2}? {num1 != num2}")

# -------------------------------------------------------------------------------------------------------------------------------
# Assignment Operators
print("\n--- Assignment Operators ---")
x = num1
print(f"Initial assignment: x = {x}")
x += 3
print(f"Addition assignment (x += 3): x = {x}")
x -= 3
print(f"Subtraction assignment (x -= 3): x = {x}")
x *= 3
print(f"Multiplication assignment (x *= 3): x = {x}")
x /= 3
print(f"Division assignment (x /= 3): x = {x}")
x //= 3
print(f"Floor division assignment (x //= 3): x = {x}")
x %= 3
print(f"Modulus assignment (x %= 3): x = {x}")
x **= 3
print(f"Exponentiation assignment (x **= 3): x = {x}")

# -------------------------------------------------------------------------------------------------------------------------------
# Bitwise Operators
a, b = 10, 4
print("\n--- Bitwise Operators ---")
print(f"Bitwise AND ({a} & {b}): {a & b}")
print(f"Bitwise OR ({a} | {b}): {a | b}")
print(f"Bitwise XOR ({a} ^ {b}): {a ^ b}")
print(f"Bitwise NOT (~{a}): {~a}")
print(f"Left Shift ({a} << 2): {a << 2}")
print(f"Right Shift ({a} >> 2): {a >> 2}")

# -------------------------------------------------------------------------------------------------------------------------------
# Logical Operators
print("\n--- Logical Operators ---")
print(f"True and True: {True and True}")
print(f"True and False: {True and False}")
print(f"False or True: {False or True}")
print(f"not True: {not True}")

# -------------------------------------------------------------------------------------------------------------------------------
# Membership Operators
my_list = [1, 2, 3, 4, 5]
print("\n--- Membership Operators ---")
print(f"Is 3 in {my_list}? {3 in my_list}")
print(f"Is 6 in {my_list}? {6 in my_list}")
print(f"Is 3 not in {my_list}? {3 not in my_list}")
print(f"Is 6 not in {my_list}? {6 not in my_list}")

# -------------------------------------------------------------------------------------------------------------------------------
# Identity Operators
x, y = 25, 25
a, b = 25, 30
print("\n--- Identity Operators ---")
print(f"Is x ({x}) the same object as y ({y})? {x is y}")
print(f"Is x ({x}) the same object as a ({a})? {x is a}")
print(f"Is a ({a}) the same object as b ({b})? {a is b}")
print(f"Is x ({x}) not the same object as b ({b})? {x is not b}")

# -------------------------------------------------------------------------------------------------------------------------------
# Ternary Operator
number = int(input("\nEnter a number to check even or odd: "))
result = "Even" if number % 2 == 0 else "Odd"
print(f"The number {number} is {result}.")
