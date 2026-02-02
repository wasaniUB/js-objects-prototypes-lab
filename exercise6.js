const person = {
    species: 'Human',
    breathe() {
        return('Breathing...');
    }
};

const employee = Object.create(person);
employee.company = 'Tech Corp';
employee.position = 'Developer';

const manager = Object.create(employee);
manager.department = 'Engineering';
manager.team = [];

manager.addTeamMember = function(name) {
    this.team.push(name);
};
// The prototype chain is as follows:
// manager -> employee -> person -> Object.prototype -> null