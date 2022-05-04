// Retorne a soma do dobro de todos os pares
// -> Filter pares
// -> Dobrar valores
// -> Reduzir (somar tudo)

// indices        0   1   2  3  4  5  6  7  8  9   10  11  12
// const numeros = [ 5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27 ];
// const pares = numeros.filter(valor => {
//         if(valor % 2 === 0) return valor
//     }, []);
// console.log(pares)
// const dobrar = pares.map(valor => valor * 2)
// console.log(dobrar)
// const somar = dobrar.reduce((acumular, valor) => {
//     acumular += valor;
//     return acumular;

// }, 0)

const numeros = [ 5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27 ];
const somaDobroPares = numeros.filter(valor => (valor % 2 === 0)).map(valor => valor * 2).reduce((acumular, valor) => acumular += valor);
console.log(somaDobroPares)