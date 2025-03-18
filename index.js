

// STRING MANIPULATION FUNCTIONS:
                

//(1)Reverse a String:  Write a function that reverses a given string.

function stringReverse() {
  let str= "Good day everyone "
  return str.split('').reverse().join('');
}


// (2)Count Characters:Create a function that counts the number of characters in a string.

function charactersCount() {
  let str = "How are you doing today"
  return str.length;
}



//(3)Capitalize Words: Implement a function that capitalizes the first letter of each word in a sentence

function capitaliseFirstLetter(sentence) {
  var sentence = "Welcome to my world of programming";
  return sentence
    .split(" ") 
    .map((word) => {
      
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    })
    .join(" ");
}



                // ARRAY FUNCTIONS:

  // (1)Find Maximum and Minimum: Write functions to find the maximum and minimum values in an array of numbers.


const numbers = [3, 7, 2, 9, 15, 21, 8];//Given Arrray

//(1a) Function to find the maximum value in an array

function findMaximum(numbers){
  if (numbers.length === 0 || numbers.length===1) {
      alert("The array must have at least two numbers");// checking to make sure that we have at least two numbers in the array for maximum and minimum
  }
  return Math.max(...numbers);
}

//(1b) Function to find the minimum value in an array
function findMinimum(numbers) {
  if (numbers.length === 0 || numbers.length===1) {
    alert("The array must have at least two numbers");// checking to make sure that we have at least two numbers in the array for maximum and minimum
  }
  return Math.min(...numbers);
}


 //(2) Create a function that calculates the sum of all elements in an array.

// This is the given array below for the project

var age = [23, 34, 18, 45];

function sumArray() {
  var sum = 0;
  
  for (x = 0; x < age.length; x++){
    sum += age[x]

  }
  
  return sum;
   
}


// (3)Implement a function that filters out elements from an array based on a given condition

// The condition is to take out the odd numbers and leave the even numbers



function filterArray(array, condition) {
  return array.filter(condition);
}

function showFilteredNumbers() {
  let numbers = [2, 4, 6, 7, 8, 9, 10];
  let evenNumbers = filterArray(numbers, (num) => num % 2 === 0);
  alert("Result: " + evenNumbers.join(", "));
}


// MATHEMATICAL FUNCTIONS:

// (1) Factorial: Write a function to calculate the factorial of a given number.

function factorial(n) {
  if (n < 0) return "Factorial is defined for only positive numbers"
  let result = 1;
  for (let x = 2; x <= n; x++) {
    result *= x;
  }
  return result;
}


//(2)Prime Number Check: Create a function to check if a number is prime or not.

function primeNumber(number){
 
    if (number < 2) return false; // 0 and 1 are not prime numbers
    for (let x = 2; x <= Math.sqrt(number); x++) {
      if (number % x === 0 || number <2) {
        
       return (number + ' is not Prime Number')
      } else {
        return (number + ' is a Prime Number')
      }
    }
   
}

//(3)Fibonacci Sequence: Implement a function to generate the Fibonacci sequence up to a given number of terms.

function generateFibonacciSequence(n) {
  if (n <= 0) {
      return []; // Return an empty array for an input that is not positive
  }
  if (n === 1) {
      return [0]; // The first term of the  sequence
  }

  // Initialize the sequence with the first two numbers
  const FibonacciSequence= [0, 1];

  // Generate remaining terms until we reach n terms
  for (let i = 2; i < n; i++) {
      FibonacciSequence.push(FibonacciSequence[i - 1] + FibonacciSequence[i - 2]);
  }

  return FibonacciSequence;
}



