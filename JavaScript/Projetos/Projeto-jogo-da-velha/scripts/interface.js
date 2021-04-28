document.addEventListener("DOMContentLoaded", ()=>{

    let squares = document.querySelectorAll(".square");
    
    let buttonreset = document.getElementById("reset");
    buttonreset.addEventListener("click", restartGame);

    squares.forEach((square)=>{
        square.addEventListener('click', handleClick);
    })

})


function handleClick(event){


    let square = event.target;
    let position = square.id;

    if(handleMove(position)){
        
        setTimeout(()=>{
            if(playerTime == 0){
                let simbolos = '🛡️'
                alert("O jogo acabou! O vencedor foi " + simbolos);
            }else{
                let simbolos = '⚔️'
                alert("O jogo acabou! O vencedor foi " + simbolos);
            }
        }, 20);
    };
    updateSquares(position);

}

function updateSquares(position){
    let square = document.getElementById(position.toString());
    let symbols = board[position];
    square.innerHTML = `<div class='${symbols}'></div>` 
}


function restartGame(){
    let squares = document.querySelectorAll(".square");

    squares.forEach((square)=>{
        let position = square.id;
        let symbol = " ";
        gameOver = false;
        board = ['', '', '', '', '', '', '', '', ''];
        square.innerHTML = `<div class='${symbol}'></div>`
    });
}
