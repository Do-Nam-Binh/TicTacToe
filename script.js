

const gameBoard = (() => {
    let board = Array(9).fill(" ");
    let win = false;
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

    const areEqualNotNull = (values) => {
        if (values[0] === " ") return false;
      
        return values.every(value => value === values[0]);
    }
  
    const checkWin = () => {
        for(let i = 0; i < winPos.length; i++){
            if(areEqualNotNull([board[winPos[i][0]], board[winPos[i][1]], board[winPos[i][2]]])){
                win = true;
                console.log(board[winPos[i][0]] + " wins");
            }
        }
    }

    const play = (mark, pos) => {
        if(board[pos] == " "){
            board[pos] = mark;
            checkWin();
            displayController.updateDisplay(board);
        }else{
            console.log("Already a mark there")
        }       
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
    cell.addEventListener('click', () => {gameBoard.play("x", parseInt(cell.className[5]) - 1)});
})
