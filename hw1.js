function getPositiveNumbers(arr){
    let posNumbers = arr.filter(num => num > 0);
    return posNumbers;
}

let nums = [-1, -2, 0, 4, -23, 45];
console.log(getPositiveNumbers(nums));