const chai = require('chai');
const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

const expect = chai.expect;

describe('test cases', () => {
  let spyConsole;

  beforeEach(() => {
    spyConsole = sinon.spy(console, 'log');
  });

  afterEach(() => {
    spyConsole.restore();
  });

  it('test the rounding', () => {
    const res = Utils.calculateNumber('SUM', 100, 20);
    sendPaymentRequestToApi(100, 20);
    expect(spyConsole.calledWith(`The total is: ${res}`)).to.be.true;
  });
});
