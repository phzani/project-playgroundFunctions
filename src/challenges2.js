// Desafio 11 - Crie a função generatePhoneNumber

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
