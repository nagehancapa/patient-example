// phoneNumbersAndIds.js
const patients = require("./patients");

// map executes the callback function for each element
const phoneNumbers = patients.map(patient => patient.phoneNumber);
console.log(phoneNumbers);

const Ids = patients.map(patient => patient.id);
console.log(Ids);

const phoneNumbersAndIds = patients.map(patient => `${patient.id} -> ${patient.phoneNumber}`);
console.log(phoneNumbersAndIds);