function calculateBMI() {
    // Get the user's height and weight
    let height = document.getElementById("height").value;
    let weight = document.getElementById("weight").value;
  
    // Calculate the BMI
    let bmi = weight / (height * height);
  
    // Get the BMI category
    let category;
    if (bmi < 18.5) {
      category = "Underweight";
    } else if (bmi < 25) {
      category = "Normal";
    } else if (bmi < 30) {
      category = "Overweight";
    } else {
      category = "Obese";
    }
  
    // Display the BMI and category
    document.getElementById("result").innerHTML = `Your BMI is ${bmi} and your category is ${category}`;
  }
  