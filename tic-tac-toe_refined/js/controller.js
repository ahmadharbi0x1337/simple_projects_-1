import View from "./view.js";



function init(){
     const view = new View();

     view.bindGameResetEvent((event) => {
        console.log("Reset The Game");
        console.log(event)
    });

     view.bindNewRoundEvent((event) => {
        console.log("Start a New Round");
        console.log(event)
    });

    view.bindPlayerMoveEvent((event) => {
        console.log("Player made a move on square:", event.target.id);
        console.log(event)        
    });
}


window.addEventListener("load", init);


