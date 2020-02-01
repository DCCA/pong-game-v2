import { SVG_NS, BOARD_COLOR, ELEM_COLOR, WIN_SCORE } from '../settings';
import { truncate } from 'fs';

export default class Board {
	constructor(width, height) {
		this.width = width;
		this.height = height;
		this.background = BOARD_COLOR;
		this.matchPoint = false;
	}

	render(svg, matchPoint) {
		// Create the rectangle element
		const rect = document.createElementNS(SVG_NS, 'rect');
		rect.setAttributeNS(null, 'x', 0);
		rect.setAttributeNS(null, 'y', 0);
		rect.setAttributeNS(null, 'rx', 10);
		rect.setAttributeNS(null, 'ry', 10);
		rect.setAttributeNS(null, 'width', this.width);
		rect.setAttributeNS(null, 'height', this.height);
		rect.setAttributeNS(null, 'fill', this.background);
		rect.setAttributeNS(null, 'stroke', ELEM_COLOR);
		rect.setAttributeNS(null, 'stroke-width', 4);
		// Append the rectangle
		svg.appendChild(rect);

		// Create the line element
		const line = document.createElementNS(SVG_NS, 'line');
		line.setAttributeNS(null, 'x1', this.width / 2);
		line.setAttributeNS(null, 'y1', 0);
		line.setAttributeNS(null, 'x2', this.width / 2);
		line.setAttributeNS(null, 'y2', this.height);
		line.setAttributeNS(null, 'stroke', ELEM_COLOR);
		line.setAttributeNS(null, 'stroke-width', 4);
		line.setAttributeNS(null, 'stroke-dasharray', '10 4');
		// Append the line
		svg.appendChild(line);
		// If match point, create text
		if (!!matchPoint) {
			this.background = 'red';
			rect.setAttributeNS(null, 'fill', this.background);

			const text = document.createElementNS(SVG_NS, 'text');
			text.setAttributeNS(null, 'x', this.width / 2);
			text.setAttributeNS(null, 'y', this.height - 40);
			text.setAttributeNS(null, 'font-size', 40);
			text.setAttributeNS(null, 'text-anchor', 'middle');
			text.setAttributeNS(null, 'fill', ELEM_COLOR);
			text.textContent = 'MATCH POINT';
			svg.appendChild(text);
		}
	}
}
