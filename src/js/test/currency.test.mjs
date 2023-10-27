
import { usdToEur, eurToUsd } from "../currency.mjs";

import dotenv from "dotenv";
dotenv.config();

export function testUsdToEur() {
  console.log('Testing usdToEur function...');
  const usdAmount = 100;
  const expectedEurAmount = usdAmount * parseFloat(process.env.USD_TO_EUR_EXCHANGE_RATE);
  if (usdToEur(usdAmount) !== expectedEurAmount) {
    throw new Error(`usdToEur test failed: ${usdAmount} USD to EUR conversion is incorrect`);
  }
}

export function testEurToUsd() {
  console.log('Testing eurToUsd function...');
  const eurAmount = 100;
  const expectedUsdAmount = eurAmount / parseFloat(process.env.USD_TO_EUR_EXCHANGE_RATE);
  if (eurToUsd(eurAmount) !== expectedUsdAmount) {
    throw new Error(`eurToUsd test failed: ${eurAmount} EUR to USD conversion is incorrect`);
  }
}

/*
try {
  testUsdToEur();
  testEurToUsd();
  console.log('All currency conversion tests passed!');
} catch (error) {
  console.error('Currency conversion test failed:', error.message);
}
*/

/*
import dotenv from "dotenv";
dotenv.config();

function testUsdToEur() {
  console.log('Testing USD to EUR conversion function...');
  const exchangeRate = process.env.USD_TO_EUR_EXCHANGE_RATE;

  const usdAmount = 100;
  const eurAmount = usdToEur(usdAmount);

  console.log(`${usdAmount} USD is equal to ${eurAmount} EUR`);

  if (usdToEur(100) !== 100 * exchangeRate) {
    throw new Error('USD to EUR conversion test failed: Incorrect conversion result');
  }

  if (usdToEur(0) !== 0) {
    throw new Error('USD to EUR conversion test failed: Incorrect conversion for 0 USD');
  }
}

function testEurToUsd() {
  console.log('Testing EUR to USD conversion function...');
  const exchangeRate = process.env.USD_TO_EUR_EXCHANGE_RATE;

  const eurAmount = 100;
  const usdAmount = eurToUsd(eurAmount);

  console.log(`${eurAmount} EUR is equal to ${usdAmount} USD`);

  if (eurToUsd(100) !== 100 / exchangeRate) {
    throw new Error('EUR to USD conversion test failed: Incorrect conversion result');
  }

  if (eurToUsd(0) !== 0) {
    throw new Error('EUR to USD conversion test failed: Incorrect conversion for 0 EUR');
  }
}

try {
  testUsdToEur();
  testEurToUsd();
  console.log('Currency conversion tests passed!');
} 
catch (error) {
  console.error('Currency conversion tests failed:', error.message);
}
*/