// patientByEmail.js
const patients = require("./patients");
// const email = "radolthineg@mayoclinic.com";
const email = process.argv[2];

const specificPatient = patients.find(patient => patient.email === email); 

console.log(specificPatient);