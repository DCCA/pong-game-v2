import {
	SVG_NS,
	BALL_COLOR,
	BALL_SPEED,
	BALL_BOUNCE_SPEED,
	BALL_STARTING_ANGLE_LIMIT
} from '../settings';
import Ping from '../../public/sounds/pong-01.wav';

// Ball.js
export default class Ball {
	constructor(radius, boardWidth, boardHeight) {
		this.radius = radius;
		this.boardWidth = boardWidth;
		this.boardHeight = boardHeight;
		this.direction = Math.sign(Math.random() - 0.5);
		this.reset();
		this.pingSound = new Audio(Ping);
	}

	reset() {
		this.x = this.boardWidth / 2;
		this.y = this.boardHeight / 2;
		// Set the velocity for the ball
		this.vy = 0;
		while (this.vy === 0) {
			this.vy = Math.ceil(Math.random() * BALL_SPEED - BALL_SPEED / 2);
		}
		this.vx = (6 - Math.abs(this.vy)) * this.direction;
	}

	wallCollision(paddleP1, paddleP2) {
		// Check the collision on top and bottom
		if (this.y - this.radius <= 0 || this.y + this.radius >= this.boardHeight) {
			this.vy = this.vy * -BALL_BOUNCE_SPEED;
		}
		// Check collision on right and left side
		if (this.x - this.radius >= this.boardWidth) {
			paddleP1.increaseScore();
			this.direction = -1;
			this.reset();
			// console.log('P1: ' + paddleP1.score);
		} else if (this.x + this.radius <= 0) {
			paddleP2.increaseScore();
			this.direction = 1;
			this.reset();
			// console.log('P2: ' + paddleP2.score);
		}
	}

	paddleCollision(paddleP1, paddleP2) {
		if (this.vx < 0) {
			const p1 = paddleP1.getPaddlePosition();
			const hitRight = this.x + this.radius <= p1.right;
			const belowTop = this.y + this.radius / 2 >= p1.top;
			const aboveBottom = this.y - this.radius / 2 <= p1.bottom;
			if (hitRight && belowTop && aboveBottom) {
				this.pingSound.play();
				this.vx = this.vx * -1;
			}
		} else {
			const p2 = paddleP2.getPaddlePosition();
			const hitLeft = this.x - this.radius >= p2.left;
			const belowTop = this.y + this.radius / 2 >= p2.top;
			const aboveBottom = this.y - this.radius / 2 <= p2.bottom;
			if (hitLeft && belowTop && aboveBottom) {
				this.pingSound.play();
				this.vx = this.vx * -1;
			}
		}
	}

	ballMove() {
		this.x += this.vx;
		// console.log('vx ' + this.vx);
		this.y += this.vy;
		// console.log('vy' + this.vy);
	}

	render(svg, paddleP1, paddleP2) {
		// Create the ball SVG
		const ball = document.createElementNS(SVG_NS, 'circle');
		ball.setAttributeNS(null, 'cx', this.x);
		ball.setAttributeNS(null, 'cy', this.y);
		ball.setAttributeNS(null, 'r', this.radius);
		ball.setAttributeNS(null, 'fill', BALL_COLOR);
		svg.appendChild(ball);
		// Make ball move
		this.ballMove();
		// Check wall collisions
		this.wallCollision(paddleP1, paddleP2);
		// Check paddle collision
		this.paddleCollision(paddleP1, paddleP2);
	}
}
