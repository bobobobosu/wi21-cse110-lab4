1. What will happen at line 11 and why?
- It prints prices.length-1, because it is the value the last time i being assigned
2. What will happen at line 12 and why?
- It prints prices[prices.length-1] * (1 - discount), because it is the value the last time discountedPrice being assigned
3. What will happen at line 13 and why?
- It prints Math.round(discountedPrice * 100) / 100 where discountedPrice is prices[prices.length-1] * (1 - discount). This is because  it is the value the last time finalPrice being assigned
4. What will the function return if we call discountPrices([100, 200, 300], .5) ? Give a brief explanation.
It will print [ 50, 100, 150 ]
Because: 
50 = Math.Round((100*(1-0.5))*100)/100
100 = Math.Round((200*(1-0.5))*100)/100
150 = Math.Round((300*(1-0.5))*100)/100
And all three numbers are appended to discounted in each loop

5. What will happen at line 11 and why?
The program will throw a ReferenceError: i is not defined because here i is declared using let, and i would be out of scope when we call console.log(i). Its scope is restricted in the for loop.
6. What will happen at line 12 and why?
The program will throw a ReferenceError: discountedPrice is not defined because here we use let, and discountedPrice would be out of scope when we call console.log(discountedPrice). Its scope is limited in for loop.
7. What will happen at line 13 and why?
The program prints Math.round(discountedPrice * 100) / 100 where discountedPrice is prices[prices.length-1] * (1 - discount). This is because  it is the value the last time finalPrice being assigned, adn finalPrice is in the same scope.
8. What will the function return for discountPrices([100, 200, 300], .5)? Give a brief explanation.
It will print [ 50, 100, 150 ]
Because: 
50 = Math.Round((100*(1-0.5))*100)/100
100 = Math.Round((200*(1-0.5))*100)/100
150 = Math.Round((300*(1-0.5))*100)/100
And all three numbers are appended to discounted in each loop
9. What will happen at line 11 and why?
The program will first throw TypeError: Assignment to constant variable. at line 7.
Assuming the assignement is successful at line 7, line 11 will throw a ReferenceError: i is not defined because here i is declared using let, and i would be out of scope when we call console.log(i). Its scope is restricted in the for loop.
10. What will happen at line 12 and why?
Assuming the assignement is successful at line 6, line 12 will throw a ReferenceError: discountedPrice is not defined because here discountedPrice is declared using const, and it would be out of scope when we call console.log(discountedPrice). Its scope is restricted in the for loop.
11. What will happen at line 13 and why?
Assuming the assignement is successful for all the lines above line 13, line 13 will print 0 because finalPrice is declared as a const and its value won't change
12. What will the function return for discountPrices([100, 200, 300], .5)? Give a brief explanation.
Assuming the assignement is successful for all the lines before the function returns, the funtion would return [] because discounted is declared as constant at the begining and its value won't change.
13. Given the above Object, write the notation for:  (These should be in your part1.md)
A. student.name
B. student["Grad Year"]
C. student.greeting()
D. student["Favorite Teacher"].name
E. student.courseLoad[0]
 
14. Arithmetic
A. 32          -> 2 is converted to a string then appended to '3'
B. 1           -> '3' is read to integer 3 then subtracted by 2
C. 3           -> null is converted to 0 and added to 3
D. 3null       -> null is converted to "null" and appended to "3"
E. 4           -> true is converted to 1 and added 3
F. 0           -> false is converted to 0 and null is converted to 0
G. 3undefined  -> undefined is converted to "undefined" and appended to "3"
H. NaN         -> "3" is converted to 3 and undefined is converted to NaN, resulting a NaN

15. Comparison

A. true        -> '2' is converted to 2 and is >1
B. false       -> the first char of '2' is '2' and is '1' for '12'. So '2'>'12' by dictionary comparison
C. true        -> '2' is converted to 2 so 2 is equal to 2
D. false       -> 2 is an int and '2' is a string so they are not strictly equal
E. false       -> true is converted to 1 and 1 is not equal to 2
F. true        -> Both true and Boolean(2) are booleans. Since Boolean(2) is true, the result is true


16. Explain the difference between the == and === operators.
"===" is the Strict equality operator. Instead of doing type conversion like "==", "===" return false immediatly if the two operands are different types. 

17. From the code snippet below, explain what gets printed and why.  (This should be in your part1.md)
"How are you?" is printed to the console. This is because in the first condition, true is 0 thus 2 != true. For the second condition, 2 is true so "How are you?" got printed

18. Given the below Object, write a for...in loop that will iterate through it and print out the value of the property if the property starts with the letter r, or if the value of that property is an odd number.  (This should be in a JS file part1-question18.js)
19. If the function below is called with the following parameters modifyArray([1,2,3], doSomething), what will be the result? Briefly walk through how you arrived at that result. (This should be in your part1.md)
The result would be [ 6, 8, 10 ]. This is because modifyArray accepts doSomething as a callback function. For each element in newArr, the original value in the array is passed into doSomething, which accepts a number and a function that doubles a value. So doSomething would double the value of num+2. In our case, the result would be [2*(1+2), 2*(2+2), 2*(3+2)]
20. This program only prints out the time once when executed. Modify this code such that the program prints out the time every second.  (This should be a JS file - part1-question20.js)
21. What is the output of this code? (This should be in your part1.md)
1
4
3
2