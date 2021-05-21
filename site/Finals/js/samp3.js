//Javascript Operators

let num1=100;
let num2=25;
let a="Hello";
let b="Goodbye";


//mathematical expressions 
console.log(num1+num2); //add values
console.log(num1-num2); //subtract values
console.log(num1*num2); //multiplication
console.log(num1/num2); //divide
console.log(num1%num2); //modulo division
console.log(num2);// num2 = 25
// console.log(num2++); //print 25 then add 1, at the end of this line num2=26
console.log(++num2); //num2=num2+1 -> num2=26+1; num2=27
console.log(--num2) //num2=num2-1 =>num2=26-1; num2=25

//string expression
let c = a+b;
console.log(a + " " + b);
console.log(c);

//assignment operators
//syntax for assignment operator left-operand operator(=) right-operand
let x = 5, y = 15, z = 20; //example of the assignment operator

//ad and assign
console.log(`sum = ${x+=y}`); //x=x+y sums up LO and RO then assign result to LO
//subtract and assign
console.log(`difference = ${y-=20}`); //y-y=z

//comparison operators
console.log(`x= ${x} and y=${y}, therefore x<y is ${x<y}`); //LO less than RO
console.log(x=='20'); //compares equality
console.log(typeof('20'));
console.log(x=='Five');//compares equality of thow operands without considering type.
console.log(x==='5'); //compares equality of thow operands with type.
console.log(x<=y);
console.log(x>y);
console.log(x!=y);//compares inequalit of two operands.

//logical operators
//logical AND (&&)
let sampA=10, sampB=12, sampC=15;
let A='a', B='b', C='c';
            // false     AND      false       evaluates to false        
console.log((sampA==sampB) && (sampA==sampC)); //10==12 && 10==15; f && f => False
            // True       AND     True       evaluates to true   
console.log((sampA<=sampB) && (sampA<=sampC));
            // True       AND     false       evaluates to false
 console.log((sampA<=sampB) && (sampA>=sampC));
 //logical or (||) ==================
            // false       OR      false       evaluates to false       
console.log((sampA==sampB) || (sampA==sampC)); //10==12 && 10==15; f && f => False
            // True        OR     True       evaluates to true   
console.log((sampA<=sampB) || (sampA<=sampC));
            // True        OR     false       evaluates to true
console.log((sampA<=sampB) || (sampA>=sampC));
 //logical not (!) ==================
             // not false     evaluates to TRUE     
console.log((sampA!=sampB)); 
            // notfalse    AND     True       evaluates to true   
console.log((sampA!=sampC) && (sampA!=sampB));
            // True        OR    NOT false       evaluates to true
console.log((sampA<=sampB) || (sampA!=sampB));
let ABE='not an empty string'; //where ABE is undefined
console.log(`ABE is ${!ABE}`);
/*RULES for logical NOT
IF a is undefined, the result is true
If a is null, the result is true
if a is a number other than 0, the result is false
if a is NaN (No a Number), ther result is tru
if a is an null, the result is true 
if a is an object, the result is false
if a is an empty string, the result is true, otherwise if it is not an empty string then the result is false
*/
