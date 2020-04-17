export class Game {
  constructor(cardsImages, board) {
    this.cardsImages = cardsImages.concat(cardsImages);
    this.board = board;
    this.board.onclick = this.onClick.bind(this);
    this.animationDuration = 1250;

    this.state = {
      isBoardDisabled: false,
      isFlipped: false,
      firstCard: null,
      secondCard: null,
      pairs: 0,
    };
  }

  init() {
    this.board.innerHTML = '';
    this.state.pairs = 0;
    this.renderCards();
  }

  renderCards() {
    const cards = this.cardsImages.map(this.createCard);
    this.shuffleCards(cards);
    this.board.append(...cards);
  }

  createCard(cardImg) {
    const card = document.createElement('div');
    card.classList.add('card');
    card.dataset.hero = `${cardImg}`;
    card.innerHTML = `
			<div class="card__back"></div>
			<img class="card__front" src="./src/img/${cardImg}.jpg">
		`;
    return card;
  }

  shuffleCards(cards) {
    return cards.sort(() => 0.5 - Math.random());
  }

  onClick({ target }) {
    if (
      !target.classList.contains('card__back') ||
      target.parentNode.classList.contains('card--hidden') ||
      this.state.isBoardDisabled
    ) {
      return;
    }
    const currentCard = target.parentNode;
    currentCard.classList.add('card--flip');
    if (!this.state.isFlipped) {
      this.state.isFlipped = true;
      this.state.firstCard = currentCard;
    } else {
      this.state.secondCard = currentCard;
      this.state.isBoardDisabled = true;
      this.checkCards();
    }
  }

  checkCards() {
    const isPair =
      this.state.firstCard.dataset.hero ===
      this.state.secondCard.dataset.hero;
    if (isPair) {
      this.hideCards();
    } else {
      this.unFlipCards();
    }
  }

  hideCards() {
    setTimeout(() => {
      this.state.firstCard.classList.add('card--hidden');
      this.state.secondCard.classList.add('card--hidden');
      this.resetState();
      this.state.pairs++;
      this.checkWin();
    }, this.animationDuration);
  }

  unFlipCards() {
    setTimeout(() => {
      this.state.firstCard.classList.remove('card--flip');
      this.state.secondCard.classList.remove('card--flip');
      this.resetState();
    }, this.animationDuration);
  }

  resetState() {
    this.state = Object.assign({}, this.state, {
      firstCard: null,
      secondCard: null,
      isFlipped: false,
      isBoardDisabled: false,
    });
  }

  checkWin() {
    if (this.state.pairs == 6) {
      this.init();
    }
  }
}
