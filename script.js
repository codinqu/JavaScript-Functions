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


//Problem Two
//