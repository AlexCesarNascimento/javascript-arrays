// ind neg       -5      -4        -3         -2        -1
// ind pos        0       1         2          3         4
const nomes_ex1 = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Julia'];
const nomes_ex2 = [...nomes_ex1];
const nomes_ex3 = [...nomes_ex1];

// nomes.splice(índice, delete, elem1, elem2, ...);

const removidos_ex1 = nomes_ex1.splice(3, 0, 'Alex'); // a partir do 4º elemento, não remove nenhum elemento, adiciona no indice 3 o elemento 'Alex' 
console.log(nomes_ex1);              // [ 'Maria', 'João', 'Eduardo', 'Alex', 'Gabriel', 'Julia' ]
console.log(removidos_ex1);          // [ ]


