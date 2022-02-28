document.addEventListener('DOMContentLoaded', () => {
    //card options
    //array of objects
    const cardArray = [
        {
            name: 'fries',
            img: 'src/images/fries.png'
        },
        {
            name: 'cheeseburger',
            img: 'src/images/cheeseburger.png'
        },
        {
            name: 'hotdog',
            img: 'src/images/hotdog.png'
        },
        {
            name: 'ice-cream',
            img: 'src/images/ice-cream.png'
        },
        {
            name: 'pizza',
            img: 'src/images/pizza.png'
        },
        {
            name: 'milkshake',
            img: 'src/images/milkshake.png'
        },
        {
            name: 'fries',
            img: 'src/images/fries.png'
        },
        {
            name: 'cheeseburger',
            img: 'src/images/cheeseburger.png'
        },
        {
            name: 'hotdog',
            img: 'src/images/hotdog.png'
        },
        {
            name: 'ice-cream',
            img: 'src/images/ice-cream.png'
        },
        {
            name: 'pizza',
            img: 'src/images/pizza.png'
        },
        {
            name: 'milkshake',
            img: 'src/images/milkshake.png'
        }
    ]

    

    cardArray.sort(() => 0.5 - Math.random())

    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result')
    let cardChosen = []
    let cardChosenId = []
    let cardsWon = []

    function createBoard() {
        for (let i = 0; i < cardArray.length; i++){
            const card = document.createElement('img')
            card.setAttribute('src', 'src/images/blank.png')
            card.setAttribute('data-id', i)
            card.addEventListener('click', flipCard)
            grid.appendChild(card)
        }
    }

    function checkForMatch() {
        const cards = document.querySelectorAll('img')
        const optionOneId = cardChosenId[0]
        const optionTwoId = cardChosenId[1]

        if (optionOneId == optionTwoId){
            cards[optionOneId].setAttribute('src', 'src/images/blank.png')
            cards[optionTwoId].setAttribute('src', 'src/images/blank.png')
            alert('You have clicked the same image!')
        }   
        else if (cardChosen[0] === cardChosen[1]) {
            alert ('You have found a match!')
            cards[optionOneId].setAttribute('src', 'src/images/white.png')
            cards[optionTwoId].setAttribute('src', 'src/images/white.png')
            cards[optionOneId].removeEventListener('clicks', flipCard)
            cards[optionTwoId].removeEventListener('clicks', flipCard)
            cardsWon.push(cardChosen)
        }   else {
            cards[optionOneId].setAttribute('src', 'src/images/blank.png')
            cards[optionTwoId].setAttribute('src', 'src/images/blank.png')
            alert('Sorry, try again!')
        }
        cardChosen = []
        cardChosenId = []
        resultDisplay.textContent = cardsWon.length
        if (cardsWon.length === cardArray.length / 2){
            resultDisplay.textContent =  'Congratulations! you found them all!'
        }
    }
  

    // function flipCard() {
    //     let cardId = this.getAttribute('data-id')
    //     cardChosen.push(cardArray[cardId].name)
    //     cardChosenId.push(cardId)
    //     this.setAttribute('src', cardArray[cardId].img)
    //     if (cardChosen.length === 2){
    //         setTimeout(checkForMatch, 500)
    //     }
    // }

    function flipCard() {
        let source = this.getAttribute("src");
        if (source == "images/white.png") {
          alert("Card No longer in Play!");
          cardChosen = [];
          cardChosenId = [];
        } else {
          let cardId = this.getAttribute("data-id");
          cardChosen.push(cardArray[cardId].name);
          cardChosenId.push(cardId);
          this.setAttribute("src", cardArray[cardId].img);
          if (cardChosenId.length == 2) {
            setTimeout(checkForMatch, 500);
          }
        }
      }

    createBoard()
})






