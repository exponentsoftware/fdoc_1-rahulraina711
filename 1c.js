const sentence =  `I am a teacher and I love teaching. There is nothing as more rewarding as educating and empowering people. I found teaching more interesting than any other jobs. Does this motivate you to be a teacher?`

const countWords = (sentence) => {
    let totalWords = 0;
    sentence=sentence.split(".").join("");

    let words = sentence.split(" ");

    words.map(item=>{
        if(item.length>1) totalWords+=1;
    });

    return totalWords;
}

console.log(countWords(sentence));