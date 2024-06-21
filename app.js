document.getElementById("btn").addEventListener("click",calSum);


function calSum() {
    let num1 = new Number(document.getElementById("number1").value);
    let num2 = new Number(document.getElementById("number2").value);
    let operator = document.getElementById("operator").value;
    let answerDisplay = document.getElementById("answer");
    switch(operator){
        case "+": answerDisplay.value = num1 + num2; break;
        case "-": answerDisplay.value = num1 - num2; break;
        case "*": answerDisplay.value = num1 * num2; break;
        case "/": answerDisplay.value = num1 / num2; break;
    }
}