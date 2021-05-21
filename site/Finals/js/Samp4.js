/* conditional statement
if-done
if-else -done
if-else-if - done
switch-case -done
*/

let age=18;
//if condition
if (age<18){
    alert("You are not allowed to register.");
}


/*if-else condition
if(condition){
    //statements for true
} else{
    //statements false
}
*/
let x=5;
if (x>10){ //evaluates to false
    document.write(`${x} is greater than 10`);
} else {
    document.write(`${x} is less than or equal to 10`);
}

/*if-else-if
if(condition){
    //statements for true
} else if{
    //statements if previous condition is false
}else{
    //statements if condition 1 and 2 are false
}
*/

let newAge=20;
    otherAge = 20;

if (newAge < otherAge){
    alert('Registration for the contest age is 18.');
}else if (newAge > otherAge ){
    alert('Welcome, Fill up form and submit requirement to register.');
}else {
    alert('Sorry, you have not completed all the requirement and therefore disqualified.');
}

//switch-case control-flow
let day=1;
switch(day){
    case 1:
        alert('Monday');
        break;
    case 2:
        alert('Tuesday');
        break;
    case 3:
        alert('Wednesday');
        break;
    case 4:
        alert('Thursday');
        break;
    case 7: 
        alert('Sunday');
        break;
    default:
        alert('That is not a valid day');

}

/*loops
while loop
do-while
for
*/

/*=========== while loop ====================
syntax
while(expression){
    //statements
}

*/
let i=0;
while(i<=10){ //terminates when i = 12
    document.write(`<br> i is now ${i}`);
    i+=2; //i=i+2
}

//create an array with 5 random numbers between 0 and 10
let randNum =[]; //declare and initialize the array
let count=0;
const size=5;

 while(count<size){ //if the expression evaluates to false, the loop terminates
     randNum.push(Math.round(Math.random()* 10)); //add and a random number between 0 and 10 in each iteration
     count++;
     document.write(`<br>Array size is now ${count}`);
 }
 document.write(`<br>${randNum}`);






