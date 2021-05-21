let studentName = 'j'
let name; //declaring
name='Ana'; // initializing

const idnumber='1221434'
//idnumber='1221434' will cause an error because const be re-assigned...
console.log(idnumber);
let num=null; //null is an object ...typeof
let numA=0; //zero is not null
let numB=undefined; //undefined
let numX; //impliad undefined

document.write("<br>");
document.write(`I am ${studentName}`);
// document.write("")

//array variables
//1 dimensional arrays
let studentNames=['James', 'Ana', 'Sonya','Dean']; //homogenous
let sampArray=[1, 'a', true, 'Dora', 12.5]; //heterogenous array

//diplay array on the console
console.log(studentNames[2]);//display element @index2 of the array
console.table(studentNames);//display all the elements of the array in tabular format
console.table(sampArray);//display all the elements of the array in tabular format

//2-dimensional arrays
let toDoList=[['8am', 'Market'],['10am','Gym'],['12nn', 'Lunch Date'], ['1pm', 'Shopping'], ['3pm', 'Nap']];
console.table(toDoList);

//array methods
toDoList.push(['4pm', 'Computer Games'], ['5pm', 'cook dinner'], ['6pm', 'dinner']);//append another elements at the end of the array
console.table(toDoList);
toDoList.splice(2,0,['11am', 'Shower']); //inserts an element at a given position in the array
console.table(toDoList);
toDoList.pop(); //removes last item from the array list
console.table(toDoList);
document.write("<br>");
document.write(`${studentNames[2]} went to the ${toDoList[0][1]} at ${toDoList[0][0]}`);
document.getElementById('arraySamp').innerHTML=studentNames[2]+" went to the "+toDoList[0][1]+" at "+toDoList[0][0];


//object complex types
let student1={ //student1 is the object
    idnum: "201161232", //key -> idnum, value -> "201161232"
    fname: "Jennifer",
    lname: "Salcedo",
    age: 18
}
//===============display the object on the console===============
console.log(student1);
//dot notation to display object properties
console.log("Student ID: "+student1.idnum+" \nStudent Name: "+student1.fname+" "+student1.lname); 
//array-like notation to display object properties on the console
console.log("Student ID: "+student1['idnum']+ "\nStudent Name:"+student1['fname']+" "+student1['lname']);

//===============display the object on the webpage===============
//dot notation to display object properties
document.getElementById('student').innerHTML="ID Number: "+student1.idnum+"<br> Student Name: "+student1.fname+" "+student1.lname+"<br> Student Age: "+student1.age;

//example 2 off an object
let contactDet1={
    firstN: 'Jessica', 
    lastN: 'Gonzales',
    email: 'jessica.gonzales@example.com',
    mobNum: '(+64)912-322-2132',
    address:{
        bldgNum: '32',
        Street: 'General Luna',
        City: 'Baguio',
        Province: 'Benguet',
        Country: 'Philippines'
    }
}

//displaying the object on the console
console.log(contactDet1);
console.log(contactDet1.address.Street);
//displaying on the webpage
document.getElementById('contact').innerHTML="Name: "+contactDet1.firstN+" "+contactDet1.lastN+"<br>Email: "+contactDet1.email+"<br>Address: "
+contactDet1.address.bldgNum+" "+contactDet1.address.Street+"Road, "+contactDet1.address.City+", "+contactDet1.address.Province+" "+contactDet1.address.Country;
