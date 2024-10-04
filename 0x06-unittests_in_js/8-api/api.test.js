const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('./api');

const expect = chai.expect;

chai.use(chaiHttp);

describe('test cases', () => {
  it('checking index suite', (done) => {
    chai.request(app)
      .get('/')
      .end((err, res) => {
        if (err) {
          done(err);
        }
        expect(res.text).to.deep.equal('Welcome to the payment system');
        expect(res.statusCode).to.deep.equal(200);
        done();
      });
  });
});
