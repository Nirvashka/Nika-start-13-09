let fistNumber = Number(prompt('Ввеіть перше число'));
secondNumber = Number(prompt('Введіть друге число'));
logicalOperators = prompt('Введіть математичний оператор');
result = null;
if (logicalOperators == '+') {
  result = fistNumber + secondNumber;
  console.log(`${fistNumber}${logicalOperators}${secondNumber}=${result}`);
}
if (logicalOperators == '-') {
  result = fistNumber - secondNumber;
  console.log(`${fistNumber}${logicalOperators}${secondNumber}= ${result}`);
}
if (logicalOperators == '/') {
  if (secondNumber == 0) {
    console.log('Cannot divide by zero');
  } else {
    result = fistNumber / secondNumber;
    console.log(`Result division = ${result}`);
  }
}
if (logicalOperators == '*') {
  result = fistNumber * secondNumber;
  console.log(`Result myltiply  = ${result}`);
}