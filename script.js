function calculateEquivalentAge() {
    const ageInput = document.getElementById('age-input').value;
    const speciesSelect = document.getElementById('species-select');
    const resultDiv = document.getElementById('result');
    
    if (ageInput === "" || ageInput < 0 || speciesSelect.value === "") {
        resultDiv.textContent = "Por favor, ingrese una edad válida y seleccione una especie.";
        return;
    }
    
    const age = parseInt(ageInput);
    let lifeExpectancy;
    
    switch (speciesSelect.value) {
        case "Humano":
            lifeExpectancy = 80;
            break;
        case "Wookiee":
            lifeExpectancy = 400;
            break;
        case "Yoda":
            lifeExpectancy = 900;
            break;
        case "Twi'lek":
            lifeExpectancy = 85;
            break;
        case "Ewok":
            lifeExpectancy = 60;
            break;
        default:
            resultDiv.textContent = "Especie no válida.";
            return;
    }
    
    const equivalentAge = (age * lifeExpectancy) / 80;

    resultDiv.textContent = `Tu edad equivalente en años ${speciesSelect.value} es: ${equivalentAge.toFixed(2)}.`;
}