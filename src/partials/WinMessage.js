import { SVG_NS, ELEM_COLOR } from '../settings';

export default class WinMessage {
	constructor(x, y, size) {
		this.x = x;
		this.y = y;
		this.size = size;
	}
	//...
	render(svg, message) {
		const winMsg = document.createElementNS(SVG_NS, 'text');
		winMsg.setAttributeNS(null, 'x', this.x);
		winMsg.setAttributeNS(null, 'y', this.y);
		winMsg.setAttributeNS(null, 'font-size', this.size);
		winMsg.setAttributeNS(null, 'text-anchor', 'middle');
		winMsg.setAttributeNS(null, 'fill', ELEM_COLOR);
		winMsg.textContent = message;
		svg.appendChild(winMsg);
	}
}
