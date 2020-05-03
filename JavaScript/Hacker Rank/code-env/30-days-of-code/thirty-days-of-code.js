// 1 Day 0: Hello, World.
exports.processData = inputString => {
    // This line of code prints the first line of output
    console.log("Hello, World.");

    // Write the second line of output that prints the contents of 'inputString' here.
    console.log(inputString);
}

// 2 Day 1: Data Types

exports.dataTypes = (integer, double, String) => {
    var i = 4;
    var d = 4.0;
    var s = "HackerRank ";
    // Declare second integer, double, and String variables.
    let secondInteger = 4;
    let secondDouble = 4.0;
    let secondString = "is the best place to learn and practice coding!";
    // Read and save an integer, double, and String to your variables.
    // secondInteger = parseInt(readLine())
    // secondDouble = parseFloat(readLine())
    // secondString = readLine();
    // Print the sum of both integer variables on a new line.
    console.log(parseInt(i + parseInt(secondInteger)));

    // Print the sum of the double variables on a new line.
    console.log(parseFloat(d + parseFloat(secondDouble)).toFixed(1));
    // Concatenate and print the String variables on a new line
    // The 's' variable above should be printed first.
    console.log(s + secondString);
}

/**
 * 3 Day 2: Operators
 * Complete the solve function below.
 * @param {*} meal_cost 
 * @param {*} tip_percent 
 * @param {*} tax_percent 
 * solve(meal_cost, tip_percent, tax_percent);
 * solve(12.10, 20, 8);
 */



exports.solve = (meal_cost, tip_percent, tax_percent) => {
    let totalCost = 0;
    let tip = 0;
    let tax = 0;
    tip = (parseFloat(meal_cost) * (tip_percent / 100)).toFixed(2);
    tax = (parseFloat(meal_cost) * (tax_percent / 100)).toFixed(2);
    totalCost = parseFloat(meal_cost) + parseFloat(tip) + parseFloat(tax);
    console.log(Math.round(totalCost));

}


/**
 * 4 Day 3: Intro to Conditional Statements
 * 
 */
exports.introToConditionalStatements = (N) => {
    console.log(N)
    if (N % 2 !== 0) console.log('Weird');
    if (N % 2 === 0) {
        if (N >= 2 && N < 6) console.log('Not Weird');
        if (N >= 6 && N <= 20) console.log('Weird');
        if (N > 20) console.log('Not Weird');
    }
}

/**
 * 5 Day 4: Class vs. Instance
 */
class Person {
    constructor(initialAge) {
        if (initialAge <= 0) {
            this.age = 0;
            console.log("Age is not valid, setting age to 0.");
        } else this.age = initialAge;
    }

    amIOld() {
        // Do some computations in here and print out the correct statement to the console
        if (this.age < 13) console.log('You are young.');
        else if (this.age >= 13 && this.age < 18) console.log('You are a teenager.');
        else  console.log('You are old.');
    }
    yearPasses() {
        // Increment the age of the person in here
        this.age++
    }
}

const personAge = new Person(14);
console.log(personAge);
