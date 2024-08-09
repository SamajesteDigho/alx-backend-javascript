export default class Car {
  constructor(brand, motor, color) {
    this.brand = brand;
    this.motor = motor;
    this.color = color;
  }

  get brand() {
    return this._brand;
  }

  get motor() {
    return this._motor;
  }

  get color() {
    return this._color;
  }

  set brand(brand) {
    if (typeof brand == 'string') {
      this._brand = brand;
    } else {
      throw new Error('Brand must be of type string');
    }
  }

  set motor(motor) {
    if (typeof motor == 'string') {
      this._motor = motor;
    } else {
      throw new Error('Motor must be of type string');
    }
  }

  set color(color) {
    if (typeof color == 'string') {
      this._color = color;
    } else {
      throw new Error('Color must be of type string');
    }
  }

  cloneCar() {
    return new this.constructor(this.brand, this.motor, this.color);
  }
}
