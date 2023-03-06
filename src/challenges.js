// Desafio 1 - Crie a função compareTrue
const compareTrue = (valor1, valor2) => (!!(valor1 && valor2 === true));
// Desafio 2 - Crie a função splitSentence
let resultado = '';
const splitSentence = (frase) => {
  resultado = frase.split(' ');
  return resultado;
};
// Desafio 3 - Crie a função concatName

const concatName = (nome) => {
  let primeiroNome = nome[0];
  let segundoNome = nome.slice(-1);
  return `${segundoNome}, ${primeiroNome}`;
};
// Desafio 4 - Crie a função footballPoints
let somaPontos = 0;
let pontosVitoria = 3;
let pontosEmpate = 1;
const footballPoints = (wins, ties) => {
  somaPontos = wins * pontosVitoria;
  somaPontos += ties * pontosEmpate;
  return somaPontos;
};
// Desafio 5 - Crie a função highestCount
const highestCount = (array) => {
  let numero = Math.max(...array);
  let count = 0;
  for (let index = 0; index < array.length; index += 1) {
    if (numero === array[index]) {
      count += 1;
    }
  }
  return count;
};
// Desafio 6 - Crie as funções calcTriangleArea, calcRectangleArea e calcAllAreas

const calcTriangleArea = (base, altura) => {
  const areaTriangulo = (base * altura) / 2;
  return areaTriangulo;
};
const calcRectangleArea = (base, altura) => {
  const areaRetangulo = (base * altura);
  return areaRetangulo;
};
const calcAllAreas = (base, altura, forma) => {
  let area = 0;
  if (forma === 'triângulo') {
    area = (base * altura) / 2;
    return `O valor da área do triângulo é de: ${area}`;
  } if (forma === 'retângulo') {
    area = (base * altura);
    return `O valor da área do retângulo é de: ${area}`;
  }
  return 'Não foi possível fazer o cálculo, insira uma forma geométrica válida';
};
// Desafio 7 - Crie a função catAndMouse
const catAndMouse = (mouse, cat1, cat2) => {
  let distanciaCat1 = Math.abs(mouse - cat1);
  let distanciaCat2 = Math.abs(mouse - cat2);
  if (distanciaCat1 < distanciaCat2) {
    return 'cat1';
  } if (distanciaCat1 > distanciaCat2) {
    return 'cat2';
  }
  return 'os gatos trombam e o rato foge';
};
// Desafio 8 - Crie a função fizzBuzz

const fizzBuzz = (array) => array.map((numero) => {
  if (numero % 3 === 0 && numero % 5 === 0) {
    return 'fizzBuzz';
  } if (numero % 3 === 0) {
    return 'fizz';
  } if (numero % 5 === 0) {
    return 'buzz';
  }
  return 'bug!';
});

// Desafio 9 - Crie a função encode e a função decode
const encode = (frase) => {
  let fraseE = frase.replaceAll('a', 1).replaceAll('e', 2).replaceAll('i', 3).replaceAll('o', 4)
    .replaceAll('u', 5);
  return fraseE;
};
const decode = (frase) => {
  let fraseD = frase.replaceAll(1, 'a').replaceAll(2, 'e').replaceAll(3, 'i').replaceAll(4, 'o')
    .replaceAll(5, 'u');
  return fraseD;
};
// Desafio 10 - Crie a função techList
const techList = (array, nome) => {
  if (array.length === 0) {
    return [];
  }
  let arrayTech = [];
  array.sort();
  for (let index = 0; index < array.length; index += 1) {
    arrayTech.push({
      tech: array[index],
      name: nome,
    });
  }
  return arrayTech;
};

// Não modifique essas linhas
module.exports = {
  calcTriangleArea: typeof calcTriangleArea === 'function' ? calcTriangleArea : (() => {}),
  calcRectangleArea: typeof calcRectangleArea === 'function' ? calcRectangleArea : (() => {}),
  calcAllAreas: typeof calcAllAreas === 'function' ? calcAllAreas : (() => {}),
  catAndMouse: typeof catAndMouse === 'function' ? catAndMouse : (() => {}),
  compareTrue: typeof compareTrue === 'function' ? compareTrue : (() => {}),
  concatName: typeof concatName === 'function' ? concatName : (() => {}),
  decode: typeof decode === 'function' ? decode : (() => {}),
  encode: typeof encode === 'function' ? encode : (() => {}),
  fizzBuzz: typeof fizzBuzz === 'function' ? fizzBuzz : (() => {}),
  footballPoints: typeof footballPoints === 'function' ? footballPoints : (() => {}),
  highestCount: typeof highestCount === 'function' ? highestCount : (() => {}),
  splitSentence: typeof splitSentence === 'function' ? splitSentence : (() => {}),
  techList: typeof techList === 'function' ? techList : (() => {}),
};
