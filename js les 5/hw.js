// - Створіть функцію конструктор filmMaker  
// яка створює обєкт з ключами filmName, yearProduction, rating.створити 5 обєктів і розмістити в масиві films

let films = [];
function FilmMaker(filmName, yearProduction, rating) {
  this.filmName = filmName;
  this.yearProduction = yearProduction;
  this.rating = rating;

  return films.push([filmName, yearProduction, rating])
}

console.log(films);
FilmMaker('Бойовий майстер', 2020, 8.0);
FilmMaker('Вічна воля', 2020, 7, 1);
FilmMaker('7 насінин', 2021, 8.3);
FilmMaker('Навсікая з долини вітрів', 1984, 8.1);
FilmMaker('Принцеса Мононоке', 1997, 8.4);
console.log(films);


//   - Створіть на прототипі filmMaker  метод який виводить інформацію про фільм в console.log

FilmMaker.prototype.conclusionInfoConlog = function () {
  console.log(`Film: ${this.filmName}, year: ${this.yearProduction}, reting: ${this.rating}`);
}


// - Створити функцію яка сортує фільми за ріком випуска і повертає новий массив

function sortFilmsYear(filmsList) {
  return filmsList.slice().sort((a, b) => a[1] - b[1])

}

let sortedFilmsYear = sortFilmsYear(films)
console.log(sortedFilmsYear);

//   - Створіть новий массив з const strings = ["apple", "banana", "orange"]; в якому всі значення в верхньому регістрі
const strings = ["apple", "banana", "orange"];
let upperString = strings.map(str => str.toUpperCase());
console.log(upperString);


//     - Створіть масив рядків і використовуйте forEach,
//       щоб вивести кожен рядок в консоль після перетворення його в нижній регістр
const words = ["JavaScript", "HTML", "CSS"];
words.forEach(() => {
  console.log(words.map(str => str.toLowerCase()));
}
);

// - Створіть масив чисел.Використовуйте filter,
//   щоб відфільтрувати та залишити тільки парні числа.Потім використовуйте sort, щоб впорядкувати їх в зростаючому порядку.

const numbers = [5, 2, 8, 1, 6];


function filterArr(arr) {
  let evenNumbersArr = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 == 0) {
      evenNumbersArr.push(numbers[i])
    }
  }

  let sortEvenNumbersArr = evenNumbersArr.sort((a, b) => a - b);
  console.log(sortEvenNumbersArr);
}

let newArr = numbers.filter(filterArr);



