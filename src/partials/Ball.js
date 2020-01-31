import { SVG_NS, BALL_COLOR, BALL_SPEED } from '../settings';

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
		// Set the velocity for the ball
		this.vy = 0;
		while (this.vy === 0) {
			this.vy = Math.random() * BALL_SPEED - BALL_SPEED / 2;
		}
		this.vx = (6 - Math.abs(this.vy)) * this.direction;
	}

	wallCollision() {
		if (this.y - this.radius <= 0 || this.y + this.radius >= this.boardHeight) {
			this.vy = this.vy * -1;
		}
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
		this.ballMove();
		this.wallCollision();
	}
}
