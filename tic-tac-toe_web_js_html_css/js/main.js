document.addEventListener("DOMContentLoaded", function(){
    
    // Assigning Variables Initials Values and Some Shortcuts
    const board = document.getElementById("game-board");
    const gameOverMessage = document.getElementById("game-over-message");
    const restartButton = document.getElementById("restart-button");
    let currentPlayer = "X";
    let gameOver = false;
    
    // Create Cell Function , check CSS Coressponding styles for the class cell, and pass the Click_event to handleCellClick 
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

    // Click Cell Event Handler Function
    function handleCellClick(event){
        if (gameOver || event.target.textContent != "" || currentPlayer != "X"){
            return;
        }
        event.target.textContent = currentPlayer;
    }



    // Check Winner By Comparing If Any Of The Winning Combinations is Acheived By The Same Char "X" OR "O"
    function checkWinner(){
 	const cells = document.querySelectorAll(".cell");
        const winCombinations = [
            [0, 1, 2], [0, 3, 6], [3, 4, 5], [6, 7, 8], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]
        ];
        for (combo of winCombinations){
		const [a, b, c] = combo;
		if (cells[a].textContent && cells[a].textContent === cells[b].textContent && cells[b].textContent === cells[b].textContent === cells[c]){
			highlightWinner(cells[a], cells[b], cells[c]);
			return true;
		}
	}
	return false;
    }

    // Highlight Winner Function, Simply Adjust The CSS Styles in The Cells That Got Passed As Parameters
    function highlightWinner(cellA, cellB, cellC){
	    cellA.style.backgroundColor = ;
	    cellB.style.backgroundColor = ;
	    cellc.style.backgroundColor = ;
    }

    // Computer_Move Function.
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


    // Finding Best Move Through Winning Combinations, and if not possible block the X winning combinations
    // if either of the conditions cannot be satisfied, then put a random O, and a strategic first move to put O in the center if not occupied.
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
