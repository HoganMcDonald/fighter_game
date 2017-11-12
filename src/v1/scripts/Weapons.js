class Weapon {
  constructor(x, y, damage, range) {
    this.x = x;
    this.y = y;

    this.damage = damage;
    this.combo = 0;
    this.multiplier = 1;
  }

  attack() {
    this.multiplier = 1 + this.combo / 10;
    this.combo ++;
    return this.damage *= this.multiplier;
  }
}
