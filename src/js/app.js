import { Game } from './game.js';
import { themes } from './themes.js';

const board = document.querySelector('.board');
const gameStartModal = document.querySelector('.modal');
const gameStartButton = document.querySelector('.modal__button');
const gameStartTitle = document.querySelector('.modal__title');
const themeSwitcher = document.querySelector('.theme-switcher');

const game = new Game(
  themes.got,
  board,
  gameStartModal,
  gameStartButton,
  gameStartTitle,
);

if (themeSwitcher) {
  themeSwitcher.addEventListener('change', (e) => {
    const selectedTheme = themes[e.target.value];
    if (selectedTheme) {
      game.setTheme(selectedTheme);
      game.init();
    }
  });
}

export default game;

export const fixViewportHeight = () => {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
  window.addEventListener('resize', () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  });
};
