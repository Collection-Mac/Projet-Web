
document.getElementById('formRegister').addEventListener('submit', function (event) {
    event.preventDefault(); // Empêcher la soumission du formulaire par défaut

    // Récupérer tous les champs de saisie du formulaire
    var champs = this.querySelectorAll('input');

    // Parcourir chaque champ
    champs.forEach(function (champ) {
        // Vérifier si le champ est correctement rempli
        if (champ.checkValidity()) {
            champ.classList.remove('invalid');
            champ.classList.add('valid');
        } else {
            champ.classList.remove('valid');
            champ.classList.add('invalid');
        }
    });
});