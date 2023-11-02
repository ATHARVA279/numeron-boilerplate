// Iteration 2: Generate 2 random number and display it on the screen
const num1 = document.getElementById("number1")
const num2 = document.getElementById("number2")

let n1 = Math.round(Math.random()*100)
let n2 = Math.round(Math.random()*100)

num1.innerText = n1;
num2.innerText = n2;

// Iteration 3: Make the options button functional
const greater = document.getElementById("greater-than")
const lower = document.getElementById("lesser-than")
const equal = document.getElementById("equal-to")

let score = 0

greater.onclick =()=>{
    if(n1>n2){
        score++
        resetTimer(timerId)
    }
    else{
        window.location.href = "./gameover.html"
    }
    n1 = Math.round(Math.random()*100)
    n2 = Math.round(Math.random()*100)
    num1.innerText = n1;
    
    
    num2.innerText = n2;
}

lower.onclick =()=>{
    if(n1<n2){
        score++
        resetTimer(timerId)
    }

    else{
        window.location.href = "./gameover.html"
    }
    n1 = Math.round(Math.random()*100)
     n2 = Math.round(Math.random()*100)
    num1.innerText = n1;
    
    
    num2.innerText = n2;

}

equal.onclick =()=>{
    if(n1==n2){
        score++
        resetTimer(timerId)
    }

    else{
        window.location.href = "./gameover.html"
    }
     n1 = Math.round(Math.random()*100)
     n2 = Math.round(Math.random()*100)
    num1.innerText = n1;
    
    
    num2.innerText = n2;

}

// Iteration 4: Build a timer for the game
const timer = document.getElementById("timer")
var timerId;


function startTimer(){
    var time = 5;
    timer.innerHTML = time;
    timerId = setInterval(()=>{
        time = time-1
        if(time==0){
            window.location.href = "./gameover.html"
        }
        timer.innerHTML = time
    },1000)

    localStorage.setItem("scr",score)

}

function resetTimer(intervalId){
    clearInterval(intervalId)
    startTimer()
}

startTimer()