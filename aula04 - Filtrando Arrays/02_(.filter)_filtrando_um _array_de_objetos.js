
// Filter - Sempre retorna um array com a msm quantidade de elementos que o original ou menos que o original.

// Retorne as pessoas que tem o nome com 5 letras ou mais
// Retorne as pessoas com mais de 50 anos
// Retorne as pessoas cujo nome termina com a letra "a"
//                                         indices      
const pessoas = [ 
    { nome: "Luiz", idade: 62 },            // 0
    { nome: "Maria", idade: 23 },           // 1    
    { nome: "Eduardo", idade: 55 },         // 2
    { nome: "Letícia", idade: 19 },         // 3
    { nome: "Rosana", idade: 32 },          // 4
    { nome: "Wallace", idade: 47 },         // 5
 ];

 console.log("Retorne as pessoas que tem o nome com 5 letras ou mais: \n");
const pessoasNome5Letras = pessoas.filter(obj => obj.nome.length >= 5);
console.log(pessoasNome5Letras);

console.log("\n\nRetorne as pessoas com mais de 50 anos:\n");
const pessoasMais50Anos = pessoas.filter(obj => obj.idade > 50);
console.log(pessoasMais50Anos);

console.log("\n\nRetorne as pessoas cujo nome termina com a letra 'a':\n");
// const pessoasNomeTerminaComA = pessoas.filter(obj => obj.nome[obj.nome.length-1] === "a");
const pessoasNomeTerminaComA = pessoas.filter(obj => obj.nome.toLowerCase().endsWith('a'));

console.log(pessoasNomeTerminaComA);




















// Retorne
