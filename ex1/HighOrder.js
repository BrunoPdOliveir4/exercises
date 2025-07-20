const users = [
    { name: "Ana", age: 17 },
    { name: "João", age: 21 },
    { name: "Maria", age: 16 },
    { name: "Pedro", age: 30 },
];

// High-order function que recebe um filtro e aplica nos dados
const filterUsers = (criteria) => (list) => list.filter(criteria);

// Funções de critério (que serão passadas como parâmetro)
const olderThan18 = (user) => user.age >= 18;
const newerThan18 = (user) => user.age < 18;

// Aplicação
const filterOlders = filterUsers(olderThan18);
const filteNewers = filterUsers(newerThan18);

console.log("Maiores de idade:", filterOlders(users));
console.log("Menores de idade:", filteNewers(users));
