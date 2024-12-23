a = int(input("enter the first number : "))
b = int(input("enter the second number : "))
print("number before swaping : ",a," ",b)

# Approach-1
a = a+b
b = a-b
a = a-b
print("number after swaping : ",a," ",b)

# Approach-2
a, b = b, a
print("number after swapping : ",a," ",b)

# Approach-3
c = a
a = b
b = a 
print("number after swapping : ",a," ",b)

