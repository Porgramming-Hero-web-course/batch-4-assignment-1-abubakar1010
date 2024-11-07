const getProperty = <O, P extends keyof O>(obj: O, property: P): O[P] => obj[property];

const person = { name: "Alice", age: 30 };
console.log(getProperty(person, "name"));
