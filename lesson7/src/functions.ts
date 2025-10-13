function arrSum (array: (number [] | string [])): number {
    let total = 0;
    for (const i of array)
        total += Number(i);
    return total;
}


const firstArray1 = [15, 2, 3];
const secondArray2 = ['1', '2', '4'];

console.log(arrSum(firstArray1));
console.log(arrSum(secondArray2));
