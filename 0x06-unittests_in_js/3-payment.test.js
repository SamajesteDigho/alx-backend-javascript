const chai = require('chai');
const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

const expect = chai.expect;

describe('test cases', () => {
  it('test the rounding', () => {
    const spy = sinon.spy(sendPaymentRequestToApi(100, 20));
    expect(spy).to.deep.equal(Utils.calculateNumber('SUM', 100, 20));
  });
});
