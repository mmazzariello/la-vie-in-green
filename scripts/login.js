"use strict";

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

    const email = this.emailInput.value;
    const password = this.passwordInput.value;

    //Intentar encontrar el ususrio
    const user = userDB.find((userObj) => {
      if (userObj.email === email && userObj.password === password) {
        return true;
      }
    });

    this.showMessage(user);
  };

  //mostrar el mensaje de error o mensaje de exito
  showMessage = (user) => {
    this.messageContainer.innerHTML = "";

    const message = document.createElement("p");

    if (user) {
      message.innerHTML = `Hello! ${user.email}`;
      message.classList.add("correct-message");
    } else {
      message.innerHTML = `The email or password are incorrect`;
    }
    this.messageContainer.appendChild(message);

    if (user) this.redirect();
  };

  redirect = () => {
    setTimeout(() => location.assign("dashboard.html"), 2000)
    
  };
}

const login = new Login();

login.loginButton.addEventListener("click", login.submit);
