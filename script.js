//I am learning JavaScript Functions

//Todays lesson consists of understanding functions and how they operate


//Function schema
//Making functions saves blocks of code to be ran when we need it
//INSTEAD of immediately running as the page loads
function funcOne(){
    console.log("Hey.");
    console.log(5 + 7);
};

funcOne(); //This is how we call function code blocks to run. ex: funName();

let numOne = 7;
let numTwo = 3;

//Scope: Whether it's a Global, Block, or Function Scope(Local scope)
function addTwoNums(){
    console.log(numOne + numTwo);
};

addTwoNums(); //Calling the function to run 


//Arguments
//This function is currently accepting two arguments
function addTwoNumsV2(a,b){
    console.log(a + b);      //No matter how many times you call this function, it will run.
};

//Sending data inside the arguments spots in functions
addTwoNumsV2(numOne, numTwo);
addTwoNumsV2(6, 10);
addTwoNumsV2("Good", " Bye!");


//Uppercase and Lowercases (names examples)
function greetbyName(name){
    console.log("Hello, " + name + "! Weclome to the site.")
};
greetbyName("b");

function greetbyExcitment(name){
    //Let variable is only being seen inside of this function
    let upperCaseName = name.toUpperCase();
    console.log(upperCaseName);

    return upperCaseName //This is sending back the output of this function
    //If you ever need a function to send back new data, you will need a return
};
let screamName = greetbyExcitment("b!");
console.log(screamName);

//upperCaseName
//console.log(upperCaseName);
console.log(`HIII ${screamName} IT"S ALMOST TIME TO SEE THE ALIEN MOVIE!`);



//Making a sandwich example
//This function shows DEFAULT values being added in the Arguments
function makeSandwich(typeOfBread, typeOfMeat, typeOfSauce, typeOfVeggie = "N/A"){
    console.log(`Bread: ${typeOfBread} Meat: ${typeOfMeat} Sauce: ${typeOfSauce}, Veggies: ${typeOfVeggie}`);
}

let bSandwich = makeSandwich("Flatbread", "Roast Beef", "Honey Mustard", "Tomato");
let mikeSandwich = makeSandwich("White", "Chicken", "Buffalo");




//Function Questions and Problems

//Problem One
//Grade Calculator
//Create a program that calculates the average grade from an array of grades
//Determine the corresponding letter grade

//TODO: Define an array containing a list of 5 grades
//TODO: Create a function to calculate the average of the grades
//TODO: Create another function to determine the letter grade based on the average
//TODO: Use if-else statements inside the function to determine the letter grade

//Output Results: Use console.log to display the average grade and the corresponding letter grade

let grades = [35, 44, 79, 95, 50];

console.log(`Grades Array: ${grades}`);

//forEach() method will look through the array and add each element
//sum is stored then divided by the length of the array to calc the average
function averageGrade(Number){
    let sum = 0;
grades.forEach((Number) => {
    sum += Number;
});

let average = sum / grades.length;
console.log(`Grade Average ${average}`);

return average;
}//60.6 answer

let numberAverage = averageGrade(grades);
//This is allowing line 101 to show on the console

//Letter Grade
//100-90 A, 89-80 B, 79-70 C, 69-60 D, 59 and below is F
function letterGrade(numberAverage){
    for (let i = 0; i < grades.length; i++){
        if (numberAverage >= 90){
            console.log(`Letter grade based on average is A.`);
        }
        else if (numberAverage > 80){
            console.log(`Letter grade based on average is B.`);
        }
        else if (numberAverage > 70){
            console.log(`Letter grade based on average is C.`);
        }
        else if (numberAverage > 60){
            console.log(`Letter grade based on average is D.`);
        }
        else if (numberAverage < 59){
            console.log(`Letter grade based on average is F.`);
        }
    };
};

letterGrade(numberAverage);

console.log(`Grade Average is 60.6 and Letter Grade based on average is D.`)

//End problem one



//Problem Two
//! Bank Account Manager
//? Create a program that allows a user to manage a simple bank account, including depositing, withdrawing, and checking the balance.
 
//TODO Define Variables: Start with a balance variable.
//TODO Create Functions: Create functions to deposit money, withdraw money, and check the balance.
//TODO Use if-else Statements: Use if-else statements to ensure the withdrawal amount does not exceed the balance.
//* Output Results: Use console.log to display the updated balance after each operation.







//Problem Three
//! Simple To-Do List
//? Create a program that allows the user to add and display tasks in a to-do list.
 
//TODO Define an Array: Define an array to store the tasks.
//TODO Create Functions: Create functions to add a task and display the to-do list.
//TODO Use if-else Statements and Loops: Use if-else statements and loops within the functions to handle the tasks.
//* Output Results: Use console.log to display the to-do list after each operation.
 

let taskToDo = [];

function addATask(additionalTask){
    taskToDo.push(additionalTask);
    console.log(taskToDo);
}

addATask(`Laundry`);
addATask(`Recovery run`);
addATask(`Code some`);



