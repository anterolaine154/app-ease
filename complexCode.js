// Filename: complexCode.js
// Description: Complex JavaScript code with multiple functions and operations

// Variable to store the result
let result = 0;

// Function to calculate the factorial of a number
function factorial(num) {
  if (num === 0 || num === 1) {
    return 1;
  } else {
    return num * factorial(num - 1);
  }
}

// Function to calculate the nth Fibonacci number
function fibonacci(num) {
  if (num <= 1) {
    return num;
  } else {
    return fibonacci(num - 1) + fibonacci(num - 2);
  }
}

// Function to calculate the sum of an array
function sumArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

// Function to reverse a string
function reverseString(str) {
  return str.split('').reverse().join('');
}

// Function to generate a random string of given length
function generateRandomString(length) {
  let randomString = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  for (let i = 0; i < length; i++) {
    randomString += characters.charAt(Math.floor(Math.random() * characters.length));
  }

  return randomString;
}

// Function to calculate the sum of squares up to a given number
function sumOfSquares(num) {
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    sum += i * i;
  }
  return sum;
}

// Perform calculations
result = factorial(5);
console.log('Factorial of 5:', result);

result = fibonacci(8);
console.log('8th Fibonacci number:', result);

const numbers = [1, 2, 3, 4, 5];
result = sumArray(numbers);
console.log('Sum of array:', result);

const str = 'Hello, World!';
const reversedStr = reverseString(str);
console.log('Reversed string:', reversedStr);

const randomStr = generateRandomString(10);
console.log('Random string:', randomStr);

result = sumOfSquares(5);
console.log('Sum of squares up to 5:', result);

// ... continue with more complex code ...