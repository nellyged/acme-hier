const expect = require('chai').expect;
//this is looking for atleast one of the functions or objects to test in the deignated file
const showManagementStructure = require('./acme');

describe('showManagementStructure', () => {
  it('exists', () => {
    expect(showManagementStructure).to.be.ok;
  });
  it('exists', () => {
    const users = [
      { id: 1, name: 'moe' },
      { id: 2, name: 'larry', managerId: 1 },
      { id: 3, name: 'curly', managerId: 2 },
      { id: 4, name: 'shep', managerId: 1 },
      { id: 5, name: 'groucho', managerId: 4 },
    ];
    expect(new showManagementStructure(users)).to.be.ok;
  });
});
