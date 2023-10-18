let frut = prompt('Vvedit nazvy frykta:');
console.log(frut);
let vegetable = prompt('Vvedit nazvy ovocha:');
console.log(vegetable);
let frutPrice = Number(prompt('Vvedit ciny ' + frut));
console.log(frutPrice);
let vegetablePrice = Number(prompt('Vvedit ciny ' + vegetable));
console.log(vegetablePrice);
let frutQuantity = Number(prompt('Vvedit kilkit, kg ' + frut));
console.log(frutQuantity);
let vegetableQuantity = Number(prompt('Vvedit kilkist, kg ' + vegetable));
console.log(vegetableQuantity);

alert(frut + ' itogo ' + frutPrice * frutQuantity + ' grn!');
alert(vegetable + ' itogo ' + vegetablePrice * vegetableQuantity + ' grn!');

let zagFryt = frutPrice * frutQuantity;
let zagVegetable = vegetablePrice * vegetableQuantity;
let sum = zagFryt + zagVegetable;
console.log('Zag sum ' + sum);
let discount = 5;
let discountSum = sum / 100 * discount;
alert('Znuszhka vid zagalnoi symu: ' + discountSum);
alert('Do splatu: ' + (sum - discountSum));

let takeNumber = 40 / 2;
let surveyMenis = 47 - 6;
let summaLater = 45 + 68;
let showMnozch = 55 * 66;
console.log(takeNumber, surveyMenis, summaLater, showMnozch);

