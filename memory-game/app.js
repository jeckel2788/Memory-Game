document.addEventListener('DOMContentLoaded', () => {
    //card options
    const cardArray = [
        {
            name: 'fallout',
            img:   'images/fallout.png'
        },
        {
            name: 'ghost',
            img:   'images/ghost.png'
        },
        {
            name: 'mario',
            img:   'images/mario.png'
        },
        {
            name: 'metalgear',
            img:   'images/metalgear.png'
        },
        {
            name: 'pokemon',
            img:  'images/pokemon.png'
        },
        {
            name: 'zelda',
            img:   'images/zelda.png'
        },
        {
            name: 'fallout',
            img:   'images/fallout.png'
        },
        {
            name: 'ghost',
            img:   'images/ghost.png'
        },
        {
            name:'mario',
            img:   'images/mario.png'
        },
        {
            name:'metalgear',
            img:   'images/metalgear.png'
        },
        {
            name: 'pokemon',
            img:  'images/pokemon.png'
        },
        {
            name: 'zelda',
            img:   'images/zelda.png'
        }
    ]
    cardArray.sort(() => 0.5 - Math.random())

    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('result')
    let cardsChosen = []
    let cardsChosenId = []
    let cardsWon = []

    //create board 
    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            const card = document.createElement('img')
            card.setAttribute('src', 'images/blank.png')
            card.setAttribute('data-id', i)
            card.addEventListener('click', flipCard)
            grid.appendChild(card)
        }
    }
//check for matches
function checkForMatch() {
    const cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1]

    if(optionOneId == optionTwoId) {
    cards[optionOneId].setAttribute('src', 'images/blank.png')
    cards[optionTwoId].setAttribute('src', 'images/blank.png')
    alert('You have clicked the same image!')
}
else if (cardsChosen[0] == cardsChosen[1]) {
    alert('Your not wrong!')
    cards[optionOneId].setAttribute('src', 'images/blank.png')
    cards[optionTwoId].setAttribute('src', 'images/blank.png')
    cards[optionOneId].removeEventListener('click', flipCard)
    cards[optionTwoId].removeEventListener('click', flipCard)
    cardsWon.push(cardsChosen)
} else {
    cards[optionOneId].setAttribute('src', 'images/blank.png')
    cards[optionTwoId].setAttribute('src', 'images/blank.png')
    alert('Sorry, No Dice!')
}
cardsChosen = []
cardsChosenId = []
resultDisplay.textContent = cardsWon.length
if (cardsWon.length === cardsArray.length/2)
    resultDisplay.textContent = 'Congratulations! You caught them all!'
}

//flip your card 
function flipCard() {
    const cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenId.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    if (cardsChosen.length === 2) {
        setTimeout(checkForMatch, 500)
}
}
createBoard()
})