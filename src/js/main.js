const cardList = document.querySelectorAll('.card');

// 카드 이벤트 등록
(function cardEvent() {
    cardList.forEach(card => {
        card.addEventListener('click', () => {
            card.classList.add('flipped');

            if(document.querySelectorAll('.flipped').length >= cardList.length) {
                clearInterval(flipCard);
                setTimeout(() => {
                    alert('승리!');
                }, 800);
            }
        });
    });
})();


const flipCard = setInterval(() => {
    const flippedCard = document.querySelectorAll('.flipped')
    if(flippedCard.length <= 0) {
        return;
    }
    const index = Math.floor(Math.random() * flippedCard.length);

    setTimeout(() => {
        flippedCard[index].classList.remove('flipped');
    }, 100);
}, 1000);