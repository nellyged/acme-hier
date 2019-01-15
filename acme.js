//Ask why this must be in the file in order for the test to pick up
class acme {
  constructor(test) {
    this.test = test;
  }
}
let showManagementStructure = arr => {
  return arr.forEach(element => {
    if (!Object.keys(element).includes('managerId')) {
      //if there is no manager Id then this is the top level
      console.log(element['name']);
    } else if (element.managerId === 1) {
      console.log(` - ${element['name']}`);
    } else {
      //we can traverse the arr and determine what level this item should be at
      //the recursive part comes in if we want to actually rearrange the array around to print children under the correct parent
      arr.forEach(element2 => {
        if (element.managerId === element2.id) {
          console.log(`          - ${element['name']}`);
        }
      });
    }
  });
};
let testFunc = () => {};

const users = [
  { id: 1, name: 'moe' },
  { id: 2, name: 'larry', managerId: 1 },
  { id: 3, name: 'curly', managerId: 2 },
  { id: 4, name: 'shep', managerId: 1 },
  { id: 5, name: 'groucho', managerId: 4 },
];

showManagementStructure(users);

//this is looking for the function or object to test
//at least one of the functions or objects has to have the same name as the file in order to export ? (question to ask in class)
module.exports = acme;
