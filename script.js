document.addEventListener('DOMContentLoaded', () => {
  const cardArray = [
    {
      name: 'cheeseburger',
      img: './images/cheeseburger.png',
    },

    {
      name: 'cheeseburger',
      img: './images/cheeseburger.png',
    },
    {
      name: 'fries',
      img: './images/fries.png',
    },

    {
      name: 'fries',
      img: './images/fries.png',
    },
    {
      name: 'hotdog',
      img: './images/hotdog.png',
    },

    {
      name: 'hotdog',
      img: './images/hotdog.png',
    },
    {
      name: 'ice-cream',
      img: './images/ice-cream.png',
    },

    {
      name: 'ice-cream',
      img: './images/ice-cream.png',
    },
    {
      name: 'milkshake',
      img: './images/milkshake.png',
    },

    {
      name: 'milkshake',
      img: './images/milkshake.png',
    },
    {
      name: 'pizza',
      img: './images/pizza.png',
    },

    {
      name: 'pizza',
      img: './images/pizza.png',
    },
  ];

  cardArray.sort(() => 0.5 - Math.random());

  const grid = document.getElementById('grid');
  const scoreElement = document.getElementById('score');
  let cardChoose = [];
  let cardIds = [];
  let score = 0;

  const drawGrid = () => {
    for (let i = 0; i < cardArray.length; i++) {
      let card = document.createElement('img');
      card.setAttribute('src', './images/blank.png');
      card.setAttribute('data-id', i);
      card.addEventListener('click', flipCard);

      grid.appendChild(card);
    }
  };

  // Flip card
  function flipCard() {
    var cardId = this.getAttribute('data-id');
    cardChoose.push(cardArray[cardId].name);
    cardIds.push(cardId);
    this.setAttribute('src', cardArray[cardId].img);
    // It hon 2

    if (cardChoose.length === 2) {
      setTimeout(checkForMatch, 500);
    }
    if (cardChoose.length > 2) {
      alert('Bạn Nhấn quá nhanh');
      this.setAttribute('src', './images/blank.png');
    }
  }

  //   Check for Match
  const checkForMatch = () => {
    const cards = document.querySelectorAll('img');
    let card1 = cardChoose[0];
    let card2 = cardChoose[1];
    let card1Id = cardIds[0];
    let card2Id = cardIds[1];

    if (card1Id === card2Id) {
      alert('Bạn click cùng một hình');
      cards[card1Id].setAttribute('src', './images/blank.png');
    } else if (card1 === card2) {
      //   alert('Giống Nhau');
      score++;
      scoreElement.innerText = score;
      cards[card1Id].setAttribute('src', './images/white.png');
      cards[card1Id].style.pointerEvents = 'none';
      cards[card2Id].setAttribute('src', './images/white.png');
      cards[card2Id].style.pointerEvents = 'none';
    } else if (card1Id === card2Id) {
      alert('Bạn click cùng một hình');
    } else {
      //   alert('Không giông nhau');
      cards[card1Id].setAttribute('src', './images/blank.png');

      cards[card2Id].setAttribute('src', './images/blank.png');
    }
    cardChoose = [];
    cardIds = [];

    if (score === cardArray.length / 2) {
      alert('Chúc Mừng Bạn Đã Chiến Thắng');
    }
  };

  //   New Game

  drawGrid();
});
