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
	if (checkWinner()){
		gameOverMessage.textContent = `${currentPlayer} wins!`;
		gameOverMessage.style.display = "block";
        gameOverMessage.style.color = "white";
        gameOverMessage.style.marginBottom = "50px";

		gameOver = true;
		animateWinner();
		restartButton.style.display = "block";
		return;
	}else{
		currentPlayer = "O";
	}
	if (checkDraw()){
		gameOverMessage.textContent = "it's a Draw!!";
		gameOverMessage.style.display = "block";
        gameOverMessage.style.color = "white";
        gameOverMessage.style.marginBottom = "50px";

		gameOver = true;
		restartButton.style.display = "block"
		return;
	}else if (!gameOver){
		setTimeout(computerMove, 500);
	}

    }

    // Check Winner By Comparing If Any Of The Winning Combinations is Acheived By The Same Char "X" OR "O"
    function checkWinner(){
        const cells = document.querySelectorAll(".cell");
        const winCombinations = [
            [0, 1, 2], [0, 3, 6], [3, 4, 5], [6, 7, 8], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]
        ];
        for (const combo of winCombinations){
            const [a, b, c] = combo;
            const cellA = cells[a].textContent;
            const cellB = cells[b].textContent;
            const cellC = cells[c].textContent;
            console.log("Moments Before Storm");
            if ((cellA) && (cellA === cellB) && (cellA === cellC)){
                highlightWinner(cells[a], cells[b], cells[c]);
                return true;
            }
	    }
	    return false;
}


    // Highlight Winner Function, Simply Adjust The CSS Styles in The Cells That Got Passed As Parameters
    function highlightWinner(cellA, cellB, cellC){
	    cellA.style.backgroundColor = "aquamarine";
	    cellB.style.backgroundColor = "aquamarine";
	    cellC.style.backgroundColor = "aquamarine";
    }

    // Adding Some Visual illusion to animate the winner cells.
    function animateWinner(){
	    const winningCells = document.querySelectorAll(".cell");
	    winningCells.forEach(cell => {
            if (cell.style.backgroundColor === "aquamarine"){
                cell.style.transition = "transform 0.5s ease-in-out";
                cell.style.transform = "scale(1.15)";
                console.log("Working")
            }
	    });
    }

    // Function to Check Draw, it will execute offcourse if function checkWinner can't determine any winner
    function checkDraw(){
	    const cells = document.querySelectorAll(".cell");
	    for (const cell of cells){
		    if (cell.textContent === ""){
			    return false;
		    }
	    }
	    return true;
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
	    if (checkWinner()){
		    gameOverMessage.textContent = "O Wins!!!";
		    gameOverMessage.style.display = "block";
            gameOverMessage.style.color = "white";
            gameOverMessage.style.marginBottom = "50px";
    
		    gameOver = true;
		    animateWinner();
		    restartButton.style.display = "block";
	    }else{
		    currentPlayer = "X";
	    }
	    if (checkDraw() && !gameOver){
		    gameOverMessage.textContent = "it's a Draw!";
		    gameOverMessage.style.display = "block";
            gameOverMessage.style.color = "white";
            gameOverMessage.style.marginBottom = "50px";

		    restartButton.style.display = "block";
		    gameOver = true;
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

    }
});
