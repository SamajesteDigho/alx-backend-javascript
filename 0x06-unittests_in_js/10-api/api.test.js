const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('./api');

const expect = chai.expect;
chai.use(chaiHttp);

describe('test cases', () => {
  it('testing available payment', (done) => {
    chai.request(app)
      .get('/available_payments')
      .end((err, res) => {
        expect(err).to.be.null;
        expect(res.statusCode).to.deep.equal(200);
        expect(res.body).to.have.property('payment_methods');
        expect(res.body.payment_methods).to.have.property('credit_cards', true);
        expect(res.body.payment_methods).to.have.property('paypal', false);
        done();
      });
  });

  it('testing login endpoint', (done) => {
    chai.request(app)
      .post('/login')
      .send({ userName: 'Betty' })
      .end((err, res) => {
        expect(err).to.be.null;
        expect(res.statusCode).to.deep.equal(200);
        expect(res.text).to.deep.equal('Welcome Betty');
        done();
      });
  });
});
