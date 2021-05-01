// patientByPhoneNumber.js
const patients = require("./patients");
// const email = '+352-734-320-0008';
const phoneNumber = process.argv[2];

const specificPatient = patients.find(patient => patient.phoneNumber === phoneNumber); 

console.log(specificPatient);