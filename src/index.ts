export const len = (x: string): number => {
    return x.length
}


// should error out
const lenFails = (x: string): boolean => {
    return x.length
}

// needs something to see in build 
console.log(len)
