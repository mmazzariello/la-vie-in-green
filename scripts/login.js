'use strict';

class Login {
  constructor() {
    this.emailInput = document.querySelector("#email");
    this.passwordInput = document.querySelector("#password");

    this.loginButton = document.querySelector("#login-button");
    this.messageContainer = document.querySelector(".message-container");
  }

  //gestionar el envio de los datos (evento "submit")
submit = (event) => {
  event.preventDefault();

  const userDB = db.getAllUsers();

const email = this.emailInput.value
const password = this.passwordInput.value

  //Intentar encontrar el ususrio
const user = usersDB.find ((userObj) => {
  if (userObj.email === email && userObj.password === password) {
    return true;
  }
})

this.showMessage(user);

}

//mostrar el mensaje de error o mensaje de exito
showMessage = (user) => {
  
}

}
