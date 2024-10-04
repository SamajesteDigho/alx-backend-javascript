const chai = require('chai');
const sinon = require('sinon');
const sendPaymentRequestToApi = require('./5-payment');

const expect = chai.expect;

describe('test cases', () => {
  let spyConsole;

  beforeEach(() => {
    spyConsole = sinon.spy(console, 'log');
  });

  afterEach(() => {
    spyConsole.restore();
  });

  it('api call', () => {
    sendPaymentRequestToApi(100, 20);
    expect(spyConsole.calledWith(`The total is: 120`)).to.be.true;
    expect(spyConsole.calledOnce).to.be.true;
  });

  it('api call again', () => {
    sendPaymentRequestToApi(10, 10);
    expect(spyConsole.calledWith(`The total is: 20`)).to.be.true;
    expect(spyConsole.calledOnce).to.be.true;
  });
});
