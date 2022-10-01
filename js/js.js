let a = ''; //первое число
let b = ''; //второе число
let znak = ''; //знак операции
let finish = false;

const digit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
const action = ['-', '^', '√', 'sin', 'asin', '+', 'cos', 'acos', 'tn', 'atn', '*', 'ctn', 'actn', '/', "arcsin"];
// экран
const out = document.querySelector('.disp');
// функция отчистки
function clear () {
a = '';
b = '';
znak = '';
finish = false;
out.textContent = 0;
}

document.querySelector('.function_AC').onclick = clear;

document.querySelector('.btn').onclick = (event) => {
//нажата
if(!event.target.classList.contains('btn')) return;
//не нажата
if(event.target.classList.contains('function_AC')) return;

out.textContent = '';
//нажатая кнопка
const key = event.target.textContent;
//0-9 или .
if (digit.includes(key)) {
if (b ==='' && znak === '') {
a += key;
console.log(a, b, znak);
out.textContent = a;
}
else if (a!=='' && b!=='' && finish){
b = key;
finish = false;
out.textContent = b;
}
else {
b += key
out.textContent = b;
}
console.log(a, b, znak);
return
}
if (action.includes(key)) {
znak = key;
out.textContent = znak;
console.log(a, b, znak);
return;
}
if (key === '=') {
switch (znak) {
case '+':
a = (+a) + (+b);
break;
case '-':
a = (+a) - (+b);
break;
case '*':
a = (+a) * (+b);
break;
case '/':
a = (+a) / (+b);
break;
case '%':
a = +a % +b;
break;
case '^':
a = Math.pow(+a, +b);
break;
case '√':
a = Math.sqrt(+a);
break;
case 'sin':
a = Math.sin((+a) * (Math.PI / 180));
break;
case 'arcsin':
a = Math.asin(+a);
a /= (Math.PI / 180);
break;
case 'ctn':
a = (1 / (Math.tan((+a) * (Math.PI / 180))));
break;
case 'arcctn':
a = (Math.atan(+a));
a /= (Math.PI / 180);
a = 90 - a;
break;
case 'cos':
a = Math.cos((+a) * (Math.PI / 180));
break;
case 'arccos':
a = Math.acos(+a);
a /= (Math.PI / 180);
break;
case 'tn':
a = Math.tan((+a) * (Math.PI / 180));
break;
case 'arctn':
a = Math.atan(+a);
a /= (Math.PI / 180);
break;

}
finish = true;
out.textContent = a;
console.table(a, b, znak);
}

}