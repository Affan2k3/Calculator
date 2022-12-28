import inquirer from "inquirer"
import chalk from "chalk"
import ListPrompt from "inquirer/lib/prompts/list.js"

let num1 = await inquirer.prompt([{
    name : "Num1",
    type : Number,
    message : "Enter First Value",
}])

let num2 = await inquirer.prompt([{
    name : "Num2",
    type : Number,
    message : "Enter Second Value",
}])

let operator = await inquirer.prompt([{
    name : "Operation",
    type : ListPrompt,
    choice : ["Addition", "Subtraction", "Division", "Multiply"],
    message : "Enter Operation type",
}])

let calculated

switch (operator) {
    case "Addition": 
        {calculated = num1 + num2}
        break;

    case "Subtraction":
        {calculated = num1 - num2}
        break;

    case "Division":
        {calculated = num1 / num2}
        break;
    
    case "Addition":
        {calculated = num1 * num2}
        break;

    default:
        {calculated = num1 + num2}
        ;
}

console.log(calculated)

