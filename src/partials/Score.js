import { SVG_NS, ELEM_COLOR } from '../settings';

export default class Score {
	constructor(x, y, size) {
		this.x = x;
		this.y = y;
		this.size = size;
	}
	//...
	render(svg, score) {
		const scoreDisplay = document.createElementNS(SVG_NS, 'text');
		scoreDisplay.setAttributeNS(null, 'x', this.x);
		scoreDisplay.setAttributeNS(null, 'y', this.y);
		scoreDisplay.setAttributeNS(null, 'font-size', this.size);
		scoreDisplay.setAttributeNS(null, 'text-anchor', 'middle');
		scoreDisplay.setAttributeNS(null, 'fill', ELEM_COLOR);
		scoreDisplay.textContent = score;
		svg.appendChild(scoreDisplay);
	}
}
