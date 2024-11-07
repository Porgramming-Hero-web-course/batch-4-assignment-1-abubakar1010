const validateKeys = <T extends object>(obj: T, keys: (keyof T)[]): boolean => keys.every((key) => key in obj);

const user = { name: "Alice", age: 25, email: "alice@example.com" };
console.log(validateKeys(user, ["name", "age"]));
