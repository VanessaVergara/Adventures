const cards = document.querySelectorAll('.memory-card');

let hasFlippedCard = false;
let lockBoard = false;
let firstCard,secondCard;

function flipCard() {
    if(lockBoard) return;
    if (this === firstCard) return;
    this.classList.add('flip');
//Don't Understand the condition and .add
    if(!hasFlippedCard) {
        //first click
        hasFlippedCard = true;
        firstCard = this; 
        return;
    }   //secondclick
        hasFlippedCard = false;
        secondCard = this;
        checkForMatch();

        
}
function checkForMatch() {
        let isMatch = firstCard.dataset.framework === secondCard.dataset.framework

    isMatch ? disableCards() : unflipCards();
}
    function disableCards() {
        firstCard.removeEventListener('click', flipCard);
        secondCard.removeEventListener('click', flipCard);
        //not working ///////
         } 
    function unflipCards() {
        lockBoard = true;
            setTimeout(() => {
            firstCard.classList.remove('flip');
            secondCard.classList.remove('flip');

        lockBoard = false;
            },1500);   
        } 
// what is this?     
function resetBoard() {
    [hasFlippedCard, lockboard] = [false,false];
    [firstCard,secondCard] = [null,null];
}

(function shuffle() {
    cards.forEach(card => {
        let randomPos = Math.floor( Math.random() * 12);
        card.style.order = randomPos; 
    });
})();


cards.forEach(card => card.addEventListener('click', flipCard));
