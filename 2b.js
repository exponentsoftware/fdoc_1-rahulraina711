let randomNums = [];



const randomFiller = () => {
    while (randomNums.length < 7){
        let randomNumber = Math.floor(Math.random()*10);
        if (!randomNums.includes(randomNumber)){
            randomNums.push(randomNumber);
        }
    }
    return randomNums;
}

console.log(randomFiller());