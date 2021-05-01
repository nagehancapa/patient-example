const patients = require("./patients");

function calculateBMR(weight, height, age, gender) {
  // BMR: 10 x weight (kg) + 6.25 x height (cm) - 5 x age
  const heightInCm = height * 100
  return gender === "m" ? 
    10 * weight + 6.25 * heightInCm - 5 * age + 50 :
    10 * weight + 6.25 * heightInCm - 5 * age - 150
}

const bmrs = patients.map(patient => 
  calculateBMR(patient.weight, patient.height, patient.age, patient.gender));

console.log(bmrs);