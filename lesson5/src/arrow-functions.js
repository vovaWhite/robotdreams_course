const arraySumArrow = (someArray) => {
    let totalSumArrow = 0;
    for (let i = 0; i < someArray.length; i++) {
        totalSumArrow = totalSumArrow + Number(someArray[i]);
    }
    return totalSumArrow;
};

const firstArray = [1, 2, 3];
const secondArray = ['1', '2', '4'];

console.log(arraySumArrow(firstArray));
console.log(arraySumArrow(secondArray));
