// Welcome to the Currency Converter!
// We have imported the 'sync-input' package for you.
// You will use this in later stages.
// This package allows you to get user input.
// Like so:
// let name = input("Type your name: ");
// let age = Number(input("Type your age: "));
const input = require('sync-input');
// Write your code here

let currencyList = {
    USD : 1.0,
    JPY : 113.5,
    EUR : 0.89,
    RUB : 74.36,
    GBP: 0.75,
};

console.log("Welcome to Currency Converter!");

for (const property in currencyList) {
    console.log(`1 USD equals ${currencyList[property]} ${property}`);
}

while (true) {
    console.log("What do you want to do?\n" +
        "1-Convert currencies 2-Exit program")
    let continueInput = input();
    if (continueInput === "2"){
        console.log("Have a nice day!")
        break;
    } else if (continueInput === "1"){

    }else {
        console.log("Unknown input");
        continue;
    }

    console.log("What do you want to convert?")

    let from = input("From: ");
    if (!Object.keys(currencyList).includes(from.toUpperCase())) {
        console.log("Unknown currency");
        continue;
    }

    let to = input("To: ");
// check unknown currency
    if (!Object.keys(currencyList).includes(to.toUpperCase())) {
        console.log("Unknown currency")
        continue;
    }
    let amount = Number(input("Amount: "));
    if (isNaN(amount)) {
        console.log("The amount has to be a number")
        continue;
    }
    if (amount < 1) {
        console.log("The amount cannot be less than 1")
        continue;
    }

    let result = (amount * currencyList[to.toUpperCase()]) / currencyList[from.toUpperCase()]
    console.log(`Result: ${amount} ${from.toUpperCase()} equals ${result.toFixed(4)} ${to.toUpperCase()}`);
}