function calculateBmi() {
    let height = document.getElementById('height').value;
    let weight = document.getElementById('weight').value;

    if(height === '' || weight === '') {
        alert('Wprowadź dane do formularza!');
        return;
    }
    
    let heightAsMeter = height / 100.0;

    let bmi = Math.round(weight/(heightAsMeter * heightAsMeter));

    document.getElementById('category').innerHTML = 'Kategoria: ';
    document.getElementById('risk-of-disease').innerHTML = 'Ryzyko wystąpienia chórb towarzyszących otyłości: ';

    if(bmi<16.0) {
        document.getElementById('bmi').style.color = '#0000b3';
        document.getElementById('bmi').innerHTML = bmi;
        document.getElementById('category-bmi').style.color = '#0000b3';
        document.getElementById('category-bmi').innerHTML = 'wygłodzenie';
        document.getElementById('risk-of-disease-bmi').style.color = '#66ff66';
        document.getElementById('risk-of-disease-bmi').innerHTML = 'minimalne';
    }
    else if(bmi>=16.0 && bmi<16.99) {
        document.getElementById('bmi').style.color = '#0066ff';
        document.getElementById('bmi').innerHTML = bmi;
        document.getElementById('category-bmi').style.color = '#0066ff';
        document.getElementById('category-bmi').innerHTML = 'wychudzenie';
        document.getElementById('risk-of-disease-bmi').style.color = '#66ff66';
        document.getElementById('risk-of-disease-bmi').innerHTML = 'minimalne';
    }
    else if(bmi>=17.0 && bmi<18.49) {
        document.getElementById('bmi').style.color = '#99ff99';
        document.getElementById('bmi').innerHTML = bmi;
        document.getElementById('category-bmi').style.color = '#99ff99';
        document.getElementById('category-bmi').innerHTML = 'niedowaga';
        document.getElementById('risk-of-disease-bmi').style.color = '#66ff66';
        document.getElementById('risk-of-disease-bmi').innerHTML = 'minimalne';
    }
    else if(bmi>=18.5 && bmi<24.99) {
        document.getElementById('bmi').style.color = '#33ff33';
        document.getElementById('bmi').innerHTML = bmi;
        document.getElementById('category-bmi').style.color = '#33ff33';
        document.getElementById('category-bmi').innerHTML = 'optimum';
        document.getElementById('risk-of-disease-bmi').style.color = '#66ff66';
        document.getElementById('risk-of-disease-bmi').innerHTML = 'minimalne';
    }
    else if(bmi>=25.0 && bmi<29.99) {
        document.getElementById('bmi').style.color = '#ffff80';
        document.getElementById('bmi').innerHTML = bmi;
        document.getElementById('category-bmi').style.color = '#ffff80';
        document.getElementById('category-bmi').innerHTML = 'nadwaga';
        document.getElementById('risk-of-disease-bmi').style.color = '#ffff1a';
        document.getElementById('risk-of-disease-bmi').innerHTML = 'średnie';
    }
    else if(bmi>=30.0 && bmi<34.99) {
        document.getElementById('bmi').style.color = '#ffdb4d';
        document.getElementById('bmi').innerHTML = bmi;
        document.getElementById('category-bmi').style.color = '#ffdb4d';
        document.getElementById('category-bmi').innerHTML = 'otyłość I stopnia';
        document.getElementById('risk-of-disease-bmi').style.color = '#b37700';
        document.getElementById('risk-of-disease-bmi').innerHTML = 'wysokie';
    }
    else if(bmi>=35.0 && bmi<39.99) {
        document.getElementById('bmi').style.color = '#ff1a1a';
        document.getElementById('bmi').innerHTML = bmi;
        document.getElementById('category-bmi').style.color = '#ff1a1a';
        document.getElementById('category-bmi').innerHTML = 'otyłość II stopnia';
        document.getElementById('risk-of-disease-bmi').style.color = '#ff1a1a';
        document.getElementById('risk-of-disease-bmi').innerHTML = 'bardzo wysokie';
    }
    else if(bmi>=40.0) {
        document.getElementById('bmi').style.color = '#CF2929';
        document.getElementById('bmi').innerHTML = bmi;
        document.getElementById('category-bmi').style.color = '#CF2929';
        document.getElementById('category-bmi').innerHTML = 'otyłość III stopnia';
        document.getElementById('risk-of-disease-bmi').style.color = '#ff0000';
        document.getElementById('risk-of-disease-bmi').innerHTML = 'ekstremalny poziom ryzyka';
    }
}
