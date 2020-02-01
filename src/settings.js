/*
 *Settings
 */
export const SVG_NS = 'http://www.w3.org/2000/svg';
/* 
Game Configuration 
*/
export const GAME_WIDTH = 512;
export const GAME_HEIGHT = 256;
export const BOARD_COLOR = '#262169';
export const WIN_SCORE = 8;
/*
 *Paddle and Net Color
 */
export const ELEM_COLOR = '#d6db93';
/*
 *Paddles
 */
export const PADDLE_GAP = 10;
export const PADDLE_WIDTH = 8;
export const PADDLE_HEIGHT = 56;
export const PADDLE_MIN_HEIGHT = 14;
export const PADDLE_SPEED = 20;
export const PADDLE_REDUCE = 2;
/*
 *Ball
 */
export const BALL_COLOR = '#d6db93';
export const BALL_RADIUS = 8;
export const BALL_SPEED = 0.25;
// Do not increase beyond 0 to .10
export const BALL_BOUNCE_SPEED = 1;
/*
 *Controls
 */
export const KEYS = {
	p1Up: 'w',
	p1Down: 's',
	p2Up: 'o',
	p2Down: 'l',
	paused: ' '
};
