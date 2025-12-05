const namesArr = ['Vova', 'Dima', 'Roma'];
const numbersArr = [1, 4, 13, 27, 11, 5, 2];
const boolArr = [true, false, true];
const anyArr = ['Vova', 15, true];

console.log('**********************************************');
console.log(namesArr.length);
console.log(boolArr[boolArr.length - 1]);

console.log('**********************************************');
numbersArr.push(333);
console.log(numbersArr);

console.log('**********************************************');
anyArr.pop();
console.log(anyArr);

console.log('**********************************************');
namesArr.shift();
console.log(namesArr);

console.log('**********************************************');
namesArr.unshift('Denys');
console.log(namesArr);

console.log('**********************************************');
namesArr.forEach(item => {
    console.log('Name:', item);
});

const numbersArr2 = [1, 4, 13, 27, 11, 5, 2];
console.log('**********************************************');
const addedArr = numbersArr2.map(number => number * 2);
console.log(addedArr);
