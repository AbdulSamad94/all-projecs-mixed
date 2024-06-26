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
            choices: ["1)   CLI-Calculator", "2)   Number Guessing Game", "3)   ATM-Machine", "4)   Todo-list", "5)   Currency-Converter", "6)   Word-Counter", "7)   Rock-Paper-Scissor", "8)   Quiz", "9)   Student-Management-System", "10)  Adventure Game", "11)  Countdown Timer", "12)  OOP student management system"]
        }]);
    let select = selectOption.select;
    if (select == "1)   CLI-Calculator") {
        console.log(chalk.blueBright.bold.underline("\n--------------------Welcome to the CLI- Calculator by abdul-samad--------------------\n"));
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
        operator = operator.operation;
        let add = num1 + num2;
        let sub = num1 - num2;
        let multi = num1 * num2;
        let divide = num1 / num2;
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
    else if (select == "9)   Student-Management-System") {
        mainCondition = false;
        console.log(chalk.yellowBright("\n--------------------------Welcome to the Student-Management project by Abdul Samad------------------------\n"));
        let randomId = Math.floor(Math.random() * 9999 + 1000);
        let nameasking = await inquirer.prompt([{
                name: "name",
                type: "input",
                message: chalk.blueBright.bold.underline("Enter Your Name:")
            }]);
        let selectCourse = await inquirer.prompt([{
                name: "course",
                type: "list",
                message: chalk.blueBright.bold.underline("Select Any One Of The Course : "),
                choices: ["TypeScript", "JavaScript", "Python", "Java", "PHP"]
            }]);
        let coursefees = {
            "TypeScript": 4000,
            "JavaScript": 4200,
            "Python": 3500,
            "Java": 3000,
            "PHP": 3800,
        };
        let pinCodes = {
            EasyPaisa: 123,
            JazzCash: 1234,
            PayPal: 12345
        };
        selectCourse = selectCourse.course;
        console.log(chalk.redBright.bold(`\nYou Have Selected ${chalk.white.underline(selectCourse)}, And It's Fees is ${chalk.white.bold.underline(coursefees[selectCourse])}\n`));
        let selectBank = await inquirer.prompt([{
                name: "bank",
                type: "list",
                message: chalk.yellowBright.bold("Select Any One Of The Bank To Proceed..."),
                choices: ["EasyPaisa", "JazzCash", "PayPal"]
            }]);
        selectBank = selectBank.bank;
        let pinCheck = await inquirer.prompt([{
                name: "pin",
                type: "input",
                message: chalk.redBright.bold.underline(`Enter The pinCode Of ${selectBank}`)
            }]);
        pinCheck = pinCheck.pin;
        let balace = 10000;
        if (pinCheck == pinCodes[selectBank]) {
            console.log(chalk.greenBright.bold(`\nYour Balance in ${selectBank} is ${balace}..\n`));
            let enterAmount = await inquirer.prompt([{
                    name: "amount",
                    type: "number",
                    message: chalk.yellow.bold(`Enter The Amount Of the ${chalk.white.underline(selectCourse)} : `)
                }]);
            if (enterAmount.amount == coursefees[selectCourse]) {
                console.log(chalk.green.bold(`\nCongratulations! You Have brought ${chalk.blue.underline(selectCourse)} Course..\n`));
                let exitMode = await inquirer.prompt([{
                        name: "exit",
                        type: "list",
                        message: chalk.yellow.bold("Select Any One Of The Exit Mode :"),
                        choices: ["View Final Status", "Exit"]
                    }]);
                if (exitMode.exit == "View Final Status") {
                    console.log(chalk.white.bold(`\n ---------------AdmitCard---------------\n`));
                    console.log(chalk.green.bold(`\tStudent Name : ${nameasking.name}\t`));
                    console.log(chalk.green.bold(`\tStudent's Id : ${randomId}\t`));
                    console.log(chalk.green.bold(`\tSelected Course : ${selectCourse}\t`));
                    console.log(chalk.green.bold(`\tCourse Fees : ${coursefees[selectCourse]}\t`));
                    console.log(chalk.green.bold(`\tCourse Fees Paid? : Paid \t`));
                }
                else {
                    console.log(chalk.blue(`\n--------------------Exiting------------------\n`));
                }
            }
            else if (enterAmount.amount > coursefees[selectCourse]) {
                -console.log(chalk.red.bold.underline("\nYou ARe Giving extra Money, please give me the exact amount of the course\n"));
            }
            else {
                console.log(chalk.red.bold.underline("\nPlease Enter The Valid Amount\n"));
            }
        }
        else {
            console.log(chalk.redBright.bold("\n Wrong PinCode!!\n"));
        }
    }
    else if (select == "10)  Adventure Game") {
        mainCondition = false;
        let playerFuel = 100;
        let OpponentFuel = 100;
        function rand() {
            return Math.floor(Math.random() * 2);
        }
        function playerAttack() {
            if (rand() == 0) {
                return 0;
            }
            else {
                return 25;
            }
        }
        function opponentAttack() {
            if (rand() == 0) {
                return 0;
            }
            else {
                return 25;
            }
        }
        async function game() {
            let nameAsking = await inquirer.prompt([{
                    name: "name",
                    type: "input",
                    message: chalk.yellowBright.bold("Enter Your Name: ")
                }]);
            let playerName = nameAsking.name;
            let selectEnemy = await inquirer.prompt([{
                    name: "enemy",
                    type: "list",
                    message: chalk.yellowBright.bold("Select Any One Of The Opponent..."),
                    choices: ["Zombie", "Skeleton", "Alien"]
                }]);
            let enemyName = selectEnemy.enemy;
            console.log(chalk.blueBright.bold(`\n\t------${chalk.underline(playerName)} fuel is ${chalk.underline(playerFuel)} & ${chalk.underline(enemyName)} Fuel is ${chalk.underline(OpponentFuel)}------\t\n`));
            while (playerFuel >= 0 && OpponentFuel >= 0) {
                let selectAttack = await inquirer.prompt([{
                        name: "attacking",
                        type: "list",
                        message: chalk.yellowBright.bold("Select Any One Of The Attack..."),
                        choices: ["Attack", "Drink Lucky Potion", "Run For Life.."]
                    }]);
                selectAttack = selectAttack.attacking;
                if (selectAttack == "Attack") {
                    let playerDamage = playerAttack();
                    let opponentDamage = opponentAttack();
                    playerFuel -= opponentDamage;
                    OpponentFuel -= playerDamage;
                    console.log(chalk.greenBright.bold(`${playerName} attacks! ${enemyName} takes ${playerDamage} damage.`));
                    console.log(chalk.redBright.bold(`${enemyName} attacks! ${playerName} takes ${opponentDamage} damage.\n`));
                    console.log(chalk.greenBright.bold(`${playerName} Fuel is now ${playerFuel}`));
                    console.log(chalk.redBright.bold(`${enemyName} Fuel is now ${OpponentFuel}\n`));
                }
                else if (selectAttack == "Drink Lucky Potion") {
                    playerFuel = 100;
                    console.log(chalk.greenBright.bold.underline(`\n${playerName} drinks a lucky potion! Fuel is now refilled to ${playerFuel}\n`));
                    let opponentDamage = opponentAttack();
                    playerFuel -= opponentDamage;
                    console.log(chalk.redBright.bold(`${enemyName} attacks! ${playerName} takes ${opponentDamage} damage.`));
                    console.log(chalk.greenBright.bold(`${playerName} Fuel is now ${playerFuel}\n`));
                }
                else {
                    console.log(chalk.red.bold("\nYou Lost! Try Again..\n"));
                    return;
                }
                if (playerFuel <= 0) {
                    console.log(chalk.red.bold("\nYou Lost! Try Again..\n"));
                    return;
                }
                else if (OpponentFuel <= 0) {
                    console.log(chalk.green.bold("\n\tCongratulations! You Won!\t\n"));
                    return;
                }
            }
        }
        game();
    }
    else if (select == "11)  Countdown Timer") {
        mainCondition = false;
        async function main() {
            let cQuestion = await inquirer.prompt([{
                    name: "cQuestion",
                    type: "number",
                    message: chalk.bold.yellow("Enter Your number..."),
                    validate: (input) => {
                        if (isNaN(input) || input <= 0) {
                            return chalk.bold.red("Please enter a valid positive number.");
                        }
                        return true;
                    }
                }]);
            cQuestion = cQuestion.cQuestion;
            function startCountDown(second) {
                let interval = setInterval(() => {
                    console.log(chalk.greenBright(`${second} seconds are remaining!`));
                    second--;
                    if (second <= 0) {
                        clearInterval(interval);
                        console.log(chalk.bold.red.underline("\nCountDown Finished!!"));
                    }
                }, 1000);
            }
            startCountDown(cQuestion);
        }
        main();
    }
    else if (select === "12)  OOP student management system") {
        mainCondition = false;
        async function StudentManagement() {
            function rollNumberGenrating() {
                return Math.floor(Math.random() * 9001) + 1000;
            }
            class Student {
                name;
                age;
                rollNumber;
                selectedCourse;
                feesPaid;
                constructor(name, age, rollNumber, selectedCourse, feesPaid) {
                    this.name = name;
                    this.age = age;
                    this.rollNumber = rollNumber;
                    this.selectedCourse = selectedCourse;
                    this.feesPaid = feesPaid;
                }
            }
            let aboutStudent = new Student("smth", "smth", 0, "smth", "smthhhhhhh");
            let courseFees = {
                HTML: 500,
                CSS: 700,
                JavaScript: 1200,
                TypeScript: 1500,
                React: 1800,
                NextJs: 1800,
                Python: 2000
            };
            let NameStudent = await inquirer.prompt([{
                    name: "name",
                    message: chalk.yellowBright.bold("Enter your name."),
                    type: "input"
                }]);
            aboutStudent.name = NameStudent.name;
            if (aboutStudent.name == "") {
                console.log(chalk.red.bold("> Please enter a name"));
                process.exit();
            }
            let Studentage = await inquirer.prompt([{
                    name: "age",
                    message: chalk.bold.yellowBright("Enter your age."),
                    type: "number"
                }]);
            aboutStudent.age = Studentage.age;
            if (aboutStudent.age != aboutStudent.age) {
                console.log(chalk.red.bold("> Please enter a valid number"));
                process.exit();
            }
            let aboutCourse = await inquirer.prompt([{
                    name: "course",
                    message: chalk.bold.yellowBright("Select any one of the following courses."),
                    type: "list",
                    choices: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "NextJs", "Python"]
                }]);
            aboutStudent.selectedCourse = aboutCourse.course;
            console.log(chalk.greenBright.bold(`> You have selected ${aboutStudent.selectedCourse} and it's fess is ${courseFees[aboutStudent.selectedCourse]}`));
            let aboutFees = await inquirer.prompt([{
                    name: "fees",
                    message: chalk.red.bold("Enter the course fees."),
                    type: "number"
                }]);
            let fees = aboutFees.fees;
            if (fees !== courseFees[aboutStudent.selectedCourse]) {
                console.log(chalk.red.bold("> The fees is Incorrect, enter the exact amount of fees."));
                process.exit();
            }
            console.log(chalk.greenBright(`\n> Congratulations! you have been selected in the course ${aboutStudent.selectedCourse}..\n`));
            let seeResult = await inquirer.prompt([{
                    name: "result",
                    message: chalk.yellow("Do you want to see status"),
                    type: "list",
                    choices: ["See Status", "Exit"]
                }]);
            let result = seeResult.result;
            aboutStudent.feesPaid = "Yes";
            if (result === "See Status") {
                console.log(chalk.blueBright.bold.underline("\n \t\t Viewing Status\t\t\n"));
                console.log(chalk.greenBright.bold(`> Student's name : ${aboutStudent.name}`));
                console.log(chalk.greenBright.bold(`> Student's age : ${aboutStudent.age}`));
                console.log(chalk.greenBright.bold(`> Student's RollNumber : ${rollNumberGenrating()}`));
                console.log(chalk.greenBright.bold(`> Student's course : ${aboutStudent.selectedCourse}`));
                console.log(chalk.greenBright.bold(`> Fees Paid : ${aboutStudent.feesPaid}`));
            }
        }
        StudentManagement();
    }
}
