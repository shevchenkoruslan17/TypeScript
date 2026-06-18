

function arrayMinValue(numbers:number[]):number{
    let min = numbers[0];
    for (let i = 1; i < numbers.length; i++){
        let number = numbers[i];
        if(number < min){
            min = number;
        }
    }
    return min;
}
console.log(arrayMinValue([66,565.45,-12,-123]));
