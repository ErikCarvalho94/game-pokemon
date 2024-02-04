const body = document.querySelector("body");
const game = document.querySelector(".game");

const count = document.querySelector("h1");
const reset = document.querySelector(".reset");

const ash = document.querySelector("#ash");

const charmander = document.querySelector("#charmander");
const pikachu = document.querySelector("#pikachu");
const zubat = document.querySelector("#zubat");

function getRightPosition() {
    return parseInt(ash.style.right.split("px")) || 2;

}

function getTopPosition() {
    return parseInt(ash.style.top.split("px")) || 2;

}

body.addEventListener("keydown", (event) => {
    event.stopPropagation();

    switch (event.code) {
        case "ArrowLeft":
            if (getRightPosition() < 770) {
                ash.style.right = `${getRightPosition() + 8}px`
                ash.src = "assets/left.png"
            }

            break;

        case "ArrowRight":
            if (getRightPosition() > 2) {
                ash.style.right = `${getRightPosition() - 8}px`
                ash.src = "assets/right.png"
            }
                break;


        case "ArrowDown":
            if (getTopPosition() < 625) {
                ash.style.top = `${getTopPosition() + 8}px`
                ash.src = "assets/front.png"
            }
            

            break;


        case "ArrowUp":
            if (getTopPosition() > 2 ) {
                ash.style.top = `${getTopPosition() - 8}px`
                ash.src = "assets/back.png"
            }          
            
            break;

        default:
            break;
    }
})