const cardLevel = [
    {hor: 3, ver: 2},
    {hor: 3, ver: 3},
    {hor: 4, ver: 3},
    {hor: 4, ver: 4},
    {hor: 5, ver: 4},
];
let level = 3;

// 카드 세팅
function cardSetting() {
    const hor = cardLevel[level].hor;
    const ver = cardLevel[level].ver
    
    document.querySelector('.card-board').innerHTML = '';
    for(let i=0; i<ver; i++) {
        const cardRow = document.createElement('div');
        cardRow.className = 'row';
        
        for(let j=0; j<hor; j++) {
            const card = document.createElement('div');
            card.className = 'card';
            const cardInner = document.createElement('div');
            cardInner.className = 'card-inner';
            const cardFront = document.createElement('div');
            cardFront.className = 'card-front';
            const cardBack = document.createElement('div');
            cardBack.className = 'card-back';

            cardInner.appendChild(cardFront);
            cardInner.appendChild(cardBack);
            card.appendChild(cardInner);
            cardRow.appendChild(card);

            card.addEventListener('click', onClick);
        }
        document.querySelector('.card-board').appendChild(cardRow)
    }

    setCardFlip();
}

//  카드 이벤트
function onClick(e) {
    const card = e.currentTarget;
    card.classList.add('flipped');

    const flippedCard = document.querySelectorAll('.flipped')
    const cardList = document.querySelectorAll('.card');
    if(flippedCard.length >= cardList.length) {
        clearInterval(flipCard);
        setTimeout(() => {
            if(level === cardLevel.length-1){
                alert('마지막 레벨까지 성공하셨습니다!!');
                return;
            }
            if(confirm('성공!\n다음레벨로 넘어가시겠습니까?')) {
                level++;
            }

            cardSetting();
        }, 500);
    }
}

// 랜덤 카드 뒤집기
let flipCard;
function setCardFlip() {
    flipCard = setInterval(() => {
        const flippedCard = document.querySelectorAll('.flipped')
        if(flippedCard.length <= 0) {
            return;
        }
        const index = Math.floor(Math.random() * flippedCard.length);
    
        setTimeout(() => {
            flippedCard[index].classList.remove('flipped');
        }, 100);
    }, 1500 - (level * 100));
}


cardSetting();
