export default class Currency {
  constructor(code, name) {
    this.code = code;
    this.name = name;
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
      throw new Error('Name must be of type string');
    }
  }

  set code(code) {
    if (typeof code == 'string') {
      this._code = code;
    } else {
      throw new Error('Code must be of type string');
    }
  }

  displayFullCurrency() {
    return `${this.name} (${this.code})`;
  }
}
