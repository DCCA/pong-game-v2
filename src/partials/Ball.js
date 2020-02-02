import { SVG_NS, BALL_COLOR, BALL_SPEED, BALL_BOUNCE_SPEED } from '../settings';
import Ping from '../../public/sounds/laser_gun.wav';
import Loser from '../../public/sounds/loser.wav';

// Ball.js
export default class Ball {
	constructor(radius, boardWidth, boardHeight) {
		this.radius = radius;
		this.boardWidth = boardWidth;
		this.boardHeight = boardHeight;
		this.direction = Math.sign(Math.random() - 0.5);
		this.reset();
		this.pingSound = new Audio(Ping);
		this.loserSound = new Audio(Loser);
		this.paddleCollisionCounter = 0;
	}

	reset() {
		this.x = this.boardWidth / 2;
		this.y = this.boardHeight / 2;
		// Set the velocity for the ball
		// Velocity has to be bigger than 0
		this.vy = 0;
		while (this.vy === 0) {
			this.vy = Math.floor(Math.random() * 10 - 5);
		}
		this.vx = this.direction * (6 - Math.abs(this.vy));
		this.paddleCollisionCounter = 0;
	}

	wallCollision(paddleP1, paddleP2) {
		// Check the collision on top and bottom
		if (this.y - this.radius <= 0 || this.y + this.radius >= this.boardHeight) {
			this.vy = this.vy * -BALL_BOUNCE_SPEED;
		}
		// Check collision on right and left side
		if (this.x - this.radius >= this.boardWidth) {
			paddleP1.increaseScore();
			paddleP1.setHeight();
			this.direction = -1;
			this.loserSound.play();
			this.reset();
		} else if (this.x + this.radius <= 0) {
			paddleP2.increaseScore();
			paddleP2.setHeight();
			this.direction = 1;
			this.loserSound.play();
			this.reset();
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
				this.paddleCollisionCounter++;
			}
		} else {
			const p2 = paddleP2.getPaddlePosition();
			const hitLeft = this.x - this.radius >= p2.left;
			const belowTop = this.y + this.radius / 2 >= p2.top;
			const aboveBottom = this.y - this.radius / 2 <= p2.bottom;
			if (hitLeft && belowTop && aboveBottom) {
				this.pingSound.play();
				this.vx = (this.vx + BALL_SPEED * this.paddleCollisionCounter) * -1;
				this.paddleCollisionCounter++;
			}
		}
	}

	ballMove() {
		this.x += this.vx;
		this.y += this.vy;
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
