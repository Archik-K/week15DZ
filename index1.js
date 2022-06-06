function plus() {
    let number1, number2; 
    number1 = document.getElementById('input_1').value;
    number1 = parseInt(number1);
    number2 = document.getElementById('input_2').value;
    number2 = parseInt(number2);
    alert(number1+number2);
    number1 = document.getElementById('input_1').value = "";
    number1 = document.getElementById('input_2').value = "";
}

function minus() {
    let number1, number2;
    number1 = document.getElementById('input_1').value;
    number1 = parseInt(number1);
    number2 = document.getElementById('input_2').value;
    number2 = parseInt(number2);
    alert(number1-number2);
    number1 = document.getElementById('input_1').value = "";
    number1 = document.getElementById('input_2').value = "";
}

function multiply() {
    let number1, number2;
    number1 = document.getElementById('input_1').value;
    number1 = parseInt(number1);
    number2 = document.getElementById('input_2').value;
    number2 = parseInt(number2);
    alert(number1*number2);
    number1 = document.getElementById('input_1').value = "";
    number1 = document.getElementById('input_2').value = "";
}

function delit() {
    let number1, number2;
    number1 = document.getElementById('input_1').value;
    number1 = parseInt(number1);
    number2 = document.getElementById('input_2').value;
    number2 = parseInt(number2);

if (number1 == "") {
    alert("На ноль делить нельзя!");
    } else if (number2 == "") {
    alert("На ноль делить нельзя!");
    } else if (number1/number2) {
    alert(number1/number2);}
    number1 = document.getElementById('input_1').value = "";
    number1 = document.getElementById('input_2').value = "";
}
