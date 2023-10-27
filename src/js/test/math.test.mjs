import { add, subtract, multiply, divide } from "../math.mjs";

export function testAdd() {
  console.log('Testing add function...');
  if (add(1, 2) !== 3) {
    throw new Error('Addition test failed: 1 + 2 !== 3');
  }
  if (add(-1, 1) !== 0) {
    throw new Error('Addition test failed: -1 + 1 !== 0');
  }
}

export function testSubtract() {
  console.log('Testing subtract function...');
  if (subtract(3, 2) !== 1) {
    throw new Error('Subtraction test failed: 3 - 2 !== 1');
  }
  if (subtract(1, 3) !== -2) {
    throw new Error('Subtraction test failed: 1 - 3 !== -2');
  }
}

export function testMultiply() {
  console.log('Testing multiply function...');
  if (multiply(2, 3) !== 6) {
    throw new Error('Multiplication test failed: 2 * 3 !== 6');
  }
  if (multiply(0, 5) !== 0) {
    throw new Error('Multiplication test failed: 0 * 5 !== 0');
  }
}

export function testDivide() {
  console.log('Testing divide function...');
  if (divide(6, 3) !== 2) {
    throw new Error('Division test failed: 6 / 3 !== 2');
  }
  try {
    divide(1, 0);
    throw new Error('Division test failed: Divide by zero did not throw an error');
  } catch (error) {
    if (error.message !== 'Division by zero is not allowed.') {
      throw new Error('Division test failed: Incorrect error message for divide by zero');
    }
  }
}

/*
try {
  testAdd();
  testSubtract();
  testMultiply();
  testDivide();
  console.log('All tests passed!');
} catch (error) {
  console.error('Test failed:', error.message);
}
*/

/*
function testAdd() {
  console.log('Testing add function...');
  console.log(add(1, 2) === 3 ? 'Pass' : 'Fail');
  console.log(add(-1, 1) === 0 ? 'Pass' : 'Fail');
}

function testSubtract() {
  console.log('Testing subtract function...');
  console.log(subtract(3, 2) === 1 ? 'Pass' : 'Fail');
  console.log(subtract(1, 3) === -2 ? 'Pass' : 'Fail');
}

function testMultiply() {
  console.log('Testing multiply function...');
  console.log(multiply(2, 3) === 6 ? 'Pass' : 'Fail');
  console.log(multiply(0, 5) === 0 ? 'Pass' : 'Fail');
}

function testDivide() {
  console.log('Testing divide function...');
  try {
    console.log(divide(6, 3) === 2 ? 'Pass' : 'Fail');
    divide(1, 0);
    console.log('Fail');
  } 
  catch (error) {
    console.log(error.message === 'Division by zero is not allowed.' ? 'Pass' : 'Fail');
  }
}

testAdd();
testSubtract();
testMultiply();
testDivide();
*/