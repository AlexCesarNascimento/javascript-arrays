// Para cada elemento:
// Retorne apenas uma string com o nome da pessoa
// Remova apenas a chave "nome" do objeto
// Adicione uma chave id em cada objeto

const pessoas = [ 
    { nome: "Luiz", idade: 62 },            // 0
    { nome: "Maria", idade: 23 },           // 1    
    { nome: "Eduardo", idade: 55 },         // 2
    { nome: "Letícia", idade: 19 },         // 3
    { nome: "Rosana", idade: 32 },          // 4
    { nome: "Wallace", idade: 47 },         // 5
 ];

 console.log('Retorne apenas uma string com o nome da pessoa:')
 const nomes = pessoas.map(obj => obj.nome)
 console.log(nomes)
 
// solução 1: delete um atributo do objeto
 console.log('\n\nSolução 1: Remova apenas a chave "nome" do objeto:')
 const objIdade = pessoas.map(obj => {
    const newObj = { ...obj }
        delete newObj.nome;
        return newObj;
    });
 console.log(objIdade)

//  solução 2: retorne um novo objeto
 console.log('\n\nSolução 2: Remova apenas a chave "nome" do objeto:')
 const pessoas2 = [...pessoas]
 objIdade2 = pessoas2.map(obj => ({ idade: obj.idade }));
 console.log(objIdade2)

console.log('\n\nAdicione uma chave id em cada objeto: ')
const pessoasComId = pessoas.map((obj, indice) => {
    const newObj = { ...obj }
    newObj.id = ( indice + 1 ) * 100;
    return newObj;
 });
 console.log(pessoasComId)