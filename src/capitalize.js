export function capitalize(string) {
  if (string.length === 0) {
    return "invalid string";
  }
  let newString = "";
  let foundFirst = false;
  for (let i = 0; i < string.length; i++) {
    if (!foundFirst && string[i].toLowerCase() != string[i].toUpperCase()) {
      newString += string[i].toUpperCase();
      foundFirst = true;
    } else {
      newString += string[i];
    }
  }
  return newString;
}
