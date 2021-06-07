//Exercicios basicos

//document.getElementById("count-el").innerText = 5
//let myAge = 19;
//console.log(myAge);

// let firstBatch = 5
// let secondBatch = 7
// let count = firstBatch + secondBatch
// console.log(count);

// let humanDogRatio = 7
// let myAge = 19
// let myDogAge = humanDogRatio * myAge
// console.log(myDogAge)

// let count = 5
// count = count + 2
// console.log(count)

// let bonusPoint = 50
// bonusPoint = bonusPoint + 50
// bonusPoint = bonusPoint - 75
// bonusPoint = bonusPoint + 45

let countEl = document.getElementById('count-el');
let saveEl = document.getElementById('save-el');
let count = 0;

function increment(){
    count++;
    countEl.textContent = count;
};

function save(){
    let countStr = count + " - ";
    saveEl.innerText += countStr;
    countEl.textContent = 0;
    count = 0;
}