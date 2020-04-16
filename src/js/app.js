import { Game } from './game.js';

const cardsImages = [
  'arya',
  'сersei',
  'deyeneris',
  'jaime',
  'snow',
  'tyrion',
];
const board = document.querySelector('.board');

export default new Game(cardsImages, board);
