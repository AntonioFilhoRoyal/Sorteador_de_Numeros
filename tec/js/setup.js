const number1 = document.querySelector(".ball-1");
const number2 = document.querySelector(".ball-2");
const number3 = document.querySelector(".ball-3");
const numberResult = document.querySelector(".number-result");

const number1T = document.querySelector(".troll-1");
const number2T = document.querySelector(".troll-2");
const number3T = document.querySelector(".troll-3");
const numberResultT = document.querySelector(".number-result-troll");

const btn = document.querySelector(".btn-submit").addEventListener("click", () => {
    
    number()
    .then(respost => {
        return number1.innerHTML = rand();
    }).then(respost => {
        return number2.innerHTML = rand();
    }).then(respost => {
        return number3.innerHTML = rand();
    }).then(respost => {
        numberResult.innerHTML = `${number1.innerHTML = rand()}${number2.innerHTML = rand()}${number3.innerHTML = rand()}`;
    }).catch(e =>{
        console.log("Error");
    })
})

function rand(){
    const max = 9;
    const min = 0;
    return Math.floor(Math.random() * (max - min));
}

function temp(){
    const max = 5000;
    const min = 1000;
    return Math.floor(Math.random() * (max - min));
}

function number(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve();
        }, 1000)
    })
}


function numberT(msg, temp){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve(msg);
        }, temp)
    })
}


const btnT = document.querySelector(".btn-troll").addEventListener("click", () => {
    
    numberT(number1T.innerHTML = rand(), temp())
    .then(respost => {
        return numberT(number2T.innerHTML = rand(), temp());
    }).then(respost => {
        return numberT(number3T.innerHTML = rand(), temp());
    }).then(respost => {
        numberResultT.innerHTML = `${number1T.innerHTML = rand()}${number2T.innerHTML = rand()}${number3T.innerHTML = rand()}`;
    }).catch(e =>{
        console.log("Error");
    })
})