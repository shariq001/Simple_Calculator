#! /usr/bin/env node 
import inquirer from "inquirer";
const answers = await inquirer.prompt([
    {
        type: "number",
        name: "numberOne",
        message: "Please enter your first number"
    },
    {
        type: "number",
        name: "numberTwo",
        message: "Please enter your second number"
    },
    {
        type: "list",
        name: "Operator",
        choices: ["Add", "Subtract", "Multiply", "Divide"],
        message: "Please select your desired operator",
    },
]);
const { numberOne, numberTwo, Operator } = answers;
if (numberOne && numberTwo && Operator) {
    let result = 0;
    if (Operator === "Add") {
        result = numberOne + numberTwo;
    }
    else if (Operator === "Subtract") {
        result = numberOne - numberTwo;
    }
    else if (Operator === "Multiply") {
        result = numberOne * numberTwo;
    }
    else if (Operator === "Divide") {
        result = numberOne / numberTwo;
    }
    console.log("Your result is", result);
}
else {
    console.log("Please perform valid operation");
}
;
// ----------------------------------------------//
