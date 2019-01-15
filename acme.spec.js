const expect = require('chai').expect;
//this is looking for atleast one of the functions or objects to test in the deignated file
const showManagementStructure = require('./acme');
const testFunc = require('./acme');
const acme = require('./acme');

describe('showManagementStructure', () => {
  it('exists', () => {
    expect(showManagementStructure).to.be.ok;
  });
  it('exists', () => {
    expect(testFunc).to.be.ok;
  });
  it('exists', () => {
    expect(acme).to.be.ok;
  });
});
