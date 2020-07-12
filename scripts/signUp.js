"use strict";

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
  handleEmailInput = (event) => {};

  // gestionar cambios del input "password"
  handleEmailInput = (event) => {};

  // gestionar cambios del input "repeat-password"
  handleRepeatPasswordInput = (event) => {};

  // gestionar cambios del envio de datos (submit)
  saveData = (event) => {};

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

