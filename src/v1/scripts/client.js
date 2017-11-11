const MOVE_KEYS = {
  up: 87,
  down: 83,
  left: 65,
  right: 68
}

let player;

function  setup() {
  createCanvas(1000, 700);
  player = new Player();
}

function draw() {
  background(20);

  // handle movements
  if (keyIsPressed) {
    for (var direction in MOVE_KEYS) {
      if (keyIsDown(MOVE_KEYS[direction])) {
        player.changeDirection(direction);
        player.move();
      }
    }
  } else {
    player.stop();
  }




  player.render();
}
