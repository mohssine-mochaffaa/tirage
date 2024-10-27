let btn = document.querySelector("button");
let output = document.querySelector("h2");

function getRandomNumber(min,max){
    let step1 = max - min + 1;
    let step2 = Math.random() * step1;
    let result = Math.floor(step2) + min;
    return result;
}

function createArrayOfNumbers(start,end){
    let myArray =[];

    for(let i = start; i<= end; i++){
        myArray.push(i);
    }
    return myArray;
}
let numbersArray = createArrayOfNumbers(1,40);

btn.addEventListener("click", ()=>{
    let randomIndex = getRandomNumber(0,numbersArray.length-1);
    let randomNumber = numbersArray[randomIndex];
    numbersArray.splice(randomIndex,1);
    output.innerText = randomNumber
})