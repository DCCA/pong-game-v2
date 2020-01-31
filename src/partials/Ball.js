import {
	SVG_NS,
	BALL_COLOR,
	BALL_SPEED,
	BALL_BOUNCE_SPEED,
	BALL_STARTING_ANGLE_LIMIT
} from '../settings';

// Ball.js
export default class Ball {
	constructor(radius, boardWidth, boardHeight) {
		this.radius = radius;
		this.boardWidth = boardWidth;
		this.boardHeight = boardHeight;
		// Randomize the start Math.sign(Math.random() - 0.5);
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
		this.vx =
			(BALL_SPEED / 2 + BALL_STARTING_ANGLE_LIMIT - Math.abs(this.vy)) *
			this.direction;
	}

	wallCollision() {
		if (this.y - this.radius <= 0 || this.y + this.radius >= this.boardHeight) {
			this.vy = this.vy * -BALL_BOUNCE_SPEED;
		}
	}

	sideCollision() {
		if (this.x + this.radius >= this.boardWidth || this.x - this.radius <= 0) {
			this.vx = this.vx * -1;
		}
	}

	ballMove() {
		this.x += this.vx;
		this.y += this.vy;
	}

	render(svg, players) {
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
		this.wallCollision();
		this.sideCollision();
		// Check players collisions
		const playersTrack = players;
		// console.log(playersTrack);
	}
}
