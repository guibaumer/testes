const ss = require('simple-statistics');

let notas = [3,3,2,4,4,3,2,2,3,3,3,4,2,3,3,3,3,4,4,3,2,3,3,3,2,4,4,4,3,2,2];

let media = ss.mean(notas);
let moda = ss.mode(notas);
let mediana = ss.median(notas);
let amplitude = ss.max(notas) - ss.min(notas);
let variancia = ss.variance(notas);
let desvio_padrao = ss.standardDeviation(notas);

const desvios = notas.map(nota => Math.abs(nota - media));
const desvio_medio = desvios.reduce((a,b) => a + b) / desvios.length;

console.log(`Média: ${media}`);
console.log(`Moda: ${moda}`);
console.log(`Mediana: ${mediana}`);
console.log(`Amplitude: ${amplitude}`);
console.log(`Desvio Médio: ${desvio_medio}`);
console.log(`Variância: ${variancia}`);
console.log(`Desvio Padrão: ${desvio_padrao}`);

