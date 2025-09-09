// Récupération des éléments HTML
const gallery = document.querySelector(".balloon__gallery");
const message = document.querySelector(".yay-no-balloons");
const replayBtn = document.querySelector(".replay__btn");

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
    e.target.style.backgroundColor = "#f7f7f7";
    e.target.textContent = "POP !";
    // Incrémentation de la variable popped
    popped++;
    console.log(popped);
    // Appel de la fonction checkAllPopped
    checkAllPopped();
  }
});
