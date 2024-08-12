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

