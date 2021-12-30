//Capturing the data

let nameI = ""; // nameI of input
let lastName = "";
let phone = "";
let address = "";
let observation = "";

let Persons = [];

// capture botton submit
let botonEnv = document.getElementById("botonEnv");
let form = document.getElementById("form");

// Events

// no reset page
form.addEventListener("submit", (e) => {
  e.preventDefault();
  getData();
  console.log("Estoy en la funcion");
});

// Get data, id
function getData() {
  nameI = document.getElementById("name").value;
  lastName = document.getElementById("lastname").value;
  phone = document.getElementById("phone").value;
  address = document.getElementById("address").value;
  observation = document.getElementById("observation").value;

  validateData(nameI, lastName, phone, address, observation);
}

// Function isNaN validate data of inputs
function validateData(nameI, lastName, phone, address, observation) {
  if (isNaN(phone)) {
    alert("En el telefono debe escribir solo numeros");
  } else {
    addData(nameI, lastName, phone, address, observation);
    sendToLocalStorage(Persons); //send localStorage array Persons
  }
}

// Add data

function addData(nameU, lastNameU, phoneU, addressU, observationU) {
  Persons.push({
    nameUser: nameU,
    lastNameUser: lastNameU,
    phoneUser: phoneU,
    addressUser: addressU,
    observationUser: observationU,
  });
  console.log(Persons);
}

// Exit key in the localStorage
function getLocalStorage() {
  if (localStorage.getItem("Person")) {
    Persons = JSON.parse(localStorage.getItem("Person"));
  }
}

// Send LocalStorage
function sendToLocalStorage(persons) {
  localStorage.setItem("Person", JSON.stringify(persons));
}
