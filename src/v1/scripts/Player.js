class Player {
  constructor() {
    this.x = width/2;
    this.y = height/4 * 3;
    this.diameter = 20;
    this.hp = 100;
    this.color = 'teal';

    this.speed = 0;
    this.direction = 'up';

  }

  changeDirection(direction) {
    this.direction = direction;
  }

  move() {
    this.speed = 5;
    switch (this.direction) {
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
        break;
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

  update() {

  }
}
