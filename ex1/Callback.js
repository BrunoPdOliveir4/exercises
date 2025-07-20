function calculate(values, func){
    return func(values); // func é o callback
}

// Callback que soma os valores
function sum(values){
    return values.reduce((acc, val) => acc + val, 0);
}

const sumValues = calculate([2, 4, 6], sum);
console.log(sumValues); // 12
