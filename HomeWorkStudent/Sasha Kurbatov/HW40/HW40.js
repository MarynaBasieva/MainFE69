
let buttonPlus = document.getElementById("buttonPlus");
let buttonMinus = document.getElementById("buttonMinus");
let buttonMultiply = document.getElementById("buttonMultiply");
let buttonDevide = document.getElementById("buttonDevide");
let buttonParsent = document.getElementById("buttonParsent");
let result2 = document.getElementById("result");

let input1 = document.getElementById('number1');
let input2 = document.getElementById('number2');

function getNumber1() {
    return Number(input1.value);
}
function getNumber2() {
    return Number(input2.value);
}

function makeOperation(operationCode) {
    let result;
    if (operationCode === '+') {
        result = getNumber1() + getNumber2();
    } else if (operationCode === '-') {
        result = getNumber1() - getNumber2();
    } else if (operationCode === '*') {
        result = getNumber1() * getNumber2();
    } else if (operationCode === '/') {
        result = getNumber1() / getNumber2();
    } else if (operationCode === '%') {
        result = getNumber1() % getNumber2();
    } else {
        console.log('NO! NO! NO!')
    }
    result2.innerHTML +=result + '';
}
function buttonClickPlus(){
    makeOperation('+');
}
function buttonClickMinus(){
    makeOperation('-');
}
function buttonClickMultiply(){
    makeOperation('*');
}
function buttonClickDevide(){
    makeOperation('/');
}
function buttonClickParsent(){
    makeOperation('%');
}


buttonPlus.addEventListener('click',buttonClickPlus);
buttonMinus.addEventListener('click',buttonClickMinus);
buttonMultiply.addEventListener('click',buttonClickMultiply);
buttonDevide.addEventListener('click',buttonClickDevide);
buttonParsent.addEventListener('click',buttonClickParsent);





let list = document.querySelector('.parent');
    let array = ['somtin1','somting2','somting3','somting4','somting5'];
        for(let i=0; i<=5; i++){
            let li = document.createElement('li');
            li.innerHTML=array[i];
            list.appendChild(li);
        }

        let newList = document.querySelector('.parent li:nth-child(4)');
        newList.remove();