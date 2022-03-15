import { IMAGES_DATA } from "./data.js";

const getUrlClass  = new URLSearchParams(window.location.search).get("sport"); // GET class: 'event','activity','populaire'

var tab = [];

function GetAllElements() {

    for (let GetSport in IMAGES_DATA) {
        // console.log(IMAGES_DATA[GetSport]);
            if (IMAGES_DATA[GetSport]._id.includes(getUrlClass.toLowerCase())) {
                tab.push(IMAGES_DATA[GetSport]);
            } else if (IMAGES_DATA[GetSport].h3.includes(getUrlClass.toLowerCase())) {
                tab.push(IMAGES_DATA[GetSport]);
            } else if (IMAGES_DATA[GetSport].h2.includes(getUrlClass.toLowerCase())) {
                tab.push(IMAGES_DATA[GetSport]);
            }
    }

    ShowAllElements();

}

function ShowAllElements() {


    for (let ShowSport in tab) {

        console.log(tab[ShowSport])
        
        const GenerateShowSport = `<div class="generate-sport"> 
                                        <div>
                                            <img class="imgsports" src="${tab[ShowSport].favlink}" alt="${tab[ShowSport].tab}">
                                            <h3>${tab[ShowSport].h3}</h3
                                        </div>
                                    </div>`
        
        document.querySelector('body').insertAdjacentHTML('beforeend', GenerateShowSport)        
        
    }
    
}


GetAllElements();