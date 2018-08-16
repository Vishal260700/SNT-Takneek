let spritesheet;
let spritedata;

let animation = [];

let horses = [];

function preload() {
  spritedata = loadJSON('../js/horse.json');
  spritesheet = loadImage('../img/horse.png');
}


function setup() {
  bg = loadImage("../img/robo.jpg");
  createCanvas(windowWidth/(1.3), windowHeight/(1.4));
  let frames = spritedata.frames;
  for (let i = 0; i < frames.length; i++) {
    let pos = frames[i].position;
    let img = spritesheet.get(pos.x, pos.y, pos.w, pos.h);
    animation.push(img);
  }

  for (let i = 0; i < 6; i++) {
    horses[i] = new Sprite(animation, 0, i * 75, random(0.2, 0.5));
  }
}

function draw() {
  background(bg);
  for (let horse of horses) {
    horse.show();
    horse.animate();
  }

}