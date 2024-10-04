const chai = require('chai');
const getPaymentTokenFromAPI = require('./6-payment_token');

const expect = chai.expect;

describe('getPaymentTokenFromAPI', () => {
  it('lets test', (done) => {
    getPaymentTokenFromAPI(true)
      .then((response) => {
        expect(response).to.have
          .property('data', 'Successful response from the API');
        done();
      })
      .catch((error) => {
        done(error);
      });
  });
});
