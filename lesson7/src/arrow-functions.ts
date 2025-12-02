const arraySumArrow = (someArray: (number[] | string[])): number => {
    let totalSumArrow = 0;
    for (const i of someArray) {
        totalSumArrow = totalSumArrow + Number(i);
    }
    return totalSumArrow;
};

const firstArray = [15, 2, 3];
const secondArray = ['1', '2', '4'];

console.log(arraySumArrow(firstArray));
console.log(arraySumArrow(secondArray));
