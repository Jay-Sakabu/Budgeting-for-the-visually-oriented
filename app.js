//Functions and Imports
const input = require('readline-sync');
function calculateMonthlyRent(grossMonthlyIncome)
    {
        return grossMonthlyIncome * .28;
    }

//Defined objects/Structs
    const userObject =
    {
        userName: "nameless",
        userGrossMonthly: 0.00,

    };

/********
Ideally, the broad structure of the project should be:
1. Retrieve user input
2. Store user input
3. Take user input and get values of budgeting items via functions
4. Return budgeting items to user
********/

//Variable initializations
let userMonthlyIncome = 0;
let userArray = ["Name", 4000]; //Building arrays: building a userArray to hold user information
let userName = input.question(`Enter in your name: `);
userArray[0] = userName;

do{
    userMonthlyIncome = input.questionFloat(`Enter in your gross monthly income: `); // Values, Data Types, and Operations: Guarantees a float value is entered
    if(userMonthlyIncome < 0) //Control Structures and Logic: Selection flow, checking if userMonthlyIncome is positive
    {
        console.log("You entered a negative value for income, please enter a postive value");
    }
}while(userMonthlyIncome < 0); // Working with Loops: Looping for user input while input is invalid

userArray[1] = userMonthlyIncome
let userMonthlyRent = calculateMonthlyRent(userMonthlyIncome);

console.log(`User entered: $${userMonthlyIncome.toFixed(2)} 
Your monthly rent should cost no more than: $${userMonthlyRent.toFixed(2)}
${userArray}`); // Stringing Chracters Together: Using string literal to provide ease of readability & Using Arrays: Printing contents of the userArray