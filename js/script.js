let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');
let screenVal = '';
for (item of buttons) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        if (buttonText == 'C') {
            screenVal = '';
            screen.value = screenVal;
        }
        else if(buttonText == '='){
            screenVal = eval(screenVal);
            screen.value = screenVal;
        }
        else{
            screenVal += buttonText;
            screen.value = screenVal;
        }
    })
}

const calculator = () => {
    let operator = document.getElementById('operator').value; 
    let num1 = parseFloat(document.getElementById('num1').value); 
    let num2 = parseFloat(document.getElementById('num2').value); 
    switch (operator) {
        case "+":
            document.getElementById('result').value = num1+num2;
            break;
        case "-":
            document.getElementById('result').value = num1-num2;
            break;
        case "*":
            document.getElementById('result').value = num1*num2;
            break;
        case "/":
            document.getElementById('result').value = num1/num2;
            break;
        case "C":
            document.getElementById('clear').value = '';
            break;
        default:
            document.getElementById('clear').value = 0;
            break;
    }
}