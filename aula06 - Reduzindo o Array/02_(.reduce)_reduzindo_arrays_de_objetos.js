// Retorne a pessoa mais velha
const pessoas = [ 
    { nome: "Luiz", idade: 62 },            // 0
    { nome: "Maria", idade: 23 },           // 1    
    { nome: "Eduardo", idade: 55 },         // 2
    { nome: "Letícia", idade: 19 },         // 3
    { nome: "Rosana", idade: 32 },          // 4
    { nome: "Wallace", idade: 63 },         // 5
 ];

 const maisVelha = pessoas.reduce((acumulador, obj, indice) => {
     if(acumulador.idade > obj.idade) {
        return acumulador
     }
     return obj;
 })
 console.log(maisVelha)
