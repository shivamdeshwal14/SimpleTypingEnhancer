let typedword=document.querySelector("#typed-word")
let givenword=document.querySelector("#given-word")
let message=document.querySelector("#message")
let timedisp=document.querySelector("#time")
let scoredisp=document.querySelector("#score")
let score=0
let time=5


// Array of words

const words1=['java','hello','hii','dell','city','car','boy','ball','cat','game','demo','time','you','girl','Mern','Web','Typing','Enjoying','python','study','joke','aptitude','physics','chemistry','console','network','elements','sources','javascript','developement','computer','stubborn','keyboard','establishment','increment','salary','institute','university','college'];

// event handlers
// window load
window.addEventListener('DOMContentLoaded',intial)
// intial function
function intial()
{
    dispword(words1)
   typedword.addEventListener("input",startMatch)
    setInterval(timer,1000)
    setInterval(checktime,50)
   
   
}
// Display words from array
function dispword(words1)
{
    
    const randomIndex=Math.floor(Math.random()*words1.length)
    givenword.innerHTML=words1[randomIndex]
    
}
// start matching the words
function startMatch(){
   if(matching())
   {
    dispword(words1)
    message.innerHTML='Correct Word'
    typedword.value=''
    score++
    time=6
    // time--
   }
   else{
    message.innerHTML='Incorrect Word'
   }
   scoredisp.innerHTML=score

}
// match the word
function matching()
{
    
    if(givenword.innerHTML===typedword.value)
    {
        return true
    }
    else{
        return false
    }
}
// time display
function timer()
{
    if(time>0)
    {
        time--
        timedisp.innerHTML=time
    }
    
}
function checktime()
{
    if(time===0){
        message.innerHTML='GAMEOVERRRR:('
        scoredisp.innerHTML=0
       
    }
    else{
       
    }
}