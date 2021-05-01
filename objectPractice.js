const patients = require("./patients");
const firstPatient = patients[0];

const {weight, age, height} = firstPatient
console.log(age, weight, height)

// const {firstName, lastName} = firstPatient
const fullName = `${firstPatient.firstName} ${firstPatient.lastName}`
console.log(fullName)

if(firstPatient.dailyExercise === "no") {
    console.log("does not exercise")
} else {
    console.log("exercises")
}

for (let index = 0; index < patients.length; index++) {
    console.log("what is index?", index)
    console.log(patients[index].firstName + " " + patients[index].lastName)
}