// Desafio 11 - Crie a função generatePhoneNumber
const generatePhoneNumber = (numero) => {
  if (numero.length !== 11) {
    return 'Array com tamanho incorreto.';
  }

  const numInvalido = (num, index) => num < 0 || num > 9
  || (numero.indexOf(num) !== index && numero.filter((n) => n === num).length >= 3);

  if (numero.some(numInvalido)) {
    return 'não é possível gerar um número de telefone com esses valores';
  }

  let ddd = numero.slice(0, 2).join('');
  let numero1 = numero.slice(2, 7).join('');
  let numero2 = numero.slice(7).join('');

  return `(${ddd}) ${numero1}-${numero2}`;
};
// Desafio 12 -  Crie a função triangleCheck
const triangleCheck = (lineA, lineB, lineC) => {
  let checkLine = Math.abs(lineB - lineC);
  if (lineA < (lineB + lineC) && lineA > checkLine) {
    return true;
  }
  return false;
};

// Desafio 13 - Crie a função hydrate
const hydrate = (string) => {
  let separaNumeros = /\d+/g;
  let bebidas = string.match(separaNumeros);
  let soma = 0;
  for (let index = 0; index < bebidas.length; index += 1) {
    soma += parseInt(bebidas[index], 0);
  }
  let coposDeAgua;
  if (soma === 1) {
    coposDeAgua = '1 copo de água';
  } else {
    coposDeAgua = `${soma} copos de água`;
  }
  return coposDeAgua;
};
/* eslint no-undef: 0 */

// Não modifique essas linhas
module.exports = {
  generatePhoneNumber: typeof generatePhoneNumber === 'function' ? generatePhoneNumber : (() => {}),
  triangleCheck: typeof triangleCheck === 'function' ? triangleCheck : (() => {}),
  hydrate: typeof hydrate === 'function' ? hydrate : (() => {}),
};
