let hola = 'Hola como estas!!!';
// alert('Hola desde alert');
console.log(hola);
let number1 = 5;
let number2 = 8;
let resultado = number1 - number2;
console.log(resultado);

let nombre1 = 'Pedro'
let nombre2 = 'Roberto'
let nombre3 = 'Alfonso'
let nombre4 = 'Claudia'
console.log(nombre1+nombre2+nombre3+nombre4);

const n1 = 2;
// n1 = 3;

const nombres = ['Pedro', 'Roberto', 'Alfonso', 'Claudia'];
nombres.push('Felipe');

const separados = nombres.join('= ** =');
console.log(separados);

nombres.pop();

const persona1 = {
  nombre: 'Federico',
  edad: 21,
  altura: 1.89
}

const persona2 = {
  nombre: 'Norma',
  edad: 43,
  altura: 1.68
}

const personas = [persona1, persona2, {
  nombre: 'Nostradamus',
  edad: 158,
  altura: 1.22
}];