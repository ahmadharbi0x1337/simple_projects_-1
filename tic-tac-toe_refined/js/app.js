const App = {
    $:{
        menu: document.querySelector("[data-id='menu']"),
        menuItems: document.querySelector("[data-id='menu-items']"),
        resetBtn: document.querySelector("[data-id='reset-button']"),
        newRoundBtn: document.querySelector("[data-id='new-round-button']"),
        squares: document.querySelectorAll("[data-id='square']"),
    },
    init(){
        App.registerEventListeners()

    },

    state:{
        moves: [],
    },

    registerEventListeners(){
        // Menu Button Toggle (DONE)
        App.$.menu.addEventListener("click", (event) => {
            App.$.menuItems.classList.toggle("hidden");
        });
        // Reseting Game (Clearing Scores!) // TODO
        App.$.resetBtn.addEventListener("click", (event) => {
            console.log("Reset The Game")
        });
        // Starting New Round Just Clearing The Cells // TODO
        App.$.newRoundBtn.addEventListener("click", (event) => {
            console.log("Start a New Round")
        });

        // Handling Game Moves // TODO
        App.$.squares.forEach(square => {
            square.addEventListener("click", (event) =>{
                // Helper to check if cell has an icon
                const hasMove = (squareId) => {
                    const existingMove = App.state.moves.find(
                        // negation based logic
                        (move) => move.squareId === squareId
                    );
                        // negation based logic
                    return existingMove !== undefined;
                };
                // Preventing Players From Tampering With Cells Already Contains Icons.
                if (hasMove(+square.id)){
                    return;
                }
                // Handle Correct Icons To Place According To Current Player
                    // Get Last Move
                const lastMove = App.state.moves.at(-1);
                    // Helper To Get The oppisite of the current player
                const getOppisitePlayer = (playerId) => playerId === 1 ? 2 : 1;
                    // Get Current Player
                const currentPlayer = App.state.moves.length === 0 ? 1 : getOppisitePlayer(lastMove['playerId']);
                const icon = document.createElement('i');
                if (currentPlayer === 1){
                    icon.classList.add("fa-solid", "fa-x", "turquoise");
                }else{
                    icon.classList.add("fa-solid", "fa-o", "yellow");
                }
                // Push Move to moves State
                App.state.moves.push({
                    // Ensures it's stored as a Number by the addition operator. just in case!?
                    squareId: +square.id,
                    playerId: currentPlayer,  
                });
                // Add The Icon inside the i element.
                square.replaceChildren(icon);

                // Check For Winner Or A Tie!
                const winningPatterns = [
                    [1, 2, 3],
                    [4, 5, 6],
                    [7, 8, 9],
                    [1, 5, 9],
                    [3, 5, 7],
                    [1, 4, 7],
                    [2, 5, 8],
                    [3, 6, 9],
                ];

            });
        });
    },
};


window.addEventListener("load",App.init);
