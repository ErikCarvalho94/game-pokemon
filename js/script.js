const body = document.querySelector("body");
const game = document.querySelector(".game");

const count = document.querySelector("h1");
const reset = document.querySelector(".reset");

const ash = document.querySelector("#ash");

const charmander = document.querySelector("#charmander");
const pikachu = document.querySelector("#pikachu");
const zubat = document.querySelector("#zubat");

const audio = document.querySelector("audio");
audio.volume = 0.1;

const musicControl = document.querySelector(".music-control")

musicControl.addEventListener("click", (event) => {
    event.stopPropagation();

    event.target.src = `${event.target.src}`.includes("on.png") 
    ? "../assets/icons/off.png" 
    : "../assets/icons/on.png";

    `${event.target.src}`.includes("on.png") ? audio.play() : audio.pause();
})

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
            if (getTopPosition() > 2) {
                ash.style.top = `${getTopPosition() - 8}px`
                ash.src = "assets/back.png"
            }

            break;

        default:
            break;
    }
})