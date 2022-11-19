const validateInputValues = (number1, number2) => {
    if (!number1 || !number2) {
        throw new Error('Você precisa informar os 2 valores!');
    }
    if (isNaN(number1) || isNaN(number2)) {
        throw new Error('Os valores precisam ser numéricos!');
    }
}

const sum = () => {
    const value1 = document.getElementById('value1').value;
    const value2 = document.getElementById('value2').value;
    try {
        validateInputValues(value1, value2);
        const result = Number(value1) + Number(value2);
        document.getElementById('result').innerHTML = `Resultado: ${result}`;
    } catch (error) {
        document.getElementById('result').innerHTML = `Resultado: ${error.message}`;
        console.error(error.message);
    } finally {
        document.getElementById('value1').value = '';
        document.getElementById('value2').value = '';
    }
}


window.onload = () => {
    const button = document.getElementById('button');
    button.addEventListener('click', sum);
}