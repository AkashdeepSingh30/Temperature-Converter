function convertTemperature() {
    const inputValue = parseFloat(document.getElementById('inputValue').value);
    const inputUnit = document.getElementById('inputUnit').value;
   
    let celsius, fahrenheit, kelvin;

    if (isNaN(inputValue)) {
        alert('Please enter a valid number');
        return;
    }

    switch(inputUnit) {
        case 'Celsius':
            celsius = inputValue;
            fahrenheit = (inputValue * 9/5) + 32;
            kelvin = inputValue + 273.15;
            break;
        case 'Fahrenheit':
            celsius = (inputValue - 32) * 5/9;
            fahrenheit = inputValue;
            kelvin = (inputValue - 32) * 5/9 + 273.15;
            break;
        case 'Kelvin':
            celsius = inputValue - 273.15;
            fahrenheit = (inputValue - 273.15) * 9/5 + 32;
            kelvin = inputValue;
            break;
    }

    document.getElementById('outputCelsius').textContent = `Celsius: ${celsius.toFixed(2)}`;
    document.getElementById('outputFahrenheit').textContent = `Fahrenheit: ${fahrenheit.toFixed(2)}`;
    document.getElementById('outputKelvin').textContent = `Kelvin: ${kelvin.toFixed(2)}`;
}