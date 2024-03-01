const formRegister = document.getElementById("formRegister");
const nom = document.getElementById("nom");
const prenom = document.getElementById("prenom");
const email = document.getElementById("email");
const mdpr = document.getElementById("mdpr");
const cmdpr = document.getElementById("cmdpr");

formRegister.addEventListener("submit", (e) => {
  if (!checkInputs()) {
    e.preventDefault();
  }
});

function checkInputs() {
  let isValid = true;
  //récupérer les valeurs des input
  const nomValue = nom.value.trim();
  const prenomValue = prenom.value.trim();
  const emailValue = email.value.trim();
  const mdprValue = mdpr.value.trim();
  const cmdprValue = cmdpr.value.trim();

  if (nomValue === "") {
    //afficher l'erreur/ajout de la class error
    setErrorFor(nom, "Champ incorrect");
    isValid = false;
  } else {
    //ajout de la class success
    setSuccessFor(nom);
  }

  if (prenomValue === "") {
    //afficher l'erreur/ajout de la class error
    setErrorFor(prenom, "Champ incorrect");
    isValid = false;
  } else {
    //ajout de la class success
    setSuccessFor(prenom);
  }

  if (emailValue === "") {
    //afficher l'erreur/ajout de la class error
    setErrorFor(email, "Champ incorrect");
    isValid = false;
  } else {
    //ajout de la class success
    setSuccessFor(email);
  }

  if (mdprValue === "") {
    //afficher l'erreur/ajout de la class error
    setErrorFor(mdpr, "Champ incorrect");
    isValid = false;
  } else {
    //ajout de la class success
    setSuccessFor(mdpr);
  }

  if (cmdprValue === "") {
    //afficher l'erreur/ajout de la class error
    setErrorFor(cmdpr, "Champ incorrect");
    isValid = false;
  } else if (mdprValue !== cmdprValue) {
    setErrorFor(cmdpr, "Le mot de passe ne correspond pas !");
    isValid = false;
  } else {
    //ajout de la class success
    setSuccessFor(cmdpr);
  }

  return isValid;
}

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");

  //ajout du message d'erreur dans la balise small
  small.innerText = message;

  formControl.className = "form-control error";
}

function setSuccessFor(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}



/******  Dynamisme du champ qualité *********/

//const qualitiesContainer = document.getElementById("qualities");
const addBtn = document.querySelector(".add");
const input = document.querySelector(".add-qualite");

function addInput() {
  const qualite2 = document.createElement("input");
  qualite2.type = "text";
  qualite2.placeholder = "Autre Qualité";


  //
  const btn = document.createElement("a");
  btn.className = "delete";
  btn.innerHTML = "&times";

  btn.addEventListener("click", removeInput);

  const flex = document.createElement("div");
  flex.className = "flex";

  input.appendChild(flex);
  flex.appendChild(qualite2);
  flex.appendChild(btn);


  /* qualitiesContainer.innerHTML += `
  <div class="form-control">
    <input type="text" id="qualite" name="qualite" placeholder="Qualité 1"/>
    <small>Error message</small>
  </div>
  `; */
}

function removeInput() {
  console.log(this)
  this.parentElement.remove();
}

addBtn.addEventListener("click", addInput);
