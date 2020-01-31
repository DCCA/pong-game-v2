import { SVG_NS, BALL_COLOR } from '../settings';

// Ball.js
export default class Ball {
	constructor(radius, boardWidth, boardHeight) {
		this.radius = radius;
		this.boardWidth = boardWidth;
		this.boardHeight = boardHeight;
		this.direction = 1;
		this.reset();
	}

	reset() {
		this.x = this.boardWidth / 2;
		this.y = this.boardHeight / 2;
		this.vy = 0;
		// Set the movement algorithms for the ball
		while (this.vy === 0) {
			this.vy = Math.random() * 10 - 5;
		}
		this.vx = (6 - Math.abs(this.vy)) * this.direction;
	}

	ballMove() {
		this.x += this.vx;
		this.y += this.vy;
	}

	render(svg) {
		const ball = document.createElementNS(SVG_NS, 'circle');
		ball.setAttributeNS(null, 'cx', this.x);
		ball.setAttributeNS(null, 'cy', this.y);
		ball.setAttributeNS(null, 'r', this.radius);
		ball.setAttributeNS(null, 'fill', BALL_COLOR);
		svg.appendChild(ball);
	}
}
