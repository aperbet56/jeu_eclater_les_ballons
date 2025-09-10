// Récupération des éléments HTML
const gallery = document.querySelector(".balloon__gallery");
const message = document.querySelector(".yay-no-balloons");
const replayBtn = document.querySelector(".replay__btn");
const footerCopyrightYear = document.querySelector(".footer__text__year");

// Création de la variable pop réglé de base à 0
let popped = 0;

// Déclarattion de la fonction checkAllPopped qui va vérifier si tous les ballons ont été éclatés
const checkAllPopped = () => {
  // Condition if
  if (popped === 12) {
    console.log("Tous les ballons sont éclatés !");
    gallery.textContent = "";
    message.style.display = "block";
    replayBtn.style.display = "block";
    // Ecoute de l'événement "click" sur le bouton rejouer
    replayBtn.addEventListener("click", () => {
      // Rechargement de la page
      location.reload();
    });
  }
};

// Ecoute de l'événement "click" sur le document
document.addEventListener("click", (e) => {
  if (e.target.className === "balloon") {
    e.target.style.backgroundColor = "#fffffe";
    e.target.textContent = "POP !";
    // Incrémentation de la variable popped
    popped++;
    console.log(popped);
    const audio = new Audio("sounds/pop_effect.mp3");
    audio.play();
    // Appel de la fonction checkAllPopped
    checkAllPopped();
  }
});

// Déclaration de la fonction getCurrentYear qui va permettre l'affichage dynamique de l'année
const getCurrentYear = () => {
  // Récupération de la date actuelle stockée dans la constante date
  const date = new Date();
  //console.log(date);

  // Récupération de l'année stockée dans la constante year
  const year = date.getFullYear();
  //console.log(year);

  // Affichage dynamique de l'année en cours
  footerCopyrightYear.textContent = `${year}`;
};
// Appel de la fonction getCurrentYear()
getCurrentYear();
