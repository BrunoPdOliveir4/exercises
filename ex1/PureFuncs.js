//Função Pura
function sum(a,b){
    return a+b; // sempre que você passar os mesmos valores pra a e b o resultado será o msm e não altera nenhum estado externo.
}

//Função impura
let result;
function calculate(a,b, operation){
    console.log("Avaliando operação"); //Faz chamnadas de outras fuynções dentro dela
    if(operation == "soma"){
        result = sum(a,b);
        console.log("O resultado da soma é: "+ result);
    }
    
}