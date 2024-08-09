export default class HolbertonClass {
  constructor(size, location) {
    this.size = size;
    this.location = location;
  }

  get size() {
    return this._size;
  }

  get location() {
    return this._location;
  }

  set size(size) {
    if (typeof size === 'number') {
      this._size = size;
    } else {
      throw new Error('Size must be a number');
    }
  }

  set location(location) {
    if (typeof location === 'string') {
      this._location = location;
    } else {
      throw new Error('Location must be a string');
    }
  }

  toString() {
    return this.location;
  }

  valueOf() {
    return this.size;
  }
}
