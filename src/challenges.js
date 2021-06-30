// Desafio 1
function compareTrue(a, b) {
  // seu código aqui
  if (a === true && b === true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, altura) {
  // seu código aqui
  return (base * altura) / 2;
}

// Desafio 3
function splitSentence(frase) {
  // seu código aqui
  let palavras = frase.split(' ');
  return palavras;
}

// Desafio 4
function concatName(palavras) {
  // seu código aqui
  let frase = palavras[palavras.length - 1] + ', ' + palavras[0];
  return frase;
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let points = wins * 3 + ties * 1;
  return points;
}

// Desafio 6
function highestCount(valores) {
  // seu código aqui

  let ordem = valores.sort((a, b) => a - b);
  let quantosIguais = [];

  for (let index of ordem) {
    if (index === ordem[ordem.length - 1]) {
      quantosIguais.push(index);
    }
  }
  return quantosIguais.length;
}



// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  if ((mouse - cat1) === (mouse - cat2)) {
    console.log('os gatos trombam e o rato foge');
  } else if ((mouse - cat1) > (mouse - cat2)) {
    console.log('cat1');
  } else {
    console.log('cat2');
  }
}
catAndMouse(10, 6, 12)



// Desafio 8
function fizzBuzz(numeros) {
  // seu código aqui
  let buzzFizz = [];
  for (let index of numeros) {
    if (index % 3 === 0 && index % 5 === 0) {
      index = 'fizzBuzz';
      buzzFizz.push(index);
    } else if (index % 5 === 0) {
      index = 'buzz';
      buzzFizz.push(index);
    } else if (index % 3 === 0) {
      index = 'fizz';
      buzzFizz.push(index);
    } else {
      index = 'bug!';
      buzzFizz.push(index);

    }
  }

   return buzzFizz;
}





// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
