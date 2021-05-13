const paragraph = 'I love teaching. If you do not love teaching what else can you love. I love JavaScript if you do not love something which can give life to your application what else can you love.';
const countWords = (parah, w1, w2) =>{
    parah = parah.split(".").join(" ");
    let objMap = {};
    objMap[w1] = 0;
    objMap[w2] = 0;

    parah.split(" ").map(item=>{
        if(item==w1){
            objMap[w1] += 1
        }
        if(item==w2){
            objMap[w2] += 1
        }
    })

    if(objMap[w1]>objMap[w2]) return `The word ${w1} occured more frequently than ${w2}`
    if(objMap[w1]<objMap[w2]) return `The word ${w2} occured more frequently than ${w1}`
    
    return `The word ${w1} occured at same frequency as of ${w2}`;
}
console.log(countWords(paragraph,'love', 'you'));
