const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('./api');

const expect = chai.expect;

chai.use(chaiHttp);

describe('test cases', () => {
  it('checking card id success', (done) => {
    chai.request(app)
      .get('/card/12')
      .end((_, res) => {
        expect(res.text).to.deep.equal('Payment methods for cart 12');
        expect(res.statusCode).to.deep.equal(200);
        done();
      });
  });

  it('checking card id failure', (done) => {
    chai.request(app)
      .get('/card/hello')
      .end((_, res) => {
        expect(res.statusCode).to.deep.equal(404);
        done();
      });
  });
});
