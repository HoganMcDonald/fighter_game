const MOVE_KEYS = {
  up: 87,
  down: 83,
  left: 65,
  right: 68
}

let player, enemy;

function  setup() {
  createCanvas(1000, 700);
  player = new Player();
  enemy = new NPC(40, 'orange', 4);
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

  // npc movements
  enemy.follow(player);

  enemy.render();
  player.render();
}
