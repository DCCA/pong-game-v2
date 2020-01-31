import { SVG_NS, BALL_COLOR } from '../settings';

// Ball.js
export default class Ball {
	constructor(radius, boardWidth, boardHeight) {
		this.radius = radius;
		this.boardWidth = boardWidth;
		this.boardHeight = boardHeight;
		this.direction = 1;
	}
	render(svg) {
		const ball = document.createElementNS(SVG_NS, 'circle');
		ball.setAttributeNS(null, 'cx', this.boardWidth / 2);
		ball.setAttributeNS(null, 'cy', this.boardHeight / 2);
		ball.setAttributeNS(null, 'r', this.radius);
		ball.setAttributeNS(null, 'fill', BALL_COLOR);
		svg.appendChild(ball);
	}
}
