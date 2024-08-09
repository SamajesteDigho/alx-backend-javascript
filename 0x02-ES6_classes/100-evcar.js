import Car from './10-car';

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this.range = range;
  }

  get range() {
    return this._range;
  }

  set range(range) {
    if (typeof range === 'string') {
      this._range = range;
    } else {
      throw new Error('Range must be a string');
    }
  }

  cloneCar() {
    return new Car(this.brand, this.motor, this.color);
  }
}
