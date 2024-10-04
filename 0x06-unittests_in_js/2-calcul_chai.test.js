const chai = require('chai');

const expect = chai.expect;
const calculateNumber = require('./2-calcul_chai');

describe('test cases', () => {
  it('rounded typed', () => {
    expect(calculateNumber('SUM', 1.4, 4.5)).to.deep.equal(6);
    expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.deep.equal(-4);
    expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.deep.equal(0.2);
    expect(calculateNumber('DIVIDE', 1.4, 0)).to.deep.equal('Error');
  });
});
