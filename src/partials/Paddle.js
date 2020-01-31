import { SVG_NS, ELEM_COLOR } from '../settings';

export default class Paddle {
	constructor(boardHeight, width, height, x, y) {
		this.boardHeight = boardHeight;
		this.width = width;
		this.height = height;
		this.x = x;
		this.y = y;
		this.speed = 10;
		this.score = 0;
	}
	// Methods
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
