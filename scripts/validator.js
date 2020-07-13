"use strict";

class Validator {
  constructor() {
    //crear mensajes predeterminados
    this.invalidEmailError = "Type a valid email";
    this.emailExistsError = "Email is already registered";
    this.passwordError = "Type a password with 6 or more characters";
    this.repeatPasswordError = "Passwords do not match, please try again";

    //objeto con los errores que van a ser mostrados a los usuarios
    this.errors = {
      invalidEmailError: this.invalidEmailError,
      emailExistsError: this.emailExistsError,
      passwordError: this.passwordError,
      repeatPasswordError: this.repeatPasswordError,
    };
  }



  //validar el nombre del email
  validateValidEmail = (email) => {
  
  const emailRegEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
    //comprueba si el email es valido, y si es valido, tengo que borrar el error del objeto this.erros
  
if () {

}

  // si no es valido, poner el mensaje 
  
  }

  //validar que el email no esta tomado, es decir, es unico
  emailIsValid = (email) => {}

  //metodo para validar la lomgitud del password
  validatePassword = (password) => {}

  //validar si el password coincide con repeat password
  validatePasswordRepeat = (password) => {};

  //este metodo sirve para obtener el objeto con errores, y mostrarle al usr en signuo
  getErrors = () => {
    return this.errors;
  }

  //reiniciar los errores mostrados
  resetValidator = () => {}
}

const validator = new Validator();
