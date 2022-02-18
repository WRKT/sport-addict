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

setInterval(() => {randomImg();}, 5000)

// FIN Fonction

