# The significance of union and intersection types in Typescript.
In TypeScript, one of the powerful features that allow us to create complex types are **union** and **intersection types**.that allow us to create flexible, expressive types for more robust and maintainable code. Understanding these types and knowing when to use each can significantly enhance how we work with TypeScript. This article will delve into the practical use of these advanced types, with examples that you can try out in the <a href="https://www.typescriptlang.org/play/" target="_blank">TypeScript Playground</a>

---

## What You Will Learn
	How union (|) and intersection (&) types work and when to use them
	Practical examples where we combine multiple interfaces or types 
	Understanding how TypeScript ensures type safety

## Prerequisites
	Have a basic understanding of JavaScript and TypeScript.
	Familiar with basic TypeScript features like types, interfaces, and type aliase

---

## Union Types

Union types are used when a value can be one of several types. It's highly useful in scenarios where we want to allow multiple possible types for a value. By using the `|` operator, you create a type that represents **either of two (or more) types**. 

## Syntax:
`type score = number | number[];`

In the following example, the variable score is allowed to be either a number or an array of number. The variable can hold one of the specified types, not multiple at the same time. A union type uses the** | ** operator to combine multiple types. The types in the union can be primitive types, objects, or even complex types.


## Example
Function  that can return either a string or number depending on a condition or parameter.

```
{interface User{
    name: string;
    email: string
    verified: boolean
}

type Message = string

type Data = User | Message


const getData = (user: User): Data  => {
    if(user.verified) {
	return user;
	}
    return "your account is currently unverified"
}


console.log(getData({name: "user", email: "user@example.com", verified: false}));
}
```

In this example, the getData function returns either an object or a string, depending on the argument passed. The return type is defined as union, allowing the flexibility to return multiple types.


## Intersection Types

An intersection type combines multiple types into one. A variable with an intersection type must satisfy all the types in the intersection. It is defined using the & operator. 

## Syntax:

`type SuperAdmin = User & Admin;`

A variable of type SuperAdmin  must have both User and Admin properties. the SuperAdmin type is an intersection of User and Admin

## Example
In the following example, we define two interfaces, X and Y, and then create an intersection type Z that combines both X and Y. A variable of type X must have all properties of X and Y.

```
interface X{
    name: string;
    email: string
}

interface Y{
    subject: string;
    score: number
}

type Z = X & Y;

const student: Z = {
    name: "user",
    email: "user@example.com",
    subject: "Math",
    score: 90
}
```

In this example, the Z type is an intersection of X and Z, so the student object must contain properties from both X and Y—namely, name (a string), email (a string), subject (a string), and score (a number).

## Use Cases for Union and Intersection Types

###### Union Type
- Union types are useful when a variable can hold values of different types. 
-  Union types make API functions more flexible by allowing parameters or return types to accept more than one possible type
- Union type is often used for handling optional data or when multiple types are valid.

###### Intersection Type
- An intersection type is used when you want a variable to be a combination of multiple types. It requires the value to satisfy all conditions and properties of the intersected types.
- Example: Combining properties from multiple interfaces to define a more specific object.

### Conclusion

Union and intersection types are fundamental features of TypeScript that help you create more flexible, type-safe, and maintainable code. Probably, this article didn’t cover everything about union and intersection types in TypeScript, but I hope it has explained them in a simple way. You can start <a href="https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#union-types" target="_blank">here</a> to learn more.

