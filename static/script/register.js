const formRegister = document.getElementById('formRegister')
const nom = document.getElementById('nom')
const prenom = document.getElementById('prenom')
const email = document.getElementById('email')
const mdpr = document.getElementById('mdpr')

formRegister.addEventListener('submit', (e) => {
  e.preventDefault();

  checkInputs();
})

function checkInputs() {
  //récupérer les valeurs des input
  const nomValue = nom.value.trim();
  const prenomValue = prenom.value.trim();
  const emailValue = email.value.trim();
  const mdprValue = mdpr.value.trim();

  if (nomValue === '') {
    //afficher l'erreur/ajout de la class error
    setErrorFor(nom, 'Champ incorrect')
  } else {
    //ajout de la class success
    setSuccessFor(nom);
  }

  if (prenomValue === '') {
    //afficher l'erreur/ajout de la class error
    setErrorFor(prenom, 'Champ incorrect')
  } else {
    //ajout de la class success
    setSuccessFor(prenom);
  }

  if (emailValue === '') {
    //afficher l'erreur/ajout de la class error
    setErrorFor(email, 'Champ incorrect')
  } else {
    //ajout de la class success
    setSuccessFor(email);
  }

  if (mdprValue === '') {
    //afficher l'erreur/ajout de la class error
    setErrorFor(mdpr, 'Champ incorrect')
  } else {
    //ajout de la class success
    setSuccessFor(mdpr);
  }
}

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector('small');

  //ajout du message d'erreur dans la balise small
  small.innerText = message;

  formControl.className = 'form-control error'
}

function setSuccessFor(input) {
  const formControl = input.parentElement;
  formControl.className = 'form-control success'
}

