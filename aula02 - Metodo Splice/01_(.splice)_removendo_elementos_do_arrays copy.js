// ind neg       -5      -4        -3         -2        -1
// ind pos        0       1         2          3         4
const nomes_ex1 = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Julia'];
const nomes_ex2 = [...nomes_ex1];
const nomes_ex3 = [...nomes_ex1];

// nomes.splice(índice, delete, elem1, elem2, ...);

// Simulando o metodo .pop()

const removidos_ex1 = nomes_ex1.splice(4, 1); // a partir do 4º elemento, remove 1 elemento
console.log(nomes_ex1);              // [ 'Maria', 'João', 'Eduardo', 'Gabriel' ]
console.log(removidos_ex1);              // [ 'Julia' ]

const removidos_ex2 = nomes_ex2.splice(3, 2); // a partir do 3º elemento, remove 2 elementos
console.log(nomes_ex2);              // [ 'Maria', 'João', 'Eduardo' ]
console.log(removidos_ex2);          // [ 'Gabriel', 'Julia' ]

const removidos_ex3 = nomes_ex3.splice(-1, 1); // a partir do ultimo (-1) elemento, remove 1 elementos
console.log(nomes_ex3);              // [ 'Maria', 'João', 'Eduardo', 'Gabriel' ]
console.log(removidos_ex3);          // [ 'Julia' ]
