document.getElementById("btn").addEventListener("click",calSum);


function calSum() {
    let num1 = new Number(document.getElementById("number1").value);
    let num2 = new Number(document.getElementById("number2").value);
    let operator = document.getElementById("operator").value;
    let answerLabel = document.getElementById("answer");
    switch(operator){
        case "+": answerLabel.innerHTML = num1 + num2; break;
        case "-": answerLabel.innerHTML = num1 - num2; break;
        case "*": answerLabel.innerHTML = num1 * num2; break;
        case "/": answerLabel.innerHTML = num1 / num2; break;
        default : alert("Invalid Operator");
    }
}