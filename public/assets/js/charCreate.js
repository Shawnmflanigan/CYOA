import { characterTools } from './modules/characterTools.js'

function createChar() {

    const newCharBTN = document.querySelector("#createChar");

    newCharBTN.addEventListener("click", ()=> {
        const audio = new Audio("/assets/sounds/gameStart.wav");
        audio.play();
        

        const newCharInput = document.querySelector("#charName");
        const newCharName = newCharInput.value;
        
        ajaxChar(newCharName)

    });
}

function ajaxChar(name) {
    $.ajax({
        url: `/api/characters/${name}`,
        method: "POST"
    }).then(function(data){ 
        console.log("New Char Created!", data)
    
        // get values
        const charId = data.id
        
        // kill all buttons and header
        const charArea = document.getElementById("characterCreate")
        charArea.innerHTML = ''

        charArea.innerHTML = `
                <div class="columns">
                <div class="column is-four-fifths charSelect"><h1 class="encounterText">${name}! Ready for action! </h1></div>
                </div>

                <div class="columns">
                <a href="/encounters/1/${charId}" ><div class="column is-four-fifths charSelect"><button id="nextAdventure" class="button is-medium is-full-length is-fullwidth is-hovered is-rounded charButton" >Continue Adventure...</button></a></div>
                </div>
            `

        // add onclick sound
        const nextAdventure = document.getElementById("nextAdventure")
        characterTools.startGameSound(nextAdventure);

        // hover over
        characterTools.hoverOverNextAdventure("nextAdventure")

    })
}

// initializes on page load
characterTools.hoverOverButtons()
createChar()