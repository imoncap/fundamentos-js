// Conversão de tipos


// Conversão implícita
const numero = 456;
const numeroString = '456';

console.log(numero == numeroString); //true
console.log(numero === numeroString); //false

console.log(numero + Number(numeroString));