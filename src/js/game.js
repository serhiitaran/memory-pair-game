export class Game {
  constructor(cardsImages, board) {
    this.cardsImages = cardsImages.concat(cardsImages);
    this.board = board;
    this.board.onclick = this.onClick.bind(this);
  }

  init() {
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
    if (!target.classList.contains('card__back')) {
      return;
    }
    const currentCard = target.parentNode;
    currentCard.classList.add('card--flip');
  }
}
