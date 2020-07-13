'use strict';

// form, inputs y message container

class Signup {
  constructor() {
    this.emailInput = document.querySelector("#email");
    this.passwordInput = document.querySelector("#password");
    this.repeatPasswordInput = document.querySelector("#repeat-password");

    this.buttonInput = document.querySelector("#signup-button");
    this.errorsWrapper = document.querySelector(".message-container");
  }

  // gestionar cambios del input "email"
  handleEmailInput = (event) => {
    const email = event.target.value;

    //validar el texto del input email
    validator.validateValidEmail(email);

    const errors = validator.getErrors();

    //si el nombre del email es valido
    if (!errors.invalidEmailError) {
      //comprueba si el email es unico
      validator.validateUniqueEmail(email);
    }

    this.setErrorMessages();
  };

  // gestionar cambios del input "password"
  handlePasswordInput = (event) => {
    const password = event.target.value;
    const passwordRepeat = this.repeatPasswordInput.value;

    //validar el texto del input password
    validator.validatePassword(password);
    validator.validatePasswordRepeat(password, passwordRepeat);

    this.setErrorMessages();
  };

  // gestionar cambios del input "repeat-password"
  handleRepeatPasswordInput = (event) => {
    const passwordRepeat = event.target.value;
    const password = this.passwordInput.value;

    //validar el texto del input password
    //validar el texto del input repeatpassword
    validator.validatePassword(password);
    validator.validatePasswordRepeat(password, passwordRepeat);

    this.setErrorMessages();
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
    db.saveNewUser(newUser);

    //vaciar el formulario
    this.emailInput.value = "";
    this.passwordInput.value = "";
    this.repeatPasswordInput.value = "";

    this.showSuccessMessage();
    this.removeMessages();
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

  showSuccessMessage = () => {
    // vacia los errores para que no se sumen
    this.errorsWrapper.innerHTML = "";

    const errorsObj = validator.getErrors();
    //convertir el objeto a un array de strings
    const errorsStringsArr = Object.values(errorsObj);

    if (errorsStringsArr.length > 0) {
      return;
    }

    const successMessageP = document.createElement("p");
    successMessageP.innerHTML = "The account has been created successfully";

    this.errorsWrapper.appendChild(successMessageP);
  };

  removeMessages = () => {
    setTimeout (() => {
      this.errorsWrapper.innerHTML = "";
    }, 3000)
  }

  setErrorMessages = () => {
    //vacia los errores para que no se sumen
    this.errorsWrapper.innerHTML = "";

    const errorsObj = validator.getErrors();

    //convertir el objeto con errores a un array de strings
    const errorsStringsArr = Object.values(errorsObj);

    errorsStringsArr.forEach((errorStr) => {
      const errorMessageP = document.createElement("p");
      errorMessageP.innerHTML = errorStr;

      this.errorsWrapper.appendChild(errorMessageP);
    });
  };
}

// Crear una nueva instancia del Signup (objeto)
const signup = new Signup();

window.addEventListener("load", signup.addListeners);
