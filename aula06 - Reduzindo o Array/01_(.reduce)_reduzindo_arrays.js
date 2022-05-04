// Some todos os números (reduce)
// Retorne um array com os pares (filter)
// Retorne um array com o dobro dos valores (map)

    // Estrutura do REDUCE    
    // .reduce((acumulador, valor, indice, array) => {
    //     ...
    // }, valorInicial);

// indices        0   1   2  3  4  5  6  7  8  9   10  11  12
const numeros = [ 5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27 ];

console.log("Some todos os números (reduce):")
const total = numeros.reduce((acumulador, valor) => {
    acumulador += valor
    return acumulador;
}, 0);
console.log(total)

// Conseguimos utilizar o reduce neste caso, mas o ideal seria utilizar FILTER
console.log("\nRetorne um array com os pares (filter): ")
const pares = numeros.reduce((acumulador, valor) => {
    if(valor%2 === 0) acumulador.push(valor)
    return acumulador;
}, []);
console.log(pares)

// Conseguimos utilizar o reduce neste caso, mas o ideal seria utilizar MAP
console.log("\nRetorne um array com o dobro dos valores (map): ")
const dobro = numeros.reduce((acumulador, valor) => {
    acumulador.push(valor * 2);
    return acumulador;
}, [])
console.log(dobro)