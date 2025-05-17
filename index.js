let currentJoke = null;
let jokes = [];

// Sélection des éléments
const questionContainer = document.querySelector("h1");
const responseButton = document.querySelector(".response-button button");
const jokeButton = document.querySelector(".joke-button button");

// Récupérer les blagues
fetch("http://localhost:3000/api/v1/jokes")
  .then((response) => response.json())
  .then((data) => {
    jokes = data;
    displayRandomJoke(); // Affiche une première blague
  })
  .catch((error) => {
    console.error("Erreur lors de la récupération des blagues :", error);
  });

// Fonction pour afficher une blague
function displayRandomJoke() {
  const index = Math.floor(Math.random() * jokes.length);
  currentJoke = jokes[index];

  // Affiche la question
  questionContainer.textContent = currentJoke.question;

  // Réinitialise le texte du bouton réponse
  responseButton.textContent = "AFFICHER LA RÉPONSE";
}

// Quand on clique sur le bouton "Afficher la réponse"
responseButton.addEventListener("click", () => {
  if (currentJoke) {
    responseButton.textContent = currentJoke.response;
  }
});

// Quand on clique sur "Une autre blague"
jokeButton.addEventListener("click", displayRandomJoke);

// NAVBAR
let sideBar = document.getElementById("side-bar");
console.log(sideBar);

let burgerButton = document.querySelector(".burger");
console.log(burgerButton);

burgerButton.addEventListener("click", () => {
  console.log("click");
  sideBar.classList.toggle("active");
});
