// Desafio 11 - Crie a função generatePhoneNumber
const generatePhoneNumber = (numero) => {

  if (numero[index] < 0 || numero[index] > 9 || numerosRepetidos >= 3) {
    return 'não é possível gerar um número de telefone com esses valores';
  } if(numero.lenght < 11) {
    return 'Array com tamanho incorreto';
  }
};

// Desafio 12 -  Crie a função triangleCheck

// Desafio 13 - Crie a função hydrate

/* eslint no-undef: 0 */

// Não modifique essas linhas
module.exports = {
  generatePhoneNumber: typeof generatePhoneNumber === 'function' ? generatePhoneNumber : (() => {}),
  triangleCheck: typeof triangleCheck === 'function' ? triangleCheck : (() => {}),
  hydrate: typeof hydrate === 'function' ? hydrate : (() => {}),
};
