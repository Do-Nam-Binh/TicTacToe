
const gameBoard = (() => {
    let board = Array(9).fill(" ");

    const areEqualNotNull = (values) => {
        if (values[0] === " ") return false;
      
        return values.every(value => value === values[0]);
    }
  
    const checkWin = () => {
        if(board[0] != " "){
            if(areEqualNotNull([board[0], board[4], board[8]])){
                console.log(board[0] + " wins");
            }            
        }        
    }

    const play = (mark, pos) => {
        if(board[pos] == " "){
            board[pos] = mark;
            checkWin();
        }else{
            console.log("Already a mark there")
        }       
    }

    return {
        play,
    }
})();

const displayController = () => {

}

