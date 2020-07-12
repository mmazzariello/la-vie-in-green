"use strict";

class Database {
  //recuperar los usuarios - el array
  getAllUsers = () => {
    //recuperar el string
    const usersStr = localStorage.getItem("users");
    //convertir el string a un array
    const usersArr = JSON.parse(userStr);

    //si todavia no hay usuarios, devuelve el array vacio
    if (usersArr === null) {
      return [];
    } else {
      return usersArr;
    }
  };

  saveNewUser = (newUser) => {
    //recuperar el array de los usuarios del localstorage
    const usersArr = this.getAllUsers();

    //Actualizar el array de usuarios
    usersArr.push(newUser);

    //convertir el array a un string
    const usersStr = JSON.stringify(usersArr);

    //almacenarlo de nuevo
    localStorage.setItem("users", usersStr);
  };
}

const db = new Database();
