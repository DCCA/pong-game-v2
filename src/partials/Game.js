import {
	SVG_NS,
	PADDLE_GAP,
	PADDLE_WIDTH,
	PADDLE_HEIGHT,
	BALL_RADIUS,
	PADDLE_SPEED,
	KEYS
} from '../settings';
import Board from './Board';
import Paddle from './Paddle';
import Ball from './Ball';
import Score from './Score';

export default class Game {
	constructor(element, width, height) {
		this.element = element;
		this.width = width;
		this.height = height;
		this.paused = false;
		// Get the ID from HTML to render the game
		this.gameElement = document.getElementById(this.element);
		// Create the board
		this.board = new Board(this.width, this.height);
		// Create paddles (boardHeight, width, height, x, y)
		this.paddleP1 = new Paddle(
			this.height,
			PADDLE_WIDTH,
			PADDLE_HEIGHT,
			PADDLE_GAP,
			(this.height - PADDLE_HEIGHT) / 2,
			KEYS.p1Up,
			KEYS.p1Down
		);
		this.paddleP2 = new Paddle(
			this.height,
			PADDLE_WIDTH,
			PADDLE_HEIGHT,
			this.width - (PADDLE_WIDTH + PADDLE_GAP),
			(this.height - PADDLE_HEIGHT) / 2,
			KEYS.p2Up,
			KEYS.p2Down
		);
		// Create Ball
		this.ball = new Ball(BALL_RADIUS, this.width, this.height);
		// Create score constructor(x, y, size)
		this.score = new Score(this.width / 2 - 40, 30, 20);
		// Add event listener for pause
		document.addEventListener('keydown', event => {
			if (event.key === KEYS.paused) {
				this.paused = !this.paused;
				if (this.paused === true) {
					this.paddleP1.setSpeed(0);
					this.paddleP2.setSpeed(0);
				} else {
					this.paddleP1.setSpeed(PADDLE_SPEED);
					this.paddleP2.setSpeed(PADDLE_SPEED);
				}
			}
		});
	}

	render() {
		// Create the game SVG element
		if (this.paused === false) {
			this.gameElement.innerHTML = '';
			const svg = document.createElementNS(SVG_NS, 'svg');
			svg.setAttributeNS(null, 'width', this.width);
			svg.setAttributeNS(null, 'height', this.height);
			svg.setAttributeNS(null, 'viewBox', `0 0 ${this.width} ${this.height}`);
			this.gameElement.appendChild(svg);
			// Render Board
			this.board.render(svg);
			// Render the paddle for the P1
			this.paddleP1.render(svg);
			// Render the paddle for the P2
			this.paddleP2.render(svg);
			// Render Ball
			this.ball.render(svg, this.paddleP1, this.paddleP2);
			// Render Score
			this.score.render(
				svg,
				`${this.paddleP1.getScore()} vs. ${this.paddleP2.getScore()}`
			);
		}
	}
}
