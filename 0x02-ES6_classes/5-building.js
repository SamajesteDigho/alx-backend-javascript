export default class Building {
  constructor(sqft) {
    this.sqft = sqft;
  }

  get sqft() {
    return this._sqft;
  }

  set sqft(sqft) {
    if (typeof sqft === 'number') {
      this._sqft = sqft;
    } else {
      throw new Error('sqft must be a number');
    }
  }

  evacuationWarningMessage() {
    throw new Error('Class extending Building '
      + `must override evacuationWarningMessage ${this.sqft}`);
  }
}
