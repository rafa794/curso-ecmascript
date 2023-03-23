function* iterate(array) {
  for (let value of array) {
    yield value;
  }
}
const it = iterate(["Oscar", "Rafa", "David", "Ana", "Albaricoque"]);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
