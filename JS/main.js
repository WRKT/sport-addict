//Début fonction background-img aléatoire
function randomImg() {
  let i = 0;
    const randomImgLink = [
            `url(CSS/images/activites/basketball.jpg)`,
            `url(CSS/images/activites/boxe.jpg)`,
            `url(CSS/images/activites/crossfit.jpg)`,
            `url(CSS/images/activites/musculation.jpg)`,
        ]
    let stylePresentation = document.querySelector("#Presentation");
    let theCSSprop = window.getComputedStyle(stylePresentation,null).getPropertyValue("background-image");
    console.log(theCSSprop);
  }

setInterval(() => {randomImg();}, 4000)

// FIN fonction background-img aléatoire

//DEBUT fonction navbar

//FIN Fonction navbar

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