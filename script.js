const setOfWords = ["Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut, odio! Earum expedita, suscipit ipsa perspiciatis veritatis minima eveniet blanditiis. Atque.","Random paragraphs can be an excellent way for writers to get their creative flow going at the beginning of the day. The writer has no idea what topic the random paragraph will be about when it appears.","This forces the writer to use creativity to complete one of three common writing challenges. The writer can use the paragraph as the first one of a short story and build upon it.","A random paragraph can also be an excellent way for a writer to tackle writers' block. Writing block can often happen due to being stuck with a current project that the writer is trying to complete."];


const msg = document.getElementById('msg');
const typeWords = document.getElementById('mywords');
const btn = document.getElementById('btn');
let startTime , endTime;

const playGame = () =>{
    let randomNumber = Math.floor(Math.random()*setOfWords.length);
    msg.innerText = setOfWords[randomNumber];

    let date = new Date();
    startTime = date.getTime();
    btn.innerText = "Done";
}

const endPlay = () =>{
    let date = new Date();
    endTime = date.getTime();
    let totalTime = ((endTime - startTime)/1000);        // convert milisecond to second
    console.log(totalTime);

    let totalStr = typeWords.value;
    let wordCount = wordCounter(totalStr);

    let speed = Math.round((wordCount / totalTime)*60);
    let finalMsg = "You typed total "+speed+" words per minute. ";
    finalMsg += compareWords(msg.innerText , totalStr);

    msg.innerText = finalMsg;
}

const compareWords = (str1 , str2) =>{
    let words1 = str1.split(" ");
    let words2 = str2.split(" ");
    let cnt = 0;

    words1.forEach(function (item , index){         // forEach() method calls a function once for each element in an array, in order 
        if(item == words2[index]){
            cnt++;
        }
    })

    let errorWords = ( words2.length - cnt );
    return (cnt + " correct out of " + words1.length + "word and the total number of error are "+ errorWords + ".");
}

const wordCounter = (str) =>{
    let response = str.split(" ").length;
    console.log(response);
    return response;
}

btn.addEventListener('click' , function(){
    // console.log(this);
    if(this.innerText == 'Start'){
        typeWords.disabled = false;
        playGame();
    }
    else if(this.innerText == 'Done'){
        typeWords.disabled = true;
        btn.innerText = "Start";
        endPlay();
    }
})