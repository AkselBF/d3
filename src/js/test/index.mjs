// All tests should run here

import { testAdd, testSubtract, testMultiply, testDivide } from "./math.test.mjs";
import { testUsdToEur, testEurToUsd } from "./currency.test.mjs";
import { testReverse, testCapitalize } from "./strings.test.mjs";

function testAll() {
  let allPassed = true;

  try {
    testAdd();
    testSubtract();
    testMultiply();
    testDivide();
    console.log("Math tests passed!");
  }
  catch(error) {
    console.error("Math test failed!", error.message);
    allPassed = false;
  }
  
  try {
    testUsdToEur();
    testEurToUsd();
    console.log("All currency conversion tests passed!");
  } 
  catch (error) {
    console.error("Currency conversion test failed:", error.message);
    allPassed = false;
  }
  
  try {
    testReverse();
    testCapitalize();
    console.log("All string tests passed!");
  } 
  catch (error) {
    console.error("String test failed:", error.message);
    allPassed = false;
  }

  if (allPassed) {
    console.log("All tests passed successfully!");
  } else {
    throw new Error("Some tests failed.");
  }
}

testAll();


/*
// Math functions
const sum = add(10, 5);
const difference = subtract(20, 8);
const product = multiply(4, 6);
const quotient = divide(100, 25);

console.log('Sum:', sum);
console.log('Difference:', difference);
console.log('Product:', product);
console.log('Quotient:', quotient);

// Currency functions
const usdAmount = 100;
const eurAmount = usdToEur(usdAmount);
const convertedUsdAmount = eurToUsd(eurAmount);

console.log(`EUR to USD: ${eurAmount}`);
console.log(`USD after conversion back from EUR: ${convertedUsdAmount}`);

// String functions
const reversedString = reverse('hello');
const capitalizedString = capitalize('world');

console.log('Reversed String:', reversedString);
console.log('Capitalized String:', capitalizedString);
*/
/*
console.log(add(1, 2));
console.log(usdToEur(100));
console.log(reverse('hello'));
*/