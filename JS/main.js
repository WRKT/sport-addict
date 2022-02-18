//Background-img aléatoire
function randomImg() {
    const randomImgLink = [
            `url(CSS/images/activites/basketball.jpg)`,
            `url(CSS/images/activites/boxe.jpg)`,
            `url(CSS/images/activites/crossfit.jpg)`,
            `url(CSS/images/activites/musculation.jpg)`,
        ]
    return randomImgLink[Math.floor(Math.random() * randomImgLink.length)];
  }

var imgChange = document.getElementById("Presentation").style.backgroundImage=`${randomImg()}`

setInterval(imgChange, 5000)
