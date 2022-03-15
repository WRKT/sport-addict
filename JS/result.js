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
        
        const GenerateShowSport = ` <div>
                                        <div class="centre"><img class="imgsports imgresults" src="${tab[ShowSport].favlink}" alt="${tab[ShowSport].tab}"></div>
                                        <h2>${tab[ShowSport].h2}</h2>
                                        <h3>${tab[ShowSport].h3}</h3>
                                    </div>`
        
        document.querySelector('#searchResults').insertAdjacentHTML('beforeend', GenerateShowSport)        
        
    }
    
}


GetAllElements();