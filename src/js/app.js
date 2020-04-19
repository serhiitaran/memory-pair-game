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
const gameStartModal = document.querySelector('.modal');
const gameStartButton = document.querySelector('.modal__button');
const gameStartTitle = document.querySelector('.modal__title');

export default new Game(
  cardsImages,
  board,
  gameStartModal,
  gameStartButton,
  gameStartTitle,
);

export const fixViewportHeight = () => {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
  window.addEventListener('resize', () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  });
};
