export default class Airport {
  constructor(name, code) {
    this.name = name;
    this.code = code;
  }

  get name() {
    return this._name;
  }

  get code() {
    return this._code;
  }

  set name(name) {
    if (typeof name == 'string') {
      this._name = name;
    } else {
      throw new Error('Name must be a string');
    }
  }

  set code(code) {
    if (typeof code == 'string') {
      this._code = code;
    } else {
      throw new Error('Code must be a string');
    }
  }

  toString() {
    return `[object ${this.code}]`;
  }
}
