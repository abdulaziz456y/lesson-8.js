function seer (array) {
  const obj = {};
  for (const string of array) {
    const length = string.length;
    obj[length] = string;
  }
  return obj;
}

const array = ["Abdulaziz", "Safarmurad", "Orol", "Jahongir"];

const obj = seer (array);

console.log(obj);