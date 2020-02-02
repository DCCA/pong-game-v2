import './styles/game.css';
import Game from './partials/Game';
import { GAME_HEIGHT, GAME_WIDTH, KEYS } from './settings';

// create a game instance
const game = new Game('game', GAME_WIDTH, GAME_HEIGHT);
const p1Up = document.getElementById('p1-up');
const p1down = document.getElementById('p1-down');
const p2Up = document.getElementById('p2-up');
const p2Down = document.getElementById('p2-down');
const pause = document.getElementById('pause');
p1Up.textContent = KEYS.p1Up;
p2Up.textContent = KEYS.p2Up;
p1down.textContent = KEYS.p1Down;
p2Down.textContent = KEYS.p2Down;
pause.textContent = 'space bar';

(function gameLoop() {
	game.render();
	requestAnimationFrame(gameLoop);
})();
