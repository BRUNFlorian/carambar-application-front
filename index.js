fetch("http://localhost:3000/api/v1/jokes")
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error("Erreur:", error));

let sideBar = document.getElementById("side-bar");
console.log(sideBar);

let burgerButton = document.querySelector(".burger");
console.log(burgerButton);

let searchField = document.getElementById("search-field");
burgerButton.addEventListener("click", () => {
  console.log("click");
  sideBar.classList.toggle("active");
});
