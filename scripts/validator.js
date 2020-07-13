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
    //comprueba si el email es valido, y si es valido, tengo que borrar el error del objeto this.erros
    if (this.emailIsValid(email)) {
      delete this.errors.invalidEmailError;
    } else {
      // si no es valido, poner el mensaje
      this.errors.invalidEmailError = this.invalidEmailError;
    }
  };

  //funcion auxiliar de validateEmail
  emailIsValid = (email) => {
    //RegEx objeto especial que contiene las reglas de la sintaxis que el mail tiene que cumplir
    const emailRegEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;

    //metodo test prueba si la cadena cumple las reglas
    //devuelve true o false
    const isValid = emailRegEx.test(email);

    return isValid;
  };

  //validar que el email no esta tomado,
  //validar si el email es unico
  validateUniqueEmail = (newEmail) => {
    const usersDB = db.getAllUsers();

    let emailUnique = true;

    if (usersDB.length > 0) {
      usersDB.forEach((userObj) => {
        //si el email ya esta tomado, cambia el valor de la variable a false
        if (userObj.email === newEmail) {
          emailUnique = false;
        }
      });

      if (emailUnique) {
        //quitar el mensaje de error
        delete this.errors.emailExistsError;
      } else {
        //si el mail no es unico, poner el mensaje de nuevo
        this.errors.emailExistsError = this.emailExistsError;
      }
    }
  };

  //metodo para validar la lomgitud del password
  validatePassword = (password) => {
    if (password.length > 5) {
      //quita el mensaje
      delete this.errors.passwordError;
    } else {
      // si el password tiene menos de 5 caracteres, poner el mensaje
      this.errors.passwordError = this.passwordError;
    }
  };

  //validar si el password coincide con repeat password
  validatePasswordRepeat = (password, passwordRepeat) => {
    if (password === passwordRepeat) {
      delete this.errors.repeatPasswordError;
    } else {
      this.errors.repeatPasswordError = this.repeatPasswordError;
    }
  };

  //este metodo sirve para obtener el objeto con errores, y mostrarle al usr en signuo
  getErrors = () => {
    return this.errors;
  };

  //reiniciar los errores mostrados
  resetValidator = () => {};
}

const validator = new Validator();
