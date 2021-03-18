/**
 Task1: You are porvided with 2 arrays, firstArray and secondArray
 Make a new thridArray, that contains elements of the first Array,
 followed bby elements of secondArray
 Do no do it manually
 */


let firstArray = [1, 2, 3, 4, "a", true, false];
let secondArray = ["hello", "I", "am", "not", "an", "array", "jkd"];

let thridArray = firstArray.concat(secondArray);
console.log(thridArray);

/**
 * Task 2: You are provided with an array of numbers
 * create another array that contains elements of the provided array, but in reverse order
 * do not use .reverse() method
 * Please don't do it manually :)
 */

let fourthArray = [1, 500, 10000, 123456, 234, 500, 10000, 12345, 20000];

let reversed = [];
fourthArray.forEach((nr) => {

    reversed.unshift(nr)
});

console.log(fourthArray, reversed);


/**
 * Task 3: You are provided with an array that contains some duplicated elements
 * create another array that contains ONLY unique elements of the given array
 * the order of the new array isn't important
 * Please don't do it manually :)
 */

let fifthArray = [1, 500, 10000, "world", "yeah", "bye bye", 123456, 234, 500, 10000, 12345, 20000, true, true, false, "hello", "world"];

expectedResult = [1, 500, 10000, "world", "yeah", "bye bye", 123456, 234, 12345, 20000, true, false,];

let uniqueArray = [];

fifthArray.forEach(el => {
    if (uniqueArray.indexOf(el) === -1) {
        uniqueArray.push(el)
    }
});

console.log(uniqueArray)

/**
 * Task 4: You are provided 2 arrays
 * write a logic that will compare elements of the 2 arrays to find out if they contain same elements
 * it is possible that the one of the array is a sub array of the other, in which case they shouldn't be considered as containing same elements
 * the order of elements in each array can be different
 * Please don't do it manually :)
 */

// sixthArray and seventhArray should be considered as being similar
let sixthArray = [1, 2, 3, "hello", true, false];
let seventhArray = ["hello", false, 1, 3, true, 2];

// eighthArray and ninthArray are not
let eighthArray = [1, 2, true, false, "hello", 3, "moi moi"];
let ninthArray = [];

sixthArray.forEach((el) => {
    if (seventhArray.indexOf(el) === -1) {
        console.log("Does not contain same elements")
    } else (console.log("Both arrays have same elements"))
})

sixthArray.forEach((el) => {
    if (eighthArray.indexOf(el) !== -1) {
        console.log("The elements do not have the same elements")
    }
})

/*
* Task 6: The array you are given contains all kinds of personal information
* Filter out all email addresses into a separate array
* Filter out all phone numbers into a separate array
* Please don't do it manually :)
*/

let peopleInfo = [
    "ron", "044 123 345", "lonelyspider@email.com",
    "hermione", "0123-414-443", "hermione@email.com",
    "harry", "(0123) 123 4324", "ginnyforever@email.com",
];

let expectedNamesArray = ["ron", "hermione", "harry"];
let expectedPhones = ["044 123 345", "0123-414-443", "(0123) 123 4324"];
let expectedEmails = ["lonelyspider@email.com", "hermione@email.com", "ginnyforever@gmail.com",];

let names = [];
let phones = [];
let emails = [];

names = peopleInfo.filter((el) => {
    const splitted = el.split(``); //turn el into an array of single characters
    const containNr = splitted.some((el) => !Number.isNaN(parseInt(el)));
    if (containNr) return false
    return el.indexOf(`@`) === -1
})

phones = peopleInfo.filter((el) => {
    const splitted = el.split(``);
    const containNr = splitted.some((el) => !Number.isNaN(parseInt(el)));
    if (containNr) return true
    return false
})

console.log(names);
console.log(phones)

/**
 * Task 7: The current array contains a sample text
 * use the .split(' ') method to split the paragraph to an array of words
 * iterate through the array of words, check if each word contain the letter 'o'
 * if it does, store a value of 1 to a newArray, otherwise 0
 * Please don't do it manually :)
 * Example:
 * sample = ['Lorem', 'ipsum', 'dolor', 'sit']
 * result = [1, 0, 1, 0]
 *
 */

const textSample = "Lorem ipsum dolor sit amet, consectetur adipisicing elit."

let textTask = textSample.split(``);
let result = [];
console.log(textTask)

// textTask.forEach((el) => (el.indexOf("o") === -1 ? result.push(0) : result.push(1)));
textTask.forEach((el) => {
    if (el.includes("o")) {
        result.push(0)
    } else
        (result.push(1))
}
)

console.log(result)