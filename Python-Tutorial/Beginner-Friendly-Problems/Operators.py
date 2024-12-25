# this program is for operators in PYTHON 

# Prompt user for input
num1 = int(input("Enter the first number: "))
num2 = int(input("Enter the second number: "))


# ---------------------------------------------------------------------------------------------------------------------------------
# Arithmetic Operators
# 1. Addition
sum = num1 + num2
print("Addition of two given numbers is:", sum)

# 2. Subtraction
difference = num1 - num2
print("Subtraction of two given numbers is:", difference)

# 3. Multiplication
product = num1 * num2
print("Multiplication of two given numbers is:", product)

# 4. Division
quotient = num1 / num2
print("Division of two given numbers is:", quotient)

# 5. Floor Division
floor_division = num1 // num2
print("Floor Division of two given numbers is:", floor_division)

# 6. Modulus
remainder = num1 % num2
print("Remainder of two given numbers is:", remainder)

# 7. Exponentiation
power = num1 ** num2
print("Exponentiation of two given numbers is:", power)


# ---------------------------------------------------------------------------------------------------------------------------------
# Comparison Operators
# 1. Greater Than
greater_than = num1 > num2
print("Is num1 greater than num2?", greater_than)

# 2. Less Than
less_than = num1 < num2
print("Is num1 less than num2?", less_than)

# 3. Greater Than or Equal To
greater_than_or_equal_to = num1 >= num2
print("Is num1 greater than or equal to num2?", greater_than_or_equal_to)

# 4. Less Than or Equal To
less_than_or_equal_to = num1 <= num2
print("Is num1 less than or equal to num2?", less_than_or_equal_to)

# 5. Equal To
equal_to = num1 == num2
print("Is num1 equal to num2?", equal_to)

# 6. Not Equal To
not_equal_to = num1 != num2
print("Is num1 not equal to num2?", not_equal_to)


# ---------------------------------------------------------------------------------------------------------------------------------
# Assignment Operators
# 1. Simple Assignment
x = num1 
print("Value of x after simple assignment:", x)

# 2. Addition Assignment
x = 5
x += 3 
print("Value of x after addition assignment:", x)

# 3. Subtraction Assignment
x = 10
x -= 3 
print("Value of x after subtraction assignment:", x)

# 4. Multiplication Assignment
x = 5
x *= 3 
print("Value of x after multiplication assignment:", x)

# 5. Division Assignment
x = 10
x /= 3 
print("Value of x after division assignment:", x)

# 6. Floor Division Assignment
x = 10
x //= 3 
print("Value of x after floor division assignment:", x)

# 7. Modulus Assignment
x = 10
x %= 3 
print("Value of x after modulus assignment:", x)

# 8. Exponentiation Assignment
x = 2
x **= 3 
print("Value of x after exponentiation assignment:", x)


# ---------------------------------------------------------------------------------------------------------------------------------
# Bitwise Operators
# 1. Bitwise AND
a = 10  
b = 4   
bitwise_and = a & b 
print("Bitwise AND of a and b:", bitwise_and) 

# 2. Bitwise OR
bitwise_or = a | b 
print("Bitwise OR of a and b:", bitwise_or)

# 3. Bitwise XOR
bitwise_xor = a ^ b 
print("Bitwise XOR of a and b:", bitwise_xor)

# 4. Bitwise NOT
bitwise_not_a = ~a 
print("Bitwise NOT of a:", bitwise_not_a)

# 5. Left Shift
left_shift = a << 2 
print("Left Shift of a by 2 positions:", left_shift)

# 6. Right Shift
right_shift = a >> 2 
print("Right Shift of a by 2 positions:", right_shift)


# ---------------------------------------------------------------------------------------------------------------------------------
# Logical Operators
# 1. Logical AND
print("True and True:", True and True)
print("True and False:", True and False)
print("False and True:", False and True)
print("False and False:", False and False)

# 2. Logical OR
print("True or True:", True or True)
print("True or False:", True or False)
print("False or True:", False or True)
print("False or False:", False or False)

# 3. Logical NOT
print("not True:", not True)
print("not False:", not False)


# ---------------------------------------------------------------------------------------------------------------------------------
# Membership Operators
my_list = [1, 2, 3, 4, 5]

# in operator
print(3 in my_list)  
print(6 in my_list)  

# not in operator
print(3 not in my_list)  
print(6 not in my_list)  


# ---------------------------------------------------------------------------------------------------------------------------------
# Identity Operators
x = y = 25
a = 25
b = 30
print(x is y)  
print(x is a)  
print(a is b)  
print(x is not b)  