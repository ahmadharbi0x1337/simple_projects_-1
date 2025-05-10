document.addEventListener("DOMContentLoaded", function(){
    
    // Assigning Variables Initials Values and Some Shortcuts
    const board = document.getElementById("game-board");
    const gameOverMessage = document.getElementById("game-over-message");
    const restartButton = document.getElementById("restart-button");
    let currentPlayer = "X";
    let gameOver = false;
    
    // Create Cell Function , chekc CSS Coressponding styles for the class cell 
    function createCell(){
        const cell = document.createElement("div");
        cell.classList.add("cell");
        cell.addEventListener("click", handleCellClick);
        return cell;
    }
    // Listen For Restart Button , Reload Page
    restartButton.addEventListener('click', function(){
        location.reload();
    });
    // Generate The Cells inside the game-board element
    for (let i = 0; i < 9; i++){
        board.appendChild(createCell());
    }
    // Cell Click Event Function
    function handleCellClick(event){
        if (gameOver || event.target.textContent != "" || currentPlayer != "X"){
            return;
        }
        event.target.textContent = currentPlayer;
    }
    function computerMove(){
        const cells = document.querySelectorAll(".cell");
        let availableCells = [];
        cells.forEach((e) => {
            if (e.textContent === ""){
                availableCells.push(e);
            }
        });
        if (availableCells.length > 0){
            const bestMove = findBestMove();
            bestMove.textContent = "O";


        }
    }

    function findBestMove(){
        const cells = document.querySelectorAll(".cell");
        const winCombinations = [
            [0, 1, 2], [0, 3, 6], [3, 4, 5], [6, 7, 8], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]
        ];
        for (combo of winCombinations){
            // Destructing
            let [a, b, c] = combo;

            const combination = [cells[a], cells[b], cells[c]];

            if (combination.filter(cell => cell.textContent === "O").length === 2 && combination.some(cell => cell.textContent === "")){
                return combination.find(cell => cell.textContent === "");
            }
            if (combination.filter(cell => cell.textContent === "X").length === 2 && combination.some(cell => cell.textContent === "")){
                return combination.find(cell => cell.textContent === "");
            }
        }
            const center = cells[4];
            if (center.textContent === ""){
                return center;
            }
            const availableCells = Array.from(cells).filter(cell => cell.textContent === "");
            return availableCells[Math.floor(Math.random() * availableCells.length)];
    }
});
