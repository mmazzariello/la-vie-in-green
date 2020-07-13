'use strict';

// form, inputs y message container

class Signup {
  constructor() {
    this.emailInput = document.querySelector("#email");
    this.passwordInput = document.querySelector("#password");
    this.repeatPasswordInput = document.querySelector("#repeat-password");

    this.buttonInput = document.querySelector("#signup-button");
    this.errorsWrapper = document.querySelector("#message-container");
  }

  // gestionar cambios del input "email"
  handleEmailInput = (event) => {
    const email = event.target.value;

    console.log("email", email);

    //validar el texto del input email
  };

  // gestionar cambios del input "password"
  handlePasswordInput = (event) => {
    const password = event.target.value;

    console.log("password", password);

    //validar el texto del input password
  };

  // gestionar cambios del input "repeat-password"
  handleRepeatPasswordInput = (event) => {
    const repeatpassword = event.target.value;

    console.log("repeatpassword", repeatpassword);

    //validar el texto del input repeatpassword
  };

  // gestionar cambios del envio de datos (submit)
  saveData = (event) => {
    //Cuando el evento ocurre, lo cancela y no recarga la pagina
    event.preventDefault();
//recoger los valores de casa input
    const email = this.emailInput.value;
    const password = this.passwordInput.value;
    const repeatPassword = this.repeatPasswordInput.value;


const newUser = new User(email, password);

// queremos guardar el nuevo usr en la base de datos (simulada)
  db.saveNewUser (newUser);



//vaciar el formulario
this.emailInput.value = "";
this.passwordInput.value = "";
this.repeatPasswordInput.value = "";

  };

  //funcion auxiliar para registrar todos los eventos
  addListeners = () => {
    this.emailInput.addEventListener("input", this.handleEmailInput);
    this.passwordInput.addEventListener("input", this.handlePasswordInput);
    this.repeatPasswordInput.addEventListener(
      "input",
      this.handleRepeatPasswordInput
    );

    this.buttonInput.addEventListener("click", this.saveData);
  };
}

// Crear una nueva instancia del Signup (objeto)
const signup = new Signup();

window.addEventListener("load", signup.addListeners);
