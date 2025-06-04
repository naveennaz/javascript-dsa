export const plusOne = (digits: number[]): number[] => {
    let addedNumber : number = digits.reduce((acc, each)=>{
        return acc*10 + each
    }, 0) + 1
    
    let newArray : number [] = []
    while(addedNumber > 0){
        newArray.unshift(addedNumber%10)
        addedNumber = Math.floor(addedNumber/10)
    }
    return newArray
};


