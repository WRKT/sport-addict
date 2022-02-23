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

function afficher() {
  document.getElementById("contenucaché").style.display="block"
}
function fermer(){
  document.getElementById("contenucaché").style.display="none"
}
//FIN fonction afficher contenucaché