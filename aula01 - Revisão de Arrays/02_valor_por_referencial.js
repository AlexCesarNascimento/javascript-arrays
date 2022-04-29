// valor por referencia
//                 0         1        2
const nomes = ['Eduardo', 'Maria', 'Joana'] // array literal
const novo = nomes;

novo.pop();
console.log(nomes);        // [ 'Eduardo', 'Maria' ]
console.log(novo);         // [ 'Eduardo', 'Maria' ]

// Se eu fizer qualquer alteração em qualquer um dos dois vetores, eles refletirão um no outro.
