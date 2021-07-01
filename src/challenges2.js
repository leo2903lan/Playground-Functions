// Desafio 10
function techList(arrayTech, name) {
  // seu código aqui
  let objectNew = {};
  let arrayDosObjetos = []
  let ordem = arrayTech.sort();
  for (let indice of ordem) {
    if (arrayTech === 0) {
      console.log('Vazio');
    } else {
      objectNew['tech'] = indice;
      objectNew['name'] = name;
      arrayDosObjetos.push(objectNew);
    }
  }
  return arrayDosObjetos
}






// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};