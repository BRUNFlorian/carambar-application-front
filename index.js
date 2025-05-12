let sideBar = document.getElementById("side-bar");
console.log(sideBar);

let burgerButton = document.querySelector(".burger");
console.log(burgerButton);

let searchField = document.getElementById("search-field");
burgerButton.addEventListener("click", () => {
  console.log("click");
  sideBar.classList.toggle("active");
});
