// ForEach só está disponivel para arrays
const a1 = [8, 20, 15, 2, 56, 78, 9, 17, 66];

// for(let valor of a1) {
//     console.log(valor);
// }

a1.forEach((valor, indice, array) => {
    console.log(indice,": ", valor,);
});