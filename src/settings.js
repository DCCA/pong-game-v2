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
export const PADDLE_SPEED = 20;
/*
 *Ball
 */
export const BALL_COLOR = '#d6db93';
export const BALL_RADIUS = 8;
export const BALL_SPEED = 10;
// Do not increase beyond 0 to .10
export const BALL_BOUNCE_SPEED = 1;
// This value does not let the X velocity value to be 0.
// If it is zero, the ball wound stay bouncing in the middle of the court
export const BALL_STARTING_ANGLE_LIMIT = 1;
/*
 *Controls
 */
export const P1_UP = 'w';
export const P1_DOWN = 's';
export const P2_UP = 'o';
export const P2_DOWN = 'l';
