

const gameBoard = (() => {
    let board = Array(9).fill(" ");
    let win = false;
    let player = 1;
    let turnCount = 0;

    const winPos = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]

    const playerTurn = () => {
        if(document.querySelector(".playerDisplay").textContent == "Player 1 (X)"){
            document.querySelector(".playerDisplay").textContent = "Player 2 (O)";
            player = 2;
        }else{
            document.querySelector(".playerDisplay").textContent = "Player 1 (X)";
            player = 1;
        }
    }

    const areEqualNotNull = (values) => {
        if (values[0] === " ") return false;
      
        return values.every(value => value === values[0]);
    }
  
    const checkWin = () => {
        for(let i = 0; i < winPos.length; i++){
            if(areEqualNotNull([board[winPos[i][0]], board[winPos[i][1]], board[winPos[i][2]]])){
                win = true;
                console.log("Player "+ player + " wins");
                resetBoard();
            }
        }
        if(turnCount == 9){
            console.log("Its a draw!");
            turnCount = 0;
            resetBoard();
        }
    }

    const play = (pos) => {
        let mark;
        if(player == 1){
            mark = "X";
        }
        if(player == 2){
            mark = "O";
        }
        if(board[pos] == " "){
            board[pos] = mark;
            turnCount++;
            checkWin();
            playerTurn();
            displayController.updateDisplay(board);            
        }else{
            console.log("Already a mark there")
        }       
    }

    const resetBoard = () => {
        for(let i = 0; i < board.length; i++){
            board[i] = " ";
        }
        player = 1;
        turnCount = 0;
        win = false;
        displayController.updateDisplay(board);
    }

    return {
        play,
    }
})();

const displayController = (() => {
    const updateDisplay = (board) => {
        for(let i = 0; i < board.length; i++){
            const cells = document.querySelectorAll(".cell");
            cells[i].textContent = board[i];
        }
    }

    return{
        updateDisplay,
    }
})();

const cells = document.querySelectorAll(".cell");
cells.forEach(cell => {
    cell.addEventListener('click', () => {gameBoard.play(parseInt(cell.className[5]) - 1)});
})

const startBtn = document.querySelector(".startGame");
const turnTracker = document.querySelector(".turnTracker");
startBtn.addEventListener('click', () => {
    console.log("start button clicked");
    cells.forEach(cell => {
        cell.classList.add("cellActive");
    });
    turnTracker.classList.add("turnTrackerActive");
    startBtn.classList.add("startGameDeactivated");
})