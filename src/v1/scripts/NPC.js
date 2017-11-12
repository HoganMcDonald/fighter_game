class NPC {
  constructor(size, color, level) {
    this.x = width/2;
    this.y = height/4;
    this.diameter = 40;
    this.color = color;

    this.hit = false;
    this.items = [];

    this.speed = 0;
    this.level(level);
  }

  follow(player) {
    // x
    if (player.x - this.x > 0) { // player to left
      this.move('right');
    } else if (player.x - this.x < 0) { // player to right
      this.move('left');
    } else {
      this.stop();
    }
    // y
    if (player.y - this.y > 0) { // player to up
      this.move('down');
    } else if (player.y - this.y < 0) { // player to down
      this.move('up');
    } else {
      this.stop();
    }
  }

  level(level) {
    this.maxhp = 100;
    this.maxSpeed = 1;
    this.hp = this.maxhp;
    //loop that takes into account level
  }

  move(direction) {
    this.speed = this.maxSpeed;
    switch (direction) {
      case 'up':
        if (this.y - this.speed < 0) {
          this.y = 0;
        } else {
          this.y -= this.speed;
        }
        break;
      case 'down':
        if (this.y + this.speed > height) {
          this.y = height;
        } else {
          this.y += this.speed;
        }
        break;
      case 'left':
        if (this.x - this.speed < 0) {
          this.x = 0;
        } else {
          this.x -= this.speed;
        }
        break;
      case 'right':
        if (this.x + this.speed > height) {
          this.x = height;
        } else {
          this.x += this.speed;
        }
        break;
      default:
        return new Error('invalid direction for movement');
    }
  }

  render() {
    ellipseMode(CENTER);
    fill(this.color);
    ellipse(this.x, this.y, this.diameter, this.diameter);
  }

  stop() {
    this.speed = 0;
  }

}
