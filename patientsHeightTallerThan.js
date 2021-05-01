// patientsHeightTallerThan.js
const patients = require("./patients");
// const weight = 1.75;
const height = process.argv[2];

console.log(patients);

const patientsHeightTallerThan = patients.filter(patient => patient.height >= height); // your logic here using filter

console.log("OUTPUT:", patientsHeightTallerThan);
console.log("TOTAL NUMBER OF PATIENTS", patients.length);
console.log(`NUMBER OF PATIENTS HEIGHT TALLER THAN ${height}:`, patientsHeightTallerThan.length);