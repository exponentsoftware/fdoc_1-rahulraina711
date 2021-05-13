const checkUniqueness = (arr) => {
    for(let i=0 ; i<arr.length-1 ; i++){
        for(let j=i+1; j<arr.length;j++){
            if(arr[i]===arr[j]) return false;
        }
    }
    return true;
}

const arrOne = [1, 4, 6, 2, 1];
console.log(checkUniqueness(arrOne));

const arrTwo = [1, 4, 6, 2, 3]
console.log(checkUniqueness(arrTwo));
