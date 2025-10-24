// Generar RegEx
const regex = /\s{2,}/g // new RegExp()

// Métodos
console.log(regex.test('ejemplo'))
console.log(regex.test('abc'))

console.log('ejemploejemplo'.match(regex))

console.log('ejem   plo'.replace(regex,''))
