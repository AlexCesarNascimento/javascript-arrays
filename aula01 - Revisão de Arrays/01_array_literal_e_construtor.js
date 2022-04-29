// arrays são indexados
// index        0           1           2
const nomes = ['Eduardo', 'Maria', 'Joana'] // array literal
nomes[2] = 'João';
delete nomes[2];
console.log(nomes);

const nomes_construtor = new Array('Eduardo', 'Maria', 'Joana'); // array constructor'

