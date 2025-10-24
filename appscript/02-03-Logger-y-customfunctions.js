/**
* Devuelve un mensaje de Hola + tu nombre
* 
* @param {String} nombre El nombre de la persona a la que saludará
* @return {String} El saludo + el nombre
* @customfunction
*/

function holaMundo(nombre) {
  Logger.log(nombre)
  return `hola ${nombre}`
}
