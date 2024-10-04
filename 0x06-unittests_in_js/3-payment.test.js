const chai = require('chai');
const sinon = require('sinon');
const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');

const expect = chai.expect;

describe('test cases', () => {
  it('test the rounding', () => {
    const spy = sinon.spy(sendPaymentRequestToApi(100, 20));
    expect(spy).to.deep.equal(Utils.calculateNumber(100, 20));
  });
});
