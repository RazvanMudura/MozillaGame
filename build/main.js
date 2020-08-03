import { clearCanvas } from '../canvas.js';
import { drawBall, updateBallPosition, drawLives } from '../ball.js';
import { drawPaddle, updatePaddlePosition } from '../paddle.js';
import { drawBricks, collisionDetection } from '../bricks.js';
import { score, drawScore } from '../score.js';

function draw() {
  clearCanvas();
  drawBall();
  drawPaddle();
  drawBricks();
  collisionDetection();
  drawScore();
  drawLives();
  updateBallPosition();
  updatePaddlePosition();
}

export let interval = setInterval(draw, 10);
export const gameOver = () => {
  console.log('Game Over');
  clearInterval(interval);
};