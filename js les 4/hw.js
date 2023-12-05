// 1)Створити функцію яка отримує массив і вибирає з нього всі парні числа і розміщує в новому масиві. 
// Функція повина повертати массив з парними номерами. -->
let arrRandomNumbers = [1, 3, 5, 4, 6, 9, 8, 20, 31, 33, 10];


function doubleNumber(arr) {
  for (i = 0; i < arr.length; i++) {
    let newArr = 0;
    if (arrRandomNumbers[i] % 2 == 0) {
      newArr.push(arrRandomNumbers(i))
    }

  }
  return newArr;
}



// 2)Створити функцію яка перемножає всі значення массиву на 2 і записує їх в новий массив який повертає -->
function multipl(arr) {
  let newArr = [];
  for (i = 0; i < arr.length; i++) {
    newArr.push(arr[i] * 2)
  }
  return newArr;
}



// 3) створити функцію яка замінює в массиві =) на ;)
const smile = [':)', '=)', ':)', '=)', ':)', '=)'];

function sortSmile(smileArr) {
  let newSmieArr = [];
  for (i = 0; i < smileArr.length; i++) {
    if (smileArr[i] == '=)') {
      newSmieArr.push(';)')
    } else {
      newSmieArr.push(smileArr[i])
    }
  }
  return newSmieArr
}