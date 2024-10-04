const chai = require('chai');
const sinon = require('sinon');
const { calculateNumber } = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

const expect = chai.expect;

describe('test cases', () => {
  it('test the rounding', () => {
    const spy = sinon.spy(console, 'log');
    const res = calculateNumber('SUM', 100, 20);
    sendPaymentRequestToApi(100, 20);
    expect(spy.calledWith(`The total is: ${res}`)).to.be.true;
  });
});
