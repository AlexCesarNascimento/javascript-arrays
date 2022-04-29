// valor por referencia
//                 0         1        2
const nomes = ['Eduardo', 'Maria', 'Joana'] // array literal
const novo = [...nomes];

novo.pop();
console.log(nomes);                 // [ 'Eduardo', 'Maria', 'Joana' ]
console.log(novo);                  // [ 'Eduardo', 'Maria' ]

// Se eu fizer uma alteração agora utilizando o operador spred, os dois vetores não refletirão um no outro.
