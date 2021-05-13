const sentence =  `I am a teacher and I love teaching. There is nothing as more rewarding as educating and empowering people. I found teaching more interesting than any other jobs. Does this motivate you to be a teacher?`

const varietyOfWords = (sentence) =>{
    let objMap ={};
    sentence = sentence.split(".").join("").split("");
    sentence.splice(sentence.length-1, 1);
    sentence = sentence.join("");
    
    sentence.split(" ").map(item=> {
        if(objMap[item]){
            objMap[item] += 1
        }
        else{
            objMap[item] = 0;
            objMap[item] += 1;
        }
    })

    return Object.keys(objMap).length;
}

console.log(varietyOfWords(sentence));