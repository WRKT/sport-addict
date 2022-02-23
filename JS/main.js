//Début fonction background-img aléatoire
function randomImg() {
    const randomImgLink = [
            `url(CSS/images/activites/basketball.jpg)`,
            `url(CSS/images/activites/boxe.jpg)`,
            `url(CSS/images/activites/crossfit.jpg)`,
            `url(CSS/images/activites/musculation.jpg)`,
        ]
    document.getElementById("Presentation").style.backgroundImage=randomImgLink[Math.floor(Math.random() * randomImgLink.length)];
    console.log("done")
  }

setInterval(() => {randomImg();}, 4000)

// FIN fonction background-img aléatoire

//DEBUT fonction navbar

//FIN Fonction navbar

//DEBUT fonction afficher/cacher contenucaché
const TOGGLE_ShowHide = document.querySelector(".showhide");
const HIDDEN_CONTAINER = document.querySelector("#contenucaché");

TOGGLE_ShowHide.addEventListener("click", () => {
  if (TOGGLE_ShowHide.children[0].innerHTML === "Afficher") {
    TOGGLE_ShowHide.children[0].innerHTML = "Masquer";
    HIDDEN_CONTAINER.style.display = "block";
  } else {
    TOGGLE_ShowHide.children[0].innerHTML = "Afficher";
    HIDDEN_CONTAINER.style.display = "none";
  }
});
//FIN fonction afficher contenucaché