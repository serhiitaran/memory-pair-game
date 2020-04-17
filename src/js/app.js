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

export const fixViewportHeight = () => {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
  window.addEventListener('resize', () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  });
};
