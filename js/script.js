const buttonContainer = document.querySelector ('.buttons')
const currentElement= document.querySelector('.current')
const prevElement = document.querySelector('.prev')
let currentNumber= '';
let prevNumber= '';
let sign= '';

buttonContainer.addEventListener('click', e =>{
   const type = e.target.dataset.type
   const text = e.target.textContent
   
   if(type === 'equal'){
       calculate()
   }
   else if (type === 'operate'){
       operate(text)
   }
   else if (type === 'delete'){
       deleteLn()
   }
   else if (type === 'clear'){
       clear()
   }
   else {
    if(e.target.classList.contains('buttons')) return;
       pushNumber (text); 
   }
   updateScreen()
})

function pushNumber(num) {
    currentNumber = currentNumber + num;

}
function clear() {
    currentNumber = '';
    prevNumber = '';
    sign = '';
}
function deleteLn () {
    if (currentNumber.toString().length)
    return currentNumber = currentNumber.toString().slice(0, -1);
}
function operate(text) {
    if (!currentNumber.toString().length) return sign = text
    prevNumber = currentNumber
    currentNumber = ''
    return sign = text
}
function calculate() {
    let res= 0;
    const prev = Number(prevNumber);
    const current = Number(currentNumber);
    switch(sign){
        case '+':
            res= prev + current;
            break;
        case '-':
            res= prev - current;
            break;
        case 'x':
            res= prev * current;
            break;
        case '÷':
            res= prev / current;
            break;
        case '%':
            res = (prev/100);
            break;
        case 'cos':
            res = Math.cos(current);
            break;
        case 'sin':
            res = Math.sin(current);
            break;
        case 'asin':
            res = Math.asin(current);
            break;
        case 'acos':
            res = Math.acos(current);
            break;
        case 'tan':
            res = Math.tan(current);
            break;
        case 'ctg':
            res = (1/Math.tan(current));
            break;
        case 'atan':
            res = Math.atan(current);
            break;
        case 'actg':
            res = (Math.PI/2 - Math.atan(current));
            break;
        case '^':
            res= prev ** current;
            break;
        default:
            return;
    }
    currentNumber= res;
    sign= '';
    prevNumber= '';
}
function updateScreen() {
    currentElement.textContent = currentNumber;
    if (sign){
        prevElement.textContent = `${prevNumber} ${sign} `
    }
    else {
        prevElement.textContent = ''
    }
}