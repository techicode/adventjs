const isValid = (letter) => {
  let counter = 0;
  for (const key in letter) {
    if (letter[key] === '(' || letter[key] === ")") {
      counter++;
      if (letter[key] === '(' && !letter.includes(")", key))
        return false;
      if (letter[Number.parseInt(key) + 1] === ")") {
        return false;
      }
    }
    if (letter[key] === '[' || letter[key] === '{') {
      return false;
    }
  }
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

