#!/usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

let quizNumber : number = 100;
let passingMarks = 60;
let points = 0

console.log(chalk.bold.bgYellowBright(`\t\t\t<<<<<<< Total Quiz Number : ${quizNumber} >>>>>>>>`));
console.log(chalk.bold.bgYellowBright(`\t\t\t<<<<<<< Passing Marks : ${passingMarks} >>>>>>>>>`));
console.log(chalk.bold.bgYellowBright(`\t\t\t<<<<<<< Each Question = 10 Numbers >>>>>>>>>`));




let quiz = await inquirer.prompt([
    {
        name : "q1",
        type : "list",
        message : chalk.bold.magentaBright("Which Operator is Used To Check If Two Values Are Not Equal in TypeScript?"),
        choices : [" 1) !=" , " 2) !==", " 3) <>", " 4) ><"]
    },
    {
        name : "q2",
        type : "list",
        message : chalk.bold.magentaBright("What Is Module In TypeScript?"),
        choices : [" 1) A Data Type", " 2) A way to organize code into separate pieces", " 3) A function", " 4) All of the above"]
    },
    {
        name : "q3",
        type : "list",
        message : chalk.bold.magentaBright("How Does TypeScript Handle Code Reuse With Modules?"),
        choices : [" 1) By using the import and export keywords", " 2) By providing a built-in code sharing mechanism", " 3) Bu automatically importing relevant codesnippets", " 4) By defining TypeScrpt classes"]
    },
    {
        name : "q4",
        type : "list",
        message : chalk.bold.magentaBright("Which TypeScript Configuration File Is Commeonly Used To Specify Module-Related Setting?"),
        choices : [" 1) tsconfig.jason", " 2) package.json", " 3) node-modues", " 4) webpack.config.js"]
    },
    {
        name : "q5",
        type : "list",
        message : chalk.bold.magentaBright("What Is The Purpose Of The inquirer Module in Typescript Applications?"),
        choices : [" 1) To handle HTTP requests", " 2) To create interactive command-line interfaces", " 3) To manage database connections", " 4) To generate documentation"]
    },
    {
        name : "q6",
        type : "list",
        message : chalk.bold.magentaBright("What Is Node.js?"),
        choices : [" 1) A web browser", " 2) A server-side runtime environment", " 3) A front-end JavaScript FrameWork", " 4) A database management system"]
    },
    {
        name : "q7",
        type : "list",
        message : chalk.bold.magentaBright("Node.js Was Initially Released In Which Year?"),
        choices : [" 1) 2005", " 2) 2010", " 3) 2009", " 4) 2015"]
    },
    {
        name : "q8",
        type : "list",
        message : chalk.bold.magentaBright("What Is The Appropriate Way To Check If A Variable Is Null Or Undefined In An If Statement?"),
        choices : [" 1) if(variable === null || variable === undefined) {...}", " 2) if(variable == null) {...}", " 3) if(!variable) {...}", " 4) All of the above"]
    },
    {
        name : "q9",
        type : "list",
        message : chalk.bold.magentaBright("What Does  The Return  Keyword Do In A Function?"),
        choices : [" 1) Defines the function name", " 2) Specifies the function's parameters", " 3) Exits the function and optionally provides a value", " 4) Grants access to private variables"]
    },
    {
        name : "q10",
        type : "list",
        message : chalk.bold.magentaBright("In TypeScript, What Is The Significance Of Adding (type : module) To The Package.json File?"),
        choices : [" 1) Specify the TypeScript version used in the project", " 2) To indicate that the projecct is using ECMAScript modules", " 3) To configure module resolution and code generaton", " 4) To enable strict type checking"]
    },

    
]);

if(quiz.q1 == " 2) !==") {
    console.log(chalk.bold.bgGreen(`\t\tQ : 1 ) Correct Answer!!!`))
    points+=10
}else {
console.log(chalk.bold.redBright(`\t\tQ : 1 ) Wrong Answer, Correct Answer Is\t!==`));
}
if(quiz.q2 == " 2) A way to organize code into separate pieces") {
    console.log(chalk.bold.bgGreen(`\t\tQ : 2 ) Correct Answer!!!`))
    points+=10
} else {
    console.log(chalk.bold.redBright(`\t\tQ : 2 ) Wrong Answer, Correct Answer Is\t A way to organize code into separate pieces`));
}
if(quiz.q3 == " 1) By using the import and export keywords") {
    console.log(chalk.bold.bgGreen(`\t\tQ : 3 ) Correct Answer!!!`))
    points+=10
} else {
    console.log(chalk.bold.redBright(`\t\tQ : 3 ) Wrong Answer, Correct Answer Is\t By using the import and export keywords`));
}
if(quiz.q4 == " 1) tsconfig.jason") {
    console.log(chalk.bold.bgGreen(`\t\tQ : 4 ) Correct Answer!!!`))
    points+=10
}else {
    console.log(chalk.bold.redBright(`\t\tQ : 4 ) Wrong Answer, Correct Answer Is\t tsconfig.jason`));
}
if(quiz.q5 == " 2) To create interactive command-line interfaces") {
    console.log(chalk.bold.bgGreen(`\t\tQ : 5 ) Correct Answer!!!`))
    points+=10
}else {
    console.log(chalk.bold.redBright(`\t\tQ : 5 ) Wrong Answer, Correct Answer Is\t To create interactive command-line interfaces `));
}
if(quiz.q6 == " 2) A server-side runtime environment") {
    console.log(chalk.bold.bgGreen(`\t\tQ : 6 ) Correct Answer!!!`))
    points+=10
}else {
    console.log(chalk.bold.redBright(`\t\tQ : 6 ) Wrong Answer, Correct Answer Is\t A server-side runtime environment `));
}
if(quiz.q7 == " 3) 2009") {
    console.log(chalk.bold.bgGreen(`\t\tQ : 7 ) Correct Answer!!!`))
    points+=10
}else {
    console.log(chalk.bold.redBright(`\t\tQ : 7 ) Wrong Answer, Correct Answer Is\t 2009`));
}
if(quiz.q8 == " 4) All of the above") {
    console.log(chalk.bold.bgGreen(`\t\tQ : 8 ) Correct Answer!!!`))
    points+=10
}else {
    console.log(chalk.bold.redBright(`\t\tQ : 8 ) Wrong Answer, Correct Answer Is\t All of the above`));
}
if(quiz.q9 == " 3) Exits the function and optionally provides a value") {
    console.log(chalk.bold.bgGreen(`\t\tQ : 9 ) Correct Answer!!!`))
    points+=10
}else {
    console.log(chalk.bold.redBright(`\t\tQ : 9 ) Wrong Answer, Correct Answer Is\t Exits the function and optionally provides a value`));
}
if(quiz.q10 == " 2) To indicate that the projecct is using ECMAScript modules") {
    console.log(chalk.bold.bgGreen(`\t\tQ : 10 ) Correct Answer!!!`))
    points+=10
}else {
    console.log(chalk.bold.redBright(`\t\tQ : 10 ) Wrong Answer, Correct Answer Is To indicate that the projecct is using ECMAScript modules`));
}
console.log(chalk.yellow(`\t\t\t\t\t<<<<<  ${points} >>>>>>`));
if(points >= passingMarks) {
    console.log(chalk.bold.bgYellowBright(`\t\t<<<<<< Congratulations You Passed The Quiz And Your Score Is ${points} >>>>>>>`))
} else {
    console.log(chalk.bold.bgRed(`\t\t<<<< Unfortunately You Failed, Your Score is ${points} >>>>`));
}


