#! /usr/bin/env node  
import chalk from "chalk";
import inquirer from "inquirer";
console.log(" ");
let message = chalk.red.bold(`all project combined`);
let message1 = chalk.yellow.bold("Select one of the program");
let message2 = chalk.red.bold(" Do you want to use my program again?");
console.log(chalk.yellowBright.bold.italic(`------------------------Welcome to the ${message} program by Abdul Samad------------------------`));
console.log(" ");
let mainCondition = true;
while (mainCondition) {
    let selectOption = await inquirer.prompt([{
            name: "select",
            type: "list",
            message: message1,
            choices: ["1)   CLI-Calculator", "2)   Number Guessing Game", "3)   ATM-Machine", "4)   Todo-list", "5)   Currency-Converter", "6)   Word-Counter", "7)   Rock-Paper-Scissor", "8)   Quiz"]
        }]);
    let select = selectOption.select;
    if (select == "1)   CLI-Calculator") {
        console.log("");
        console.log(chalk.blueBright.bold.underline("--------------------Welcome to the CLI- Calculator by abdul-samad--------------------"));
        console.log("");
        let firstNum = chalk.yellowBright.bold("Enter your first number");
        let secondNum = chalk.yellowBright.bold("Enter your second number");
        let operator1 = chalk.yellowBright.bold("Select one of the operator");
        let checkAnswer = chalk.red.bold.underline("The answer is :");
        let num1 = await inquirer.prompt([{
                name: "n1",
                type: "number",
                message: firstNum
            }]);
        let num2 = await inquirer.prompt([{
                name: "n2",
                type: "number",
                message: secondNum
            }]);
        let operator = await inquirer.prompt([{
                name: "operation",
                type: "list",
                message: operator1,
                choices: ["Addition", "Subtraction", "multiplication", "division"]
            }]);
        num1 = num1.n1;
        num2 = num2.n2;
        let add = num1 + num2;
        let sub = num1 - num2;
        let multi = num1 * num2;
        let divide = num1 / num2;
        operator = operator.operation;
        if (operator == "Addition") {
            console.log(chalk.greenBright.bold(`${checkAnswer} ${add}`));
        }
        else if (operator == "Subtraction") {
            console.log(chalk.greenBright.bold(`${checkAnswer} ${sub}`));
        }
        else if (operator == "multiplication") {
            console.log(chalk.greenBright.bold(`${checkAnswer} ${multi}`));
        }
        else {
            console.log(chalk.greenBright.bold(`${checkAnswer} ${divide}`));
        }
        console.log("");
        var ask = await inquirer.prompt([{
                name: "asking",
                type: "list",
                message: message2,
                choices: ["Yes", "No"]
            }]);
        if (ask.asking == "Yes") {
            mainCondition = true;
            console.log("");
        }
        else {
            mainCondition = false;
        }
    }
    else if (select == "2)   Number Guessing Game") {
        console.log(chalk.blueBright.bold("----------------Welcome to the Number Guessing Game by Abdul Samad----------------"));
        console.log("");
        let target = Math.floor(Math.random() * 5 + 1);
        console.log("");
        let message = await inquirer.prompt([{
                message: "Select any one of the number",
                type: "list",
                name: "Num1",
                choices: ["1", "2", "3", "4", "5"]
            }]);
        if (message.Num1 == target) {
            console.log(chalk.greenBright.bold.underline("Congratulations! You guessed the correct answer"));
        }
        else {
            console.log(chalk.redBright.bold("Wrong Answer!!!!"));
            console.log("");
            var ask = await inquirer.prompt([{
                    name: "asking",
                    type: "list",
                    message: message2,
                    choices: ["Yes", "No"]
                }]);
            if (ask.asking == "Yes") {
                mainCondition = true;
            }
            else {
                mainCondition = false;
            }
        }
    }
    else if (select == "3)   ATM-Machine") {
        mainCondition = false;
        console.log(chalk.blueBright.bold("----------------Welcome to the ATM Machine by Abdul Samad----------------"));
        console.log(" ");
        console.log(chalk.red.bold("The pin is : 111"));
        let myBalance = 20000;
        let pin = 111;
        let message3 = chalk.yellow.bold('Enter Your Pin Number');
        let pinAnswer = await inquirer.prompt([{
                name: "pinQuestion",
                type: "number",
                message: message3
            }]);
        if (pinAnswer.pinQuestion === pin) {
            console.log(chalk.green.bold("Correct pin code"));
            let message4 = chalk.gray.bold("Select any one option to proceed");
            let selecting = await inquirer.prompt([{
                    name: "selectAnswer",
                    type: "list",
                    message: message4,
                    choices: ["width draw", "check balace", "fast cash"]
                }]);
            if (selecting.selectAnswer === "width draw") {
                let message5 = chalk.yellow.bold("Enter your amount");
                let enterAmount = await inquirer.prompt([{
                        name: "amount",
                        type: "number",
                        message: message5
                    }]);
                let remainingBalacne = myBalance - enterAmount.amount;
                if (enterAmount.amount > myBalance) {
                    console.log(chalk.red.bold("You Do not have that much money in you atm, please check your balance and try again!"));
                }
                else {
                    console.log(chalk.green.bold(`The remaining amount is ${remainingBalacne}`));
                }
            }
            else if (selecting.selectAnswer == "fast cash") {
                let message6 = chalk.yellow.bold("Select any options");
                let selectOptions = await inquirer.prompt([{
                        name: "options",
                        message: message6,
                        type: "list",
                        choices: ["1000", "2000", "3000", "4000", "5000", "6000", "7000"]
                    }]);
                let remainingBalacne2 = myBalance - selectOptions.options;
                console.log(chalk.green.bold(`The remaing amount is ${remainingBalacne2}`));
            }
            else {
                console.log(chalk.green.bold(`Your balance is ${myBalance}`));
            }
        }
        else {
            console.log(chalk.redBright.bold("Incorrect Pin Code"));
        }
    }
    if (select == "4)   Todo-list") {
        console.log(chalk.blueBright.bold("----------------Welcome to the Todo-list by Abdul Samad----------------"));
        console.log(" ");
        let todos = [];
        let cond = true;
        while (cond) {
            let message7 = chalk.yellow.bold("What do you want to add in your Todos");
            let message8 = chalk.white.bold("Do you want to add more to your todos?");
            let answer = await inquirer.prompt([
                {
                    name: "todo",
                    type: "input",
                    message: message7
                },
                {
                    name: "addMoreWork",
                    type: "list",
                    message: message8,
                    choices: ["Yes", "No"]
                }
            ]);
            if (answer.addMoreWork == "Yes") {
                cond = true;
            }
            else {
                cond = false;
            }
            let { todo, addMoreWork } = answer;
            if (todo) {
                todos.push(todo);
            }
            else {
                console.log(chalk.red.bold("Kindly add valid input"));
            }
        }
        if (todos.length > 0) {
            console.log(chalk.blue.bold("Your today's works are :"));
            todos.forEach(todo => {
                console.log(chalk.green.bold(todo));
            });
        }
        else {
            console.log(chalk.redBright.bold("No todos found"));
        }
        var ask = await inquirer.prompt([{
                name: "asking",
                type: "list",
                message: message2,
                choices: ["Yes", "No"]
            }]);
        if (ask.asking == "Yes") {
            mainCondition = true;
            console.log("");
        }
        else {
            mainCondition = false;
        }
    }
    else if (select == "5)   Currency-Converter") {
        console.log(chalk.blueBright.bold("----------------Welcome to the Currency Converter by Abdul Samad----------------"));
        console.log(" ");
        let mes1 = chalk.yellow("Select the currency you want to convert from :");
        let currencyFrom = await inquirer.prompt([{
                name: "cFrom",
                type: "list",
                message: mes1,
                choices: ["Ruppees", "Riyals", "Pounds", "Dollars"],
            }]);
        let mes = chalk.yellow("Select the currency you want to convert into :");
        //taking currency as input to convert into
        let currencyTo = await inquirer.prompt([{
                name: "cTo",
                type: "list",
                message: mes,
                choices: ["Ruppees", "Riyals", "Pounds", "Dollars"],
            }]);
        //making easier for us to write code
        let from = currencyFrom.cFrom;
        let to = currencyTo.cTo;
        //i made it with if else that if anyone select the same currency to convert into it will show this message
        if (from == "Ruppees" && to == "Ruppees") {
            console.log(chalk.redBright.bold("You can not convert Ruppees into Ruppees, try other currency for the convertion!!!!!!!"));
        }
        else if (from == "Riyals" && to == "Riyals") {
            console.log(chalk.redBright.bold("You can not convert Riyals into Riyals, try other currency for the convertion!!!!!!!"));
        }
        else if (from == "Pounds" && to == "Pounds") {
            console.log(chalk.redBright.bold("You can not convert Pounds into Pounds, try other currency for the convertion!!!!!!!"));
        }
        else if (from == "Dollars" && to == "Dollars") {
            console.log(chalk.redBright.bold("You can not convert Dollars into Dollars, try other currency for the convertion!!!!!!!"));
        }
        else {
            //taking input for the amount to be converted
            let message9 = chalk.yellow.bold("Enter Your Amount");
            let currencyAmount = await inquirer.prompt([{
                    name: "cAmount",
                    type: "number",
                    message: message9,
                }]);
            //making it easier for us to code
            let amount = currencyAmount.cAmount;
            //from ruppess to every currency
            if (from == "Ruppees" && to == "Riyals") {
                let amountAnswer = amount / 74.14;
                console.log(chalk.green.bold(`Your Amount From "Pakistani Ruppee" to "Riyal" is : ${amountAnswer}`));
            }
            if (from == "Ruppees" && to == "Pounds") {
                let amountAnswer = amount / 345.82;
                console.log(chalk.green.bold(`Your Amount From "Pakistani Ruppee" to "Pound" is : ${amountAnswer}`));
            }
            if (from == "Ruppees" && to == "Dollars") {
                let amountAnswer = amount / 278.01;
                console.log(chalk.green.bold(`Your Amount From "Pakistani Ruppee" to "Dollar" is : ${amountAnswer}`));
            }
            //from riyals to every currency
            if (from == "Riyals" && to == "Ruppees") {
                let amountAnswer = amount / 0.013;
                console.log(chalk.green.bold(`Your Amount From "Riyal" to "Ruppee" is : ${amountAnswer}`));
            }
            if (from == "Riyals" && to == "Pounds") {
                let amountAnswer = amount / 4.67;
                console.log(chalk.green.bold(`Your Amount From "Riyal" to "Pounds" is : ${amountAnswer}`));
            }
            if (from == "Riyals" && to == "Dollars") {
                let amountAnswer = amount / 3.75;
                console.log(chalk.green.bold(`Your Amount From "Riyal" to "Dollar" is : ${amountAnswer}`));
            }
            //from pounds to every currency
            if (from == "Pounds" && to == "Ruppees") {
                let amountAnswer = amount / 0.0029;
                console.log(chalk.green.bold(`Your Amount From "Pounds" to "Ruppes" is : ${amountAnswer}`));
            }
            if (from == "Pounds" && to == "Riyals") {
                let amountAnswer = amount / 0.21;
                console.log(chalk.green.bold(`Your Amount From "Pounds" to "Riyal" is : ${amountAnswer}`));
            }
            if (from == "Pounds" && to == "Dollars") {
                let amountAnswer = amount / 0.80;
                console.log(chalk.green.bold(`Your Amount From "Pounds" to "Dollar" is : ${amountAnswer}`));
            }
            //from dollars to every currency
            if (from == "Dollars" && to == "Ruppees") {
                let amountAnswer = amount / 0.0036;
                console.log(chalk.green.bold(`Your Amount From "Dollar" to "Ruppes" is : ${amountAnswer}`));
            }
            if (from == "Dollars" && to == "Riyals") {
                let amountAnswer = amount / 0.27;
                console.log(chalk.green.bold(`Your Amount From "Dollar" to "Riyal" is : ${amountAnswer}`));
            }
            if (from == "Dollars" && to == "Pounds") {
                let amountAnswer = amount / 1.24;
                console.log(chalk.green.bold(`Your Amount From "Dollar" to "Pound" is : ${amountAnswer}`));
            }
        }
        var ask = await inquirer.prompt([{
                name: "asking",
                type: "list",
                message: message2,
                choices: ["Yes", "No"]
            }]);
        if (ask.asking == "Yes") {
            mainCondition = true;
            console.log("");
        }
        else {
            mainCondition = false;
        }
    }
    else if (select == "6)   Word-Counter") {
        console.log(chalk.blueBright.bold("----------------Welcome to the Word-Counter by Abdul Samad----------------"));
        console.log(" ");
        let message10 = chalk.yellow("Enter Your Sentace");
        let wordCount = await inquirer.prompt([{
                name: "count",
                type: "input",
                message: message10
            }]);
        console.log("");
        //making easier for us to code
        let wordCounter = wordCount.count;
        //using split to remove the space in the sentace and return the other values seperatly in an array
        let words = wordCounter.split(" ");
        //now we have an array we can use .length to get the number of the words
        let number = words.length;
        // now consoling
        console.log(chalk.green(`Your words are seperated as : ${words} `));
        console.log("");
        console.log(chalk.greenBright(`Your total words in the sentance are : ${number}`));
        var ask = await inquirer.prompt([{
                name: "asking",
                type: "list",
                message: message2,
                choices: ["Yes", "No"]
            }]);
        if (ask.asking == "Yes") {
            mainCondition = true;
            console.log("");
        }
        else {
            mainCondition = false;
        }
    }
    else if (select == "7)   Rock-Paper-Scissor") {
        console.log(chalk.blueBright.bold("----------------Welcome to the Rock-Paper-Scissor-Game by Abdul Samad----------------"));
        console.log(" ");
        let randomFunction = Math.floor(Math.random() * 3 + 1);
        let functionNames = ["Rock", "Paper", "Scissor"];
        function a() {
            if (randomFunction == 1) {
                return functionNames[0];
            }
            else if (randomFunction == 2) {
                return functionNames[1];
            }
            else {
                return functionNames[2];
            }
        }
        let cpuFunction = a();
        console.log("-------------------------------------------------------------------------------------");
        console.log("-------------------------------------------------------------------------------------");
        let message11 = chalk.yellow.bold("Select One Of The Option");
        let askQuestion = await inquirer.prompt([{
                name: "rock",
                type: "list",
                message: message11,
                choices: ["Rock", "Paper", "Scissor"]
            }]);
        console.log("-------------------------------------------------------------------------------------");
        console.log("-------------------------------------------------------------------------------------");
        askQuestion = askQuestion.rock;
        if (askQuestion == cpuFunction) {
            console.log(chalk.blue.bold("The match has tied, the CPU chose Rock too!"));
        }
        else if (askQuestion == "Rock" && cpuFunction == "Paper" ||
            askQuestion == "Paper" && cpuFunction == "Scissor" ||
            askQuestion == "Scissor" && cpuFunction == "Rock") {
            console.log(chalk.redBright.bold(`You have Lost!! The CPU chose ${cpuFunction}`));
        }
        else {
            console.log(chalk.greenBright.bold(`You Won!! The CPU chose ${cpuFunction}`));
        }
        var ask = await inquirer.prompt([{
                name: "asking",
                type: "list",
                message: message2,
                choices: ["Yes", "No"]
            }]);
        if (ask.asking == "Yes") {
            mainCondition = true;
            console.log("");
        }
        else {
            mainCondition = false;
        }
    }
    else if (select == "8)   Quiz") {
        console.log(" ");
        mainCondition = false;
        console.log(" ");
        console.log(chalk.blueBright.bold("----------------Welcome to the Quiz by Abdul Samad----------------"));
        console.log(" ");
        //confirming from user if he/she wants to play
        let welcome = await inquirer.prompt([{
                name: "continue",
                type: "list",
                message: "Do You want to start the quiz?",
                choices: ["Yes", "No"]
            }]);
        //making easier for us
        welcome = welcome.continue;
        // 1st "if"------ if he select yes the program will continue
        if (welcome == "Yes") {
            //adding gaps
            console.log(" ");
            console.log(chalk.red.bold("There will be 5 questions!! and you have guess every question right"));
            console.log(" ");
            //making the question of the prompt to show some colors
            let message1 = chalk.yellowBright.bold("Q1)    When typescript was introduced?");
            let message3 = chalk.yellowBright.bold("Q2)    Which of the following is the post-increment operator:-");
            let message4 = chalk.yellowBright.bold("Q3)    Who developed Typescript?");
            let message5 = chalk.yellowBright.bold("Q4)    How many components typescript have?");
            let message6 = chalk.yellowBright.bold("Q5)    Which of the following is the assignment operator?");
            let message2 = chalk.red.bold("Wrong Answer!! Do you want to try again");
            //making if the person want to repaeat the program
            let condition = true;
            while (condition) {
                //2nd main prompt
                let question1 = await inquirer.prompt([{
                        name: "q1",
                        type: "list",
                        message: message1,
                        choices: ["a)   July 2012", "b)   October 2012", "c)   March 2012", "d)   December 2012"]
                    }]);
                //making easier for us to write code
                question1 = question1.q1;
                //2nd "if"-------- the program has started
                if (question1 == "b)   October 2012") {
                    console.log(" ");
                    console.log(chalk.blueBright.underline("Congratulations!! You guesssed the correct answer"));
                    console.log(" ");
                    //3rd main prompt
                    let question2 = await inquirer.prompt([{
                            name: "q2",
                            type: "list",
                            message: message3,
                            choices: ["a)   ++a", "b)   a++", "c)   a--", "d)   ++a"]
                        }]);
                    question2 = question2.q2;
                    if (question2 == "b)   a++") {
                        console.log(" ");
                        console.log(chalk.blueBright.underline("Congratulations!! You guesssed the correct answer"));
                        condition = false;
                        console.log(" ");
                        let question3 = await inquirer.prompt([{
                                name: "q3",
                                type: "list",
                                message: message4,
                                choices: ["a)   IBM", "b)   Apple", "c)   Microsoft", "d)   Samsung"]
                            }]);
                        question3 = question3.q3;
                        if (question3 == "c)   Microsoft") {
                            console.log(" ");
                            console.log(chalk.blueBright.underline("Congratulations!! You guesssed the correct answer"));
                            condition = false;
                            console.log(" ");
                            let question4 = await inquirer.prompt([{
                                    name: "q4",
                                    type: "list",
                                    message: message5,
                                    choices: ["a)   1", "b)   2", "c)   3", "d)   4"]
                                }]);
                            question4 = question4.q4;
                            if (question4 == "c)   3") {
                                console.log(" ");
                                console.log(chalk.blueBright.underline("Congratulations!! You guesssed the correct answer"));
                                condition = false;
                                console.log(" ");
                                let question5 = await inquirer.prompt([{
                                        name: "q5",
                                        type: "list",
                                        message: message6,
                                        choices: ["a)   ==", "b)   ===", "c)   !=", "d)   ="]
                                    }]);
                                question5 = question5.q5;
                                if (question5 == "d)   =") {
                                    console.log(" ");
                                    console.log(chalk.greenBright.underline.bold("Congratulations!! You guesssed the all answer correctly"));
                                    condition = false;
                                    console.log(" ");
                                }
                                else {
                                    console.log(" ");
                                    var tryagain = await inquirer.prompt([{
                                            name: "again",
                                            type: "list",
                                            message: message2,
                                            choices: ["Yes", "No"]
                                        }]);
                                    tryagain = tryagain.again;
                                    if (tryagain == "Yes") {
                                        condition = true;
                                    }
                                    else {
                                        condition = false;
                                    }
                                }
                            }
                            else {
                                console.log(" ");
                                var tryagain = await inquirer.prompt([{
                                        name: "again",
                                        type: "list",
                                        message: message2,
                                        choices: ["Yes", "No"]
                                    }]);
                                tryagain = tryagain.again;
                                if (tryagain == "Yes") {
                                    condition = true;
                                }
                                else {
                                    condition = false;
                                }
                            }
                        }
                        else {
                            console.log(" ");
                            var tryagain = await inquirer.prompt([{
                                    name: "again",
                                    type: "list",
                                    message: message2,
                                    choices: ["Yes", "No"]
                                }]);
                            tryagain = tryagain.again;
                            if (tryagain == "Yes") {
                                condition = true;
                            }
                            else {
                                condition = false;
                            }
                        }
                    }
                    else {
                        console.log(" ");
                        var tryagain = await inquirer.prompt([{
                                name: "again",
                                type: "list",
                                message: message2,
                                choices: ["Yes", "No"]
                            }]);
                        tryagain = tryagain.again;
                        if (tryagain == "Yes") {
                            condition = true;
                        }
                        else {
                            condition = false;
                        }
                    }
                }
                //added else if the person want to continue using the program
                else {
                    console.log(" ");
                    //used var because it will be use multiple times
                    var tryagain = await inquirer.prompt([{
                            name: "again",
                            type: "list",
                            message: message2,
                            choices: ["Yes", "No"]
                        }]);
                    tryagain = tryagain.again;
                    if (tryagain == "Yes") {
                        condition = true;
                    }
                    else {
                        condition = false;
                    }
                }
            }
        }
        else {
            console.log(chalk.red.bold("Not a problem!!"));
        }
    }
}