//Problem Four
//! Temperature Converter
//? Create a program that converts temperatures between Celsius, Fahrenheit, and Kelvin.
 
//TODO Define Variables: Allow the user to input a temperature value and the unit they want to convert from.
//TODO Create Functions: Create functions to convert between Celsius, Fahrenheit, and Kelvin.
//? (Hint: There will be two arguements temperature value and unit letter (Celsius, Farenheit, Kelvin))
//? ex. If I provide 25 and "C" I want the Kelvin and Farenheit temperature
 
//* KelvinToCelsius conversion:
//* kelvinNum - 273.15
 
//* celsiusToKelvin:
//* celsiusNum + 273.15
 
//* fahrenheitToCelsius:
//* (fahrenheit - 32) * 5/9
 
//* celsiusToFahrenheit:
//* (celsius * 9/5) + 32
 
 
//TODO  Use if-else Statements: Use if-else statements to determine which conversion to perform based on the user's input.
//* Output Results: Use console.log to display the converted temperature.





//Problem Five
//Music Playlist Manager
//Create a program that allows the user to manage a playlist of songs

//TODO: Define an array to store the song titles
//TODO: Create Functions to add a song, remove a song and display the playlist
//Output Results: Use console.log to display the playlist after EACH OPERATION!


let songTitles = [];
//Empty array to add songs to

//creating a function to add songs to array using .push method
function addASong(additionalSongs){
    songTitles.push(additionalSongs);
    console.log(songTitles);
}

//console.log (line 222) additional songs array should now look roughly like: abstract, always on my mind, black magic woman, babylon
addASong(`Abstract (Psychopomp)`);
addASong(` Always On My Mind`);
addASong(` Black Magic Woman`);
addASong(` Babylon (Don't Let Me Fall)`);

//creating a function to remove a song from the array or "playlist"
function removeASong(deleteSong){
    songTitles.splice(2, 1);
    console.log(songTitles);
}

removeASong();
//calling function so console.log (line 234) can show up on the console

//displaying playlist on console
console.log(`Playlist Displayed As: 
    ${songTitles}`);

//End of problem five



//Problem Six
//Daily Temperatures
//Create a program that processes daily temp readings, calculates, the average temp and identifies the highest and lowest temps

//TODO: Predefine an array of temperatures: Start with an array of numbers representing daily temps
let temperatures = [72, 75, 79, 83, 78, 85, 90];
console.log(`Daily Temperatures: ${temperatures}`);

//TODO: Calculate the average temp: write a function to calculate the average of the temps
function averageTemp(number){
    let sum = 0;
    temperatures.forEach((number) => { //using .forEach method again to get the average from all the numbers in the array
        sum += number;
    });

    let avTempNum = sum / temperatures.length;
    console.log(`Temperature Average: ${avTempNum.toFixed(2)}`);
    //.toFixed to fix the number of decimal places (*insert number of decimal places you wish to have*)

    return avTempNum; //returning the avtempnum
    //80.29 answer 
}

let tempAverage = averageTemp(temperatures); //calling the function???? maybe??? 

//TODO: Find the HIGHEST TEMP in the array by writing a function
function tempLowAndHigh(){
    let temperatures = [72, 75, 79, 83, 78, 85, 90];

    let minTemp = Math.min(...temperatures);
    let maxTemp = Math.max(...temperatures);
    //Math.min and Math.max is looking through the array to find the maximum and the minimun element within the given array 

    console.log(`Minimun Temperature is: ` + minTemp);
    console.log(`Max Temperature is: ` + maxTemp);
    //output the results for the max and min temps within the array 
    // min answer: 72
    // max answer: 90
}

tempLowAndHigh(); //calling the function
//this will allow lines 281 and 282 to show up on the console 

//End problem six


// More function notes and practice from beginning!!!

function add(){
    console.log(2 + 2);
}

add();


function addingTwoNums(leftNumber, rightNumber){
    console.log(leftNumber + rightNumber);
}

addingTwoNums(2, 2);
addingTwoNums(3 , 1);
addingTwoNums(42, 2);


function calArea(width, height){
    return width * height;
}
//when to use return or not???
//if you need the answer to be out of a function
// RETURN IT

// THE RETURN VALUE CAN BE STORED IN A VARIABLE TO USE LATER ON IF NEEDED

let areaAnswer = calArea(4, 11);
let areaAnswerTwo = calArea(444, 1);
let areaAnswerThree = calArea(22, 2);

console.log(areaAnswer);
console.log(areaAnswerTwo);
console.log(areaAnswerThree);



function whichNumIsHigher(numOne, numTwo){
        if (numOne > numTwo){
            console.log(`In space no one can hear you scream.`);
        }
        else if (numTwo > numOne){
            console.log(`Run.`);
        }
}

whichNumIsHigher(14, 4);

whichNumIsHigher(areaAnswer, areaAnswerTwo);
// these variables are assigned to functions that RETURN numbers

