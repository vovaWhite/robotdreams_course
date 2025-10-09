const arraySumArrow = (someArray) => {
    let totalSumArrow = 0;
    for (const i in someArray) {
        totalSumArrow = totalSumArrow + Number(someArray[i]);
    }
    return totalSumArrow;
};

const firstArray = [1, 2, 3];
const secondArray = ['1', '2', '4'];

console.log(arraySumArrow(firstArray));
console.log(arraySumArrow(secondArray));
