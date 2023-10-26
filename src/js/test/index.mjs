// All tests should run here

import { add, subtract, multiply, divide } from "../math.mjs";
import { usdToEur, eurToUsd } from "../currency.mjs";
import { reverse, capitalize } from "../strings.mjs";

console.log(add(1, 2));
console.log(usdToEur(100));
console.log(reverse('hello'));