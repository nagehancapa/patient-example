const patients = require("./patients");

// declare function
function displayFullName(patient) {
  // HERE IS HOW TO CHECK YOURSELF
  // console.log('CHECK TO SEE WHAT IS PATIENT:', patient)
  const { firstName, lastName } = patient;

  const fullName = `${firstName} ${lastName}`;

  console.log(fullName);
}

// pass as callback
patients.forEach(displayFullName);

// pass anonymous function directly
patients.forEach(function(patient) {
  // HERE IS HOW TO CHECK YOURSELF
  // console.log("CHECK TO SEE WHAT IS PATIENT:", patient);
  const { firstName, age } = patient;

  console.log(`${firstName} - age: ${age}`);
});

patients.forEach(function(patient) {
    const { firstName, weight } = patient;
    console.log(`${firstName} - weight: ${weight}`);
});

patients.forEach(function(patientGender) {
    const {lastName, gender} = patientGender
    console.log(`${lastName} - gender: ${gender}`)
})

patients.forEach(function(patientGender) {
    const {lastName, gender} = patientGender
    patientGender.gender === "m" ?
        console.log(`Mr. ${lastName}`) :
        console.log(`Mrs. ${lastName}`)
})