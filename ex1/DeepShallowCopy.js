// Objeto original com estrutura aninhada
const original = {
    name: "John",
    address: {
        state: "Bahia",
        city: "Chique chique"
    }
};

console.log(original);

// ----- Cópia Rasa (Shallow Copy) -----
const shallowCopy = { ...original };

// Alterando uma propriedade aninhada na cópia rasa
shallowCopy.address.city = "canavial 2";

console.log("Original.city:", original.address.city); // Afetado: "canavial 2"
console.log("ShallowCopy.city:", shallowCopy.address.city); // "canavial 2"

// ----- Cópia Profunda (Deep Copy) -----

// Método 1: Usando structuredClone (moderno, suportado em navegadores e Node.js recentes)
const deepCopy1 = structuredClone(original);

// Método 2: Usando JSON (mais simples, mas limitado)
const deepCopy2 = JSON.parse(JSON.stringify(original));

// Modificando as cópias profundas
deepCopy1.address.city = "Canavial 1";
deepCopy2.address.city = "Canavial 3";

console.log("Original.city:", original.address.city);   // Inalterado: "canavial 2"
console.log("DeepCopy1.city:", deepCopy1.address.city); // "Canavial 1"
console.log("DeepCopy2.city:", deepCopy2.address.city); // "Canavial 3"
