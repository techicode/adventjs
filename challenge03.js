const isValid = (letter) => {

  // contador para ver si existe el mismo numero de ( y de )
  let counter = 0;

  // for in para poder acceder al siguiente elemento
  for (const key in letter) {
    if (letter[key] === '(' || letter[key] === ")") {
      counter++;

      // segundo argumento de includes es desde donde empieza a comprobar
      if (letter[key] === '(' && !letter.includes(")", key))
        return false;

      // si el caracter siguiente es un ), significa que el parentesis esta vacio
      if (letter[Number.parseInt(key) + 1] === ")") {
        return false;
      }
    }

    // dentro del recorrido, estos caracteres estan prohibidos por ende returna falso
    if (letter[key] === '[' || letter[key] === '{') {
      return false;
    }
  }

  // si el contador devuelve numero impar es que hay un paretensis sin cerrar o abrir
  if (counter % 2 !== 0) {
    return false;
  }
  return true;
}

console.log(isValid("bici coche (balón) bici coche peluche"));
console.log(isValid("(muñeca) consola bici"));

console.log(isValid(`bici coche (balón bici coche`));
console.log(isValid("() bici"))
console.log(isValid("(peluche {) bici"))
console.log(isValid(")bici( casa play"))

