document.addEventListener('DOMContentLoaded', () => {
    // --- General Conversions ---
    const generalInput = document.getElementById('general-input');
    const generalFromUnit = document.getElementById('general-from-unit');
    const generalToUnit = document.getElementById('general-to-unit');
    const generalResult = document.getElementById('general-result');

    const generalConversions = {
        'lbs': { 'kg': value => value / 2.20462 },
        'kg': { 'lbs': value => value * 2.20462 },
        'in': { 'cm': value => value * 2.54 },
        'cm': { 'in': value => value / 2.54 },
        'oz': { 'ml': value => value * 29.5735 },
        'ml': { 'oz': value => value / 29.5735 }
    };

    function calculateGeneral() {
        const value = parseFloat(generalInput.value);
        const fromUnit = generalFromUnit.value;
        const toUnit = generalToUnit.value;

        if (isNaN(value)) {
            generalResult.textContent = '';
            return;
        }

        const converter = generalConversions[fromUnit]?.[toUnit];
        if (converter) {
            const result = converter(value);
            generalResult.textContent = result.toFixed(2);
        } else {
            generalResult.textContent = 'Invalid conversion';
        }
    }

    generalInput.addEventListener('input', calculateGeneral);
    generalFromUnit.addEventListener('change', calculateGeneral);
    generalToUnit.addEventListener('change', calculateGeneral);

    // --- Blood Test Conversions ---
    const bloodtestInput = document.getElementById('bloodtest-input');
    const bloodtestFromUnit = document.getElementById('bloodtest-from-unit');
    const bloodtestToUnit = document.getElementById('bloodtest-to-unit');
    const bloodtestResult = document.getElementById('bloodtest-result');

    const bloodtestConversions = {
        'ng/dL': { 'nmol/L': value => value * 0.03467 },
        'nmol/L': { 'ng/dL': value => value / 0.03467 },
        'mg/dL': { 'mmol/L': value => value / 38.67 },
        'mmol/L': { 'mg/dL': value => value * 38.67 }
    };

    function calculateBloodtest() {
        const value = parseFloat(bloodtestInput.value);
        const fromUnit = bloodtestFromUnit.value;
        const toUnit = bloodtestToUnit.value;

        if (isNaN(value)) {
            bloodtestResult.textContent = '';
            return;
        }

        const converter = bloodtestConversions[fromUnit]?.[toUnit];
        if (converter) {
            const result = converter(value);
            bloodtestResult.textContent = result.toFixed(2);
        } else {
            bloodtestResult.textContent = 'Invalid conversion';
        }
    }

    bloodtestInput.addEventListener('input', calculateBloodtest);
    bloodtestFromUnit.addEventListener('change', calculateBloodtest);
    bloodtestToUnit.addEventListener('change', calculateBloodtest);

    // --- Nanoscale Conversions ---
    const nanoscaleInput = document.getElementById('nanoscale-input');
    const nanoscaleFromUnit = document.getElementById('nanoscale-from-unit');
    const nanoscaleToUnit = document.getElementById('nanoscale-to-unit');
    const nanoscaleResult = document.getElementById('nanoscale-result');

    const nanoscaleConversions = {
        'mg': { 'mcg': value => value * 1000, 'ng': value => value * 1000000 },
        'mcg': { 'mg': value => value / 1000, 'ng': value => value * 1000 },
        'ng': { 'mg': value => value / 1000000, 'mcg': value => value / 1000 },
        'ml': { 'µl': value => value * 1000 },
        'µl': { 'ml': value => value / 1000 }
    };

    function calculateNanoscale() {
        const value = parseFloat(nanoscaleInput.value);
        const fromUnit = nanoscaleFromUnit.value;
        const toUnit = nanoscaleToUnit.value;

        if (isNaN(value)) {
            nanoscaleResult.textContent = '';
            return;
        }

        const converter = nanoscaleConversions[fromUnit]?.[toUnit];
        if (converter) {
            const result = converter(value);
            nanoscaleResult.textContent = result.toFixed(2);
        } else {
            nanoscaleResult.textContent = 'Invalid conversion';
        }
    }

    nanoscaleInput.addEventListener('input', calculateNanoscale);
    nanoscaleFromUnit.addEventListener('change', calculateNanoscale);
    nanoscaleToUnit.addEventListener('change', calculateNanoscale);
});
