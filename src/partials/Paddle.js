import { SVG_NS, ELEM_COLOR, PADDLE_SPEED } from '../settings';

export default class Paddle {
	constructor(boardHeight, width, height, x, y, keyUp, keyDown) {
		this.boardHeight = boardHeight;
		this.width = width;
		this.height = height;
		this.x = x;
		this.y = y;
		this.speed = 10;
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
	moveUp() {
		// Limit the paddle to the top limit of the board
		this.y = Math.max(0, (this.y -= PADDLE_SPEED));
	}
	moveDown() {
		// Limit the paddle to the bottom limit of the board
		this.y = Math.min(this.boardHeight - this.height, (this.y += PADDLE_SPEED));
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
	}
}
