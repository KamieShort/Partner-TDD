
// This function should take a string and add return an new string that adds three exclamation points to the argument.
/* 

Input:

'bunny rabbit'

Output: 

'bunny rabbit!!!'

*/

export function addExclamationPoints(string) {
    const myString = string + '!!!'; 
    // return string +'!!!';
    return myString;
}

// This function should take in a number and multiply it by seven

/* 
Input:

4

Output: 

28 
*/

export function multiplyBySeven(num) {
    return (num * 7);
}

// This function should take in a number and multiply it by twelve then cut the result in half

/* 
Input:

4

Output: 

24

*/

export function multiplyByTwelveThenHalve(num) {
    return (num * 12) / 2;
}


// This function should take in three numbers, divide the first by the second, then multiply the result by the third

/* 
Input:

8, 4, 5

Output: 

10 (because 8 divided by 4 is 2, times 5 is 10)
*/
export function divideThenMultiply(num1, num2, num3) {
    return (num1 / num2) * num3;
}
// This function should take in three numbers and return those numbers in an array

/* 
Input:

8, 4, 5

Output: 

[8, 4, 5]
*/
export function returnAsAnArray(firstNumber, secondNumber, thirdNumber) {

    return [firstNumber, secondNumber, thirdNumber];
}



// This function should take in three numbers and return those numbers mushed together as a string

/* 
Input:

8, 4, 5

Output: 

'845'
*/

export function returnAsAString(firstNumber, secondNumber, thirdNumber) {
    return `${firstNumber}${secondNumber}${thirdNumber}`;
}

// This function should take in two numbers and return a greeting announcing that the sum of those numbers is today's lucky number

/* 
Input:

8, 4

Output: 

'Hello! Your lucky number for the day is 12.'
*/

export function makeLuckyGreeting(firstNumber, secondNumber) {
    return 'Hello! Your lucky number for the day is ' + (firstNumber + secondNumber) + '.';
}

// This function should take an array and return the second item in the array

/* 
Input:

['kiwi', 'apple', 'orange', 'plum']

Output: 

'apple'

*/

export function getSecondItem([item1, item2, item3, item4]) {
    return item2;
}

// This function should take an array and return the LAST item in the array, no matter the array's length

/* 
Input:

['kiwi', 'apple', 'orange', 'plum']

Output: 

'plum'

*/

export function getLastItem(array) {
    return true;
}

// Bonus question:

// This function should make a random number between 0 and 5. 

// Note that this is an impure function, so you'll have to test it without knowing exactly what it will return. 

// Ask yourself: even if you cannot predict the result exactly, what _do_ you know about what it should return? Use that expectation to write your test

export function getRandomNumber() {
    return true;
}
