'Первое задание'
let num1 = Number(prompt('Введите первую цифру'))
let num2 = Number(prompt('Введите вторую цифру'))

let ubung = (num1,num2) =>{
    if (num1<num2) {
        console.log(num1);
    } else if (num1===num2){
        console.log('Равно');
    } else {
        console.log(num2);
    }
}

ubung(num1,num2)

'Второе задание'
let message = prompt('Введите слово');
function string (message){
   return console.log(message.length);
}

string(message),function calculator(num1, operator, num2) {
    let result;

    switch (operator) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
            if (num2 !== 0) {
                result = num1 / num2;
            } else {
                result = "На ноль делить нельзя";
            }
            break;
        default:
            result = "ERROR!";
    }

    return result;
}

let num1 = +prompt("Введите первое число: ");
let operator = prompt("Введите оператор (+, -, *, /): ");
let num2 = +prompt("Введите второе число: ");

let result = calculator(num1, operator, num2);
console.log(`Результат: ${result}`);