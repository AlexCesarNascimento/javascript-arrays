
// Filter - Sempre retorna um array com a msm quantidade de elementos que o original ou menos que o original.


// Retorne os números maiores que 10
// indices        0   1   2  3  4  5  6  7  8  9   10  11  12
const numeros = [ 5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27 ];

// Para filtrar, usamos o método .filter, mas ele não edita o array principal, temos criar um novo array com os elementos filtrados.

// vamos refatorar o código 
// const numerosFiltrados = numeros.filter((valor, indices, array) => {
//     console.log(valor, indices, array);
//     return valor > 10;
// });

const numerosFiltrados = numeros.filter(valor => valor > 10);
console.log(numerosFiltrados);




















// Retorne
