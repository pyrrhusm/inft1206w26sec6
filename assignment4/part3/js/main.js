/**
 * @fileoverview Creating the code for a ball bouncing web program
 * @author Pyrrhus MacKinnon
 * @date 2026-04-13
 * @version 1.0.0
 */

// setup canvas

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

const width = (canvas.width = window.innerWidth);
const height = (canvas.height = window.innerHeight);

// function to generate random number

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// function to generate random color

function randomRGB() {
  return `rgb(${random(0, 255)},${random(0, 255)},${random(0, 255)})`;
}

// Adding the class for the ball

class Ball {
  // Constructor
  constructor(x, y, velX, velY, color, size) {
    this.x = x;
    this.y = y;
    this.velX = velX;
    this.velY = velY;
    this.color = color;
    this.size = size;
  }

  // Drawing the ball
  draw() {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
    ctx.fill();
  }

  
}

const testBall = new Ball(50, 100, 4, 4, "blue", 10);

testBall.x;
testBall.size;
testBall.color;
testBall.draw();