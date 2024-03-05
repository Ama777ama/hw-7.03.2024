function sorrt(arr){
    arr.sort((a,b) => a - b);
    return arr;
}

let numbers = [68, 189, -23, 0, 4, 1000];
console.log(sorrt(numbers));
