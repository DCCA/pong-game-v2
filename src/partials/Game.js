import { SVG_NS } from '../settings';
import Board from './Board';

export default class Game {
	constructor(element, width, height) {
		this.element = element;
		this.width = width;
		this.height = height;
		// Get the ID from HTML to render the game
		this.gameElement = document.getElementById(this.element);
		// Create the board
		this.board = new Board(this.width, this.height);
	}

	render() {
		// Create the game SVG element
		this.gameElement.innerHTML = '';
		let svg = document.createElementNS(SVG_NS, 'svg');
		svg.setAttributeNS(null, 'width', this.width);
		svg.setAttributeNS(null, 'height', this.height);
		svg.setAttributeNS(null, 'viewBox', `0 0 ${this.width} ${this.height}`);
		this.gameElement.appendChild(svg);
		// Render Board
		this.board.render(svg);
	}
}
