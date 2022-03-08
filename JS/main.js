//DEBUT fonction background-img aléatoire
let i = 0;
function randomImg() {
    const randomImgLink = [
            `url(CSS/images/activites/basketball.jpg)`,
            `url(CSS/images/activites/crossfit.jpg)`,
            `url(CSS/images/activites/musculation.jpg)`,
            `url(CSS/images/activites/boxe.jpg)`,
        ]
  if (i === randomImgLink.length) {
             i = 0;
  }
  //document.querySelector("#Presentation").animate([{ opacity: 0 }, { transition: "ease-in" }], {
  //  duration: 400,
  //});
  document.querySelector("#Presentation").style.backgroundImage = randomImgLink[i];
  i++;
}
 setInterval(() => {
 randomImg();
}, 3000);

//FIN fonction background-img aléatoire

//DEBUT fonction rechercher

const searchInput = document.querySelector("input")
const searchButton = document.querySelector(".fa-magnifying-glass")

searchButton.addEventListener("click", () =>{
  console.log(searchInput.value)
  searchButton.parentElement.setAttribute("href",`HTML/result.html?sport=${searchInput.value}`)
}
)
//FIN Fonction rechercher

//DEBUT fonction afficher/cacher contenucaché
const TOGGLE_ShowHide = document.querySelector(".showhide");
const HIDDEN_CONTAINER = document.querySelector("#contenucaché");

TOGGLE_ShowHide.addEventListener("click", () => {
  if (TOGGLE_ShowHide.children[0].innerHTML === "Afficher plus . . .") {
    TOGGLE_ShowHide.children[0].innerHTML = "Masquer";
    HIDDEN_CONTAINER.style.display = "block";
  } else {
    TOGGLE_ShowHide.children[0].innerHTML = "Afficher plus . . .";
    HIDDEN_CONTAINER.style.display = "none";
  }
});
//FIN fonction afficher contenucaché


// Enter dans l'input => submit du button
searchInput.addEventListener("keyup", (e) => {
  if (e.keyCode === 13) {
    e.preventDefault();
    searchButton.click();
  }
});