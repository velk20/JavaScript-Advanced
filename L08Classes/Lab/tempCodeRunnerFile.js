class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  set radius(value) {
    this._radius = value;
  }

  get radius() {
    return this._radius;
  }

  set diameter(value) {
    this._diameter = value * 2;
  }

  get diameter() {
    return this._diameter;
  }

  get area() {
    return Math.PI * Math.pow(this._diameter / 2, 2);
  }
}