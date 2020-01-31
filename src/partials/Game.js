import { SVG_NS, PADDLE_GAP, PADDLE_WIDTH, PADDLE_HEIGHT } from '../settings';
import Board from './Board';
import Paddle from './Paddle';
import Ball from './Ball';

export default class Game {
	constructor(element, width, height) {
		this.element = element;
		this.width = width;
		this.height = height;
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
			this.height / 2 - PADDLE_HEIGHT / 2
		);
		this.paddleP2 = new Paddle(
			this.height,
			PADDLE_WIDTH,
			PADDLE_HEIGHT,
			this.width - 8 - PADDLE_GAP,
			this.height / 2 - PADDLE_HEIGHT / 2
		);
		// Create Ball
		this.ball = new Ball(10, this.width, this.height);
	}

	render() {
		// Create the game SVG element
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
		this.ball.render(svg);
	}
}
