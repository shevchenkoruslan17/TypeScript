



const arrayMinValue=(numbers:number[]):number => {
    let min = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        let number = numbers[i];
        if (number < min) {
            min = numbers;
        }
    }
    return min;
}

console.log(arrayMinValue([99, 11, -123, 22, 33, 44]));
