// Desafio 1
function compareTrue(a, b) {
  // seu código aqui
  if (a === true && b === true) {
    return true;
  }else{
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
  let frase = palavras[palavras.length-1] + ', ' + palavras[0];
  return frase;
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let points = (wins * 3) + (ties*1);
  return points;
}


// Desafio 6
function highestCount(valores) {
  // seu código aqui
  let ordem = valores.sort();
  let quantosIguais = [];
  
  for(let index of ordem){    
    if(index === ordem[ordem.length-1]){
      quantosIguais.push(index);
    }
  }
  return quantosIguais.length;
}





// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
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
