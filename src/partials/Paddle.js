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
		if (this.y <= 0) {
			this.y;
		} else {
			this.y -= PADDLE_SPEED;
		}
	}
	moveDown() {
		if (this.y >= this.boardHeight - this.height) {
			this.y;
		} else {
			this.y += PADDLE_SPEED;
		}
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
