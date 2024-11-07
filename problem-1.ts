const sumArray = (array: number[]): number => {
    return array.reduce( (acc, curr) => acc+curr)
}



console.log(sumArray([1, 2, 3, 4, 5,5]));
