
let formRegister = document.getElementById('formRegister');

formRegister.addEventListener('submit', function(e) {
  let firstInput = document.getElementById('nom');

  if(firstInput.value.trim() == ""){
    let invalid = document.getElementById('prenom');
    invalid.style.border = '1px solid #e74c3c';
    
    e.preventDefault();
  }else if
  
});


/* function checkValidity() {
    const x = document.getElementById("nom");

    x.value = "HELLO";
    console.error("HELLO");

    console.log("elements.value.length");

} */


/* document.getElementById("formRegister").addEventListener("submit", function (event) {
    event.preventDefault(); // Empêcher la soumission du formulaire par défaut

    // Récupérer tous les champs de saisie du formulaire
    var champs = this.querySelectorAll("input");

    // Parcourir chaque champ
    champs.forEach(function (champ) {
      // Vérifier si le champ est correctement rempli
      if (champ.checkValidity()) {
        champ.classList.remove("invalid");
        champ.classList.add("valid");
      } else {
        champ.classList.remove("valid");
        champ.classList.add("invalid");
      }
    });
  }); */
