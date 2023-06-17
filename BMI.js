function calculateBMI() {
  var weight = parseFloat(document.getElementById("weight").value);
  var height = parseFloat(document.getElementById("height").value) / 100;
  // convert height to meters
  
  if (isNaN(weight) || isNaN(height)) {
    document.getElementById("result").innerHTML =
      "<p>Please enter valid weight and height values.</p>";
    return;
  }

  var bmi = weight / (height * height);
  var bmiCategory;

      if (bmi < 18.5) {
        bmiCategory = 'Underweight';
      } else if (bmi >= 18.5 && bmi < 25) {
        bmiCategory = 'Normal weight';
      } else if (bmi >= 25 && bmi < 30) {
        bmiCategory = 'Overweight';
      } else {
        bmiCategory = 'Obese';
      }

  var result ="<br>"+"Your BMI: " + bmi.toFixed(2) + "<br>";
  result += 'Category: ' + bmiCategory;

  document.getElementById("result").innerHTML = result;
}