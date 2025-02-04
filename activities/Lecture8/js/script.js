let date = new Date();
let hours = date.getHours();

let welcomeMessage;

if (hours < 12) {
    welcomeMessage = "Good Morning!";
}
else if (hours < 17) {
    welcomeMessage = "Good Afternoon";
}
else if (hours < 19) {
    welcomeMessage = "Good Evening";
}
else {
    welcomeMessage = "Good Night";
}

document.getElementById('greeting').innerHTML = '<strong>' + welcomeMessage + '</strong>';

let a, b;

function getNumbers() {
    a = Number(document.getElementById('number1').value);
    b = Number(document.getElementById('number2').value);
}

function addition() {
    getNumbers();
    let result = a + b;
    alert('The sum of ' + a + ' and ' + b + ' equals ' + result);
}

//new functions

function subtraction() {
    getNumbers();
    let result = a - b;
    alert('The difference between ' + a + ' and ' + b + ' is ' + result);
}

function multiplication() {
    getNumbers();
    let result = a * b;
    alert('The product of ' + a + ' and ' + b + ' equals ' + result);
}

function division() {
    getNumbers();
    if (b === 0) {
        alert('Error: Division by zero is not allowed.');
    } else {
        let result = a / b;
        alert('The quotient of ' + a + ' divided by ' + b + ' equals ' + result);
    }
}
