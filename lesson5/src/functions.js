function arrSum (array) {
    let total = 0;
    for (let i = 0; i < array.length; i++) {
        total = total + Number(array[i]);
    }
    return total;
}


const firstArray = [1, 2, 3];
const secondArray = ['1', '2', '4'];

console.log(arrSum(firstArray));
console.log(arrSum(secondArray));


// function arraySumForEach (ar) {
//     let total = 0;
//     ar.forEach(element2 => {
//         total = total + element2;
//     });
//     return total;
// }

// const secondArr = [2, 3, 4, 5, 6, 10];
// console.log(arraySumForEach(secondArr));


// console.log(arraySumArrow(firstArray));
