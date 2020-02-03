import {
	SVG_NS,
	ELEM_COLOR,
	PADDLE_SPEED,
	PADDLE_GAP,
	PADDLE_REDUCE,
	PADDLE_MIN_HEIGHT
} from '../settings';

export default class Paddle {
	constructor(boardHeight, width, height, x, y, keyUp, keyDown) {
		this.boardHeight = boardHeight;
		this.width = width;
		this.height = height;
		this.x = x;
		this.y = y;
		this.speed = PADDLE_SPEED;
		this.score = 0;
		// Add event listeners for keypress
		document.addEventListener('keydown', event => {
			switch (event.key) {
				case keyUp:
					this.moveUp();
					break;
				case keyDown:
					this.moveDown();
					break;
				default:
			}
		});
	}
	// Methods
	getPaddlePosition() {
		const position = {
			top: this.y,
			left: this.x - PADDLE_GAP,
			bottom: this.y + this.height,
			right: this.x + this.width + PADDLE_GAP
		};
		return position;
	}
	// Set speed value
	setSpeed(value) {
		this.speed = value;
	}
	// Set the movement for the paddles
	moveUp() {
		// Limit the paddle to the top limit of the board
		this.y = Math.max(0, (this.y -= this.speed));
	}
	moveDown() {
		// Limit the paddle to the bottom limit of the board
		this.y = Math.min(this.boardHeight - this.height, (this.y += this.speed));
	}
	// Get score of the paddles
	getScore() {
		return this.score;
	}

	resetScore() {
		this.score = 0;
	}

	increaseScore() {
		this.score += 1;
	}
	// Set paddle height
	setHeight() {
		this.height = Math.max(
			this.height - PADDLE_REDUCE * this.score,
			PADDLE_MIN_HEIGHT
		);
		return this.height;
	}

	render(svg) {
		// Create the rectangle element
		const rect = document.createElementNS(SVG_NS, 'rect');
		rect.setAttributeNS(null, 'x', this.x);
		rect.setAttributeNS(null, 'y', this.y);
		rect.setAttributeNS(null, 'width', this.width);
		rect.setAttributeNS(null, 'height', this.height);
		rect.setAttributeNS(null, 'fill', ELEM_COLOR);
		// Append the rectangle
		svg.appendChild(rect);
		//
	}
}
