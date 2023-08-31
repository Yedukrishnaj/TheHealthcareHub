function calculateBMI() {
    const heightInput = document.getElementById('height');
    const weightInput = document.getElementById('weight');
    const resultDiv = document.getElementById('result');
  
    const height = parseFloat(heightInput.value);
    const weight = parseFloat(weightInput.value);
  
    if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
      resultDiv.textContent = 'Please enter valid values for height and weight.';
      return;
    }
  
    const bmi = weight / ((height / 100) * (height / 100));
    const roundedBMI = bmi.toFixed(2);
  
    let category;
    if (bmi < 18.5) {
      category = 'Underweight';
    } else if (bmi >= 18.5 && bmi < 24.9) {
      category = 'Normal Weight';
    } else if (bmi >= 25 && bmi < 29.9) {
      category = 'Overweight';
    } else {
      category = 'Obese';
    }
  
    resultDiv.textContent = `Your BMI is ${roundedBMI}. You are ${category}.`;
  }
  
  const resetButton = document.getElementById('resetButton');
resetButton.addEventListener('click', function() {
  // Clear input fields
  document.getElementById('weight').value = '';
  document.getElementById('height').value = '';
  
  // Clear previous results if any
  document.getElementById('bmiResult').textContent = '';
});