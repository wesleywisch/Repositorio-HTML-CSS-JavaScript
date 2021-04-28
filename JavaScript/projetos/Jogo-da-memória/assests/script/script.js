const front = "card_front"
const back = "card_back"
const ICON = "icon"
const CARD = 'card'
let gameOverLayer = document.getElementById("gameOver");


startGame();

function startGame() {
    initializeCards(game.createCardsFromTechs());
}

function initializeCards(cards) {
    let gameBoard = document.getElementById("gameBoard");
    gameBoard.innerHTML = '';
    game.cards.forEach(card => {
        let cardElement = document.createElement('div')
        cardElement.id = card.id;
        cardElement.classList.add(CARD);
        cardElement.dataset.icon = card.icon;

        createCardContent(card, cardElement);

        cardElement.addEventListener('click', flipCard)
        gameBoard.appendChild(cardElement);


    })

}

function createCardContent(card, cardElement) {

    creadteCardFace(front, card, cardElement);
    creadteCardFace(back, card, cardElement);

}

function creadteCardFace(face, card, element) {
    let cardElementFace = document.createElement('div');
    cardElementFace.classList.add(face);
    if (face == front) {
        let iconElement = document.createElement('img');
        iconElement.classList.add(ICON);
        iconElement.src = "./assests/imagens/" + card.icon + ".png";
        cardElementFace.appendChild(iconElement);
    } else {
        cardElementFace.innerHTML = "&lt/&gt";
    }
    element.appendChild(cardElementFace);
}

function flipCard() {
    if (game.setCard(this.id)) {
        this.classList.add("flip");
        if (game.secondCard) {
            if (game.checkMatch()) {
                game.clearCards();
                if(game.checkGameOver()){
                    gameOverLayer.style.display = 'flex';
                }
            } else {
                setTimeout(() => {
                    let firstCardView = document.getElementById(game.firstCard.id);
                    let secondCardView = document.getElementById(game.secondCard.id);
                    firstCardView.classList.remove("flip");
                    secondCardView.classList.remove("flip");
                    game.unflipCards();
                }, 500);
            }
        }
    }
}

function restart() {
    game.clearCards();
    startGame();
    gameOverLayer.style.display = "none"

}
