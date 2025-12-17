function addNumbers() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    
    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById('result').textContent = 'Please enter valid numbers!';
    } else {
        const sum = num1 + num2;
        document.getElementById('result').textContent = 'Result: ' + sum;
    }
}

function multipleNumbers() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    
    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById('result').textContent = 'Please enter valid numbers!';
    } else {
        const sum = num1 * num2;
        document.getElementById('result').textContent = 'Result: ' + sum;
    }
}

function devideNumbers() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    
    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById('result').textContent = 'Please enter valid numbers!';
    } else if (num2 === 0) {
        document.getElementById('result').textContent = 'Cannot divide by zero!';
    } else {
        const sum = num1 / num2;
        document.getElementById('result').textContent = 'Result: ' + sum;
    }
}

function kileToMile() {
    const num = parseFloat(document.getElementById('num3').value);
    
    if (isNaN(num)) {
        document.getElementById('result2').textContent = 'Please enter a valid number!';
    } else {
        const sum = num * 0.621371;
        document.getElementById('result2').textContent = 'Result: ' + sum;
    }
}

function mileToKilo() {
    const num = parseFloat(document.getElementById('num3').value);
    
    if (isNaN(num)) {
        document.getElementById('result2').textContent = 'Please enter a valid number!';
    } else {
        const sum = num * 1.609344;
        document.getElementById('result2').textContent = 'Result: ' + sum;
    }
}