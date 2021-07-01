// Desafio 10
function techList(tech, name) {
  // seu código aqui
  let newTechList = [];
  for (let index of tech.sort()) {
    let objetoList = {};
    objetoList['tech'] = index;
    objetoList['name'] = name;
    newTechList.push(objetoList);
  }
  if (!newTechList.length) {//informação encontrada no site cibersitemas.pt em como saber se um array está vazio usando !array.legnt para retornar um valor boleano true, caso não tenha eleementos dentro do array.
    return 'Vazio!';
  } else {
    return newTechList;
  }
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