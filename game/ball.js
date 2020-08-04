import { gameOver } from './main.js'
import { canvas, ctx } from './canvas.js'
import { paddleWidth, paddleX } from './paddle.js'

const ballRadius = 10;
export let x = canvas.width/2;
export let y = canvas.height-30;
export let dx = 2;
export let dy = -2;

export const setDy = (value) => dy = value;

var lives = 3;


export const drawLives = () => {
    ctx.font = "16px Arial";
    ctx.fillStyle = "#0095DD";
    ctx.fillText("Lives: "+lives, canvas.width-65, 20);
}


export const drawBall = () => {
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI*2);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}

export const updateBallPosition = () => {
    if(x + dx > canvas.width-ballRadius || x + dx < ballRadius) {
        dx = -dx;
    }
    if(y + dy < ballRadius) {
        dy = -dy;
    }
    else if(y + dy > canvas.height-ballRadius) {
        if(x > paddleX && x < paddleX + paddleWidth) {
            dy = -dy;
        }
        else {
            lives--;
            if(!lives) {
                alert("GAME OVER");
                document.location.reload();
                clearInterval(interval);
            }
            else {
                x = canvas.width/2;
                y = canvas.height-30;
                dx = 2;
                dy = -2;
                paddleX = (canvas.width-paddleWidth)/2;
            }
        }
    }

    x += dx;
    y += dy;
}