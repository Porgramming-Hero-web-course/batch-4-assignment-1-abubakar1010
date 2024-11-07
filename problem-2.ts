const removeDuplicates = (array: number[]): number[] => {

    const result: number[] = [];

    for (let i = 0; i < array.length; i++) {        
        if(!result.includes(array[i])){
            result.push(array[i])
        }        
    }
    return  result
}

console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5,6,6,8,2,8]));
