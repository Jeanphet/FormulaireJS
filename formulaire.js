


var create=document.getElementById("create");

create.addEventListener("click",myFunction)

function myFunction(event){

  event.preventDefault();



  var name = document.getElementById("name").value;
  var password = document.getElementById("password").value;
  var regex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;
  var email = document.getElementById("email").value;
  var regex2 = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;


  if (name.charAt(0) !== name.charAt(0).toUpperCase()) {
    alert("Veuillez entrer la première lettre de votre nom en majuscule");
  }
  else if (!regex.test(password)) {
    alert("Veuillez entrer un mot de passe de 8 caractères minimum avec au moins une majuscule et un chiffre");
  }

  else if (!regex2.test(email)) {
    alert("Veuillez entrer une adresse email valide");
  }
  else {
  alert("Bienvenue l'artiste");
  }
}