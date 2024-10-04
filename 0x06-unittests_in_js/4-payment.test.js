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
    sinon.stub(Utils, 'calculateNumber').returns(10);
    sendPaymentRequestToApi('SUM', 100, 20);
    expect(spyConsole.calledWith(`The total is: 10`)).to.be.true;
  });
});
