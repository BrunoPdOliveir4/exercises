// Usar a imutabilidade para não alterar o valor original.
const numbers = [1, 2, 3];

// Forma imutável: cria um novo array com elemento adicionado
const newNumbers = [...numbers, 4];

console.log(numbers);       // [1, 2, 3]
console.log(newNumbers);  // [1, 2, 3, 4]
