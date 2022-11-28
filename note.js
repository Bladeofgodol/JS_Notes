// JavaScript is the programming language of the Web.

// variables
    // variables hold values just like in math
    // case sensetive
    // we use = to assign values and == to compare variablse if they are equal to each other
    // 4 ways to declare a variable
var w = 1;
let x = 2; // is a newer but simmilar way to diclare like var
const y = 4; //y is always constantly 4
    // we cant re declare variables first declared by let or const
z = 5;

// Data types
    //js recoginizes datatype of variables as they are being assigned
    let s = "hi"; //s is recognized as a string
    let n = 4; //n is recognized as an number
    let n2 = 6.5; // js has one type of number it can be float or integer
    let ns = 4 + "hi"; //is is recognized as a string
    let u; // u is recognized as undefined
        // booleans are usually returned from if conditions
    (n == y);// this returns true
    (s == ns); // this returns false
        //array
            //array can be declared with any variabele
    var array = [12, 234, 23523] // array of 3 numbers make sure to used [] to declare them
            //objects are used to retive proerties of an element of an array declared by  {}
    const person = { firstname: 'Hanna', lastname: 'abebe', age: 20 }
    return person.age; //returns 20
     

//condtions
    // do something if a condtion is met hence true
    //if-else conditions

if (n == y) {// conditions
  //do something
} else if (s == ns) { // if not the previous condition check this condition
  // do something
} else {// if not the conditions
  //do something else
}

    //switchs
switch (n)// the variable to be compared is n 
{
  case 0:
  // if n == 0 do something
  case 1:
  // if n == 1 do something
  case 4:
  // if n == 4 do something
  default:
  //if n == none of the above do something else
}

//loop
    // used to do something repeatedly while a condtion is met or until a condtion is met
    // diffrent kinds of loops
    // for loop
    for (i = 0; i >= 5; i++) {// do something before loop usually initialize; a condtion to check before an ittration; an action to do after every ittreation usually increnment and decrement of the initilized variable
}
    // for in loop
for (n in x) { //for every propertu\y n in x itterate the statment
        //statments to be looped
}
    
    // for of loop
for (n of x) {// for every element n in x array itterate the statment
    // statments to be looped
}
    
    // while loop
while (n == x) {//check before every ittration if condtion n == x is true then ittrate the statement
    //statments to be looped
        
    }
    // Do while loop
do {
        //do something while condtion is true
} while (n == x) //check whether the condtion is true after every itteration
    

//method
    // is the 'function' for js
    // a block of code to be excuted
function name(x, n) { // declared by function then the name then the arguments to be used in that fnucntion
    //code to be excuted
    var j = 6; // we can declare a varable in an function used in that function only
    return n * x * n2;// we can use variable from argument or outside the argument or inside the function
}
    
//DOM
    //Document Object Model of the page
    //is constructed as a tree of Objects
    //is a standard object model and programming interface for HTML.
    //It defines:
        // The HTML elements as objects
        // The properties of all HTML elements
        // The methods to access all HTML elements
        // The events for all HTML elements
    //  is a standard for how to get, change, add, or delete HTML elements.

//events
    //are things that happen in an html document
    //event can be something the browser does, or something a user does.
    //JavaScript lets you execute code when events are detected.
    //HTML allows event handler attributes, with JavaScript code, to be added to HTML elements.
    //with single or double quots
//<element event='some JavaScript'></element>
  //  <element event="some JavaScript"></element>