document.addEventListener('DOMContentLoaded', () => {
    const parameterSelect = document.getElementById('parameter-select');
    const siInput = document.getElementById('si-input');
    const usInput = document.getElementById('us-input');

    const conversionFactors = {
        glucose: 18.02,
        cholesterol: 38.67,
        triglycerides: 88.57,
        bun: 2.80,
        creatinine: 11.31,
        uric_acid: 16.81,
        calcium: 4.01,
        phosphorus: 3.10
    };

    function updateConversion() {
        // Clear both fields to start fresh on parameter change
        siInput.value = '';
        usInput.value = '';
    }

    function convertSiToUs() {
        const factor = conversionFactors[parameterSelect.value];
        const siValue = parseFloat(siInput.value);
        if (!isNaN(siValue)) {
            usInput.value = (siValue * factor).toFixed(2);
        } else {
            usInput.value = '';
        }
    }

    function convertUsToSi() {
        const factor = conversionFactors[parameterSelect.value];
        const usValue = parseFloat(usInput.value);
        if (!isNaN(usValue)) {
            siInput.value = (usValue / factor).toFixed(2);
        } else {
            siInput.value = '';
        }
    }

    // Event Listeners
    parameterSelect.addEventListener('change', updateConversion);
    siInput.addEventListener('input', convertSiToUs);
    usInput.addEventListener('input', convertUsToSi);
});
