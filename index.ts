#!/usr/bin/env node


// creating word counter

import inquirer from "inquirer";
console.log("WORD COUNTER"); // showing that coming program is for word counter

const response = await inquirer.prompt(
    {
        name: "sentence",
        type: "input",
        message: "Enter your Sentence",
    }
)

// Now storing the input of user by removing white spaces and breaking into small pieces 

const   resOfAns = response["sentence"].trim().split(" ")

// it shows how many words in your sentence which you write

console.log(`your sentence is consists of ${resOfAns.length} words`);



























