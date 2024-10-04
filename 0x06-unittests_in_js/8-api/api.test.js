const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('./api');

const expect = chai.expect;

chai.use(chaiHttp);
chai.should();

describe('test cases', () => {
  it('checking index suite', (done) => {
    chai.request(app).get('/')
      .end((err, res) => {
        expect(res.text).to.equal('Welcome to the payment system');
        done();
      });
  });
});