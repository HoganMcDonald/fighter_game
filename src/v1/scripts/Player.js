class Player {
  constructor() {
    this.x = width/2;
    this.y = height/4 * 3;
    this.diameter = 20;
    this.color = 'teal';

    this.hit = false;
    this.hp = 100;
    this.maxhp = 100;
    this.items = [];

    this.speed = 0;
    this.maxSpeed = 2;
    this.direction = 'up';
  }

  changeDirection(direction) {
    this.direction = direction;
  }

  // returns true if still alive
  // returns false if dead
  damage(amount) {
    if (this.hp - amount <= 0) {
      return false;
    } else {
      this.hp -= amount;
      return true;
    }
  }

  // returns true if item was usable
  // returns false if wasn't consumed
  heal(amount) {
    if (this.hp === this.maxhp) {
      return false;
    } else if (this.hp + amount > this.maxhp) {
      this.hp = this.maxhp;
      return true;
    } else {
      this.hp += amount;
      return true;
    }
  }

  move() {
    this.speed = this.maxSpeed;
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
        if (this.x + this.speed > width) {
          this.x = width;
        } else {
          this.x += this.speed;
        }
        break;
      default:
        return new Error('invalid direction for movement');
    }
  }

  raiseMaxhp(amount) {
    if (this.hp > 0) {
      this.maxhp += amount;
      this.hp += amount;
    } else {
      return new Error('player has no hp');
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
