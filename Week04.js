console.log("1. Create an array called ages that includes the following values: 3,9,23,64,2,8,28,93");
let ages=[3,9,23,64,2,8,28,93];
console.log(ages);

console.log(" A. Programmatically subtract the value of the first element in the array from the value in the last element of the array.");
const age = [3,9,23,64,2,8,28,93];

const firstElement = age[0];
const lastElement = age[age.length - 1];
const result = lastElement - firstElement;

console.log(`The result of subtracting ${firstElement} from ${lastElement} is ${result}.`);

console.log ('B. Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).');
const newAge= 11;
age.push(newAge);
console.log(age);

console.log("Use a loop to iterate through the array and calculate the average age.")

let sum= 0
for (let i = 0; i < age.length; i++) {
    sum += age[i];
}

const averageAge = sum / age.length;
console.log(`The average age is: ${averageAge}`);

console.log("2. Create an array called names that contains the following values: Sam ,Tommy,Tim,Sally,Buck,Bob.");
const names=['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];
console.log(names);

console.log("A. Use a loop to iterate through the array and calculate the average number of letters per name")
let totalLetters = 0;

for (let i = 0; i < names.length; i++) {
    totalLetters += names[i].length;
}
const averageLetters = totalLetters / names.length;
console.log(`The average number of letters per name is: ${averageLetters}`);

console.log("Use a loop to iterate through the array again and concatenate all the names together, separated by spaces.")

let concatenatedNames = '';
for (let i = 0; i < names.length; i++) {
    concatenatedNames += names[i] + ' ';
}

console.log(`Concatenated names: ${concatenatedNames.trim()}`);

console.log("3. How do you access the last element of any array?");
console.log("You can access the last element of any array using it's index which is one less than the length of the array");

console.log ("4. How do you access the first element of any array?");
console.log(" You can access the first element of any array by simply using the index 0")

console.log("5. Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.");
const nameLengths = [];

for (let i = 0; i < names.length; i++) {
    nameLengths.push(names[i].length);
}

console.log(nameLengths);

console.log(" 6. Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array.");

for (let i = 0; i < nameLengths.length; i++) {
    sum += nameLengths[i];
}

console.log(`The sum of all elements in nameLengths is: ${sum}`);

console.log("7. Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e. if I pass in 'Hello' and 3, I would expect the function to return 'HelloHelloHello').");

function concatenateWord(word, n) {
    let concatenated = '';

    for (let i = 0; i < n; i++) {
        concatenated += word;
    }

    return concatenated;
}

const results = concatenateWord('Hello', 3);
console.log(results); // This will output: 'HelloHelloHello'

console.log("8. Write a function that takes two parameters, firstName and lastName, and returns a full name. The full name should be the first and the last name separated by a space.");

function getFullName(firstName, lastName) {
    const fullName = `${firstName} ${lastName}`;
    return fullName;
}

const resultss = getFullName('Salvador', 'Ayala');
console.log(resultss); // This will output: 'Salvador Ayala'

console.log("9. Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.");
function isSumGreaterThan100(numbers) {
    let sum = 0;

    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }

    return sum > 100;
}

const numbersArray = [25, 50, 30, 10, 15];
const resultsss = isSumGreaterThan100(numbersArray);
console.log(resultsss); // This will output: true

console.log("10. Write a function that takes an array of numbers and returns the average of all the elements in the array");
const NumbersArray = [10, 20, 30, 40, 50];
const differentResult = calculateAverage[numbersArray]
console.log(differentResult); // This will output: 30

console.log("11. Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.")

function compareAverage(arr1, arr2) {
    function calculateAverage(numbers) {
        if (numbers.length === 0) {
            return 0; // To handle empty array and prevent division by zero
        }

        let sum = 0;

        for (let i = 0; i < numbers.length; i++) {
            sum += numbers[i];
        }

        return sum / numbers.length;
    }

    const averageArr1 = calculateAverage(arr1);
    const averageArr2 = calculateAverage(arr2);

    return averageArr1 > averageArr2;
}

const array1 = [25, 50, 30, 10, 15];
const array2 = [10, 20, 30, 40, 50];
const result1 = compareAverage(array1, array2);
console.log(result1); // This will output: true


console.log("12. Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.");

function willBuyDrink(isHotOutside, moneyInPocket) {
    return isHotOutside && moneyInPocket > 10.50;
}

const hotDay = true;
const money = 15.00;

const result2 = willBuyDrink(hotDay, money);
console.log(result2); // This will output: true

console.log("13. Create a function of your own that solves a problem. In comments, write what the function does and why you created it.");
function willBuyBeer(isWarmOutside, cashInPocket) {
    return isHotOutside && cashInPocket > 10.50;
}

const warmDay = true;
const cash = 15.00;

const result3 = willBuyBeer(warmDay, cash);
console.log(result3); // This will output: true

console.log("This function will allow me to buy beer on a hot day. I will have 15 dollars to spend!")