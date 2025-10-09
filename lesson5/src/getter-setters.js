const newObject = {};
newObject.name = 'Vova';
newObject.age = 27;
newObject.nationality = 'Ukrainian';
newObject.degree = true;
newObject.experience = {
    apiTesting : '5 years',
    mobileTesting: '4 years',
    desktopTesting: '2 years'
};

Object.defineProperties(newObject, {
    objectInfo: {
        get() {
            return `My name is ${this.name}, I am ${this.age}, my nationality is ${this.nationality}, degree: ${this.degree}`;
        }
    },
    updateAge: {
        set(value) {
            this.age = value;
            console.log(`New age is ${value}`);
        }
    }
});

function printSummary(someObject) {
    return `${someObject.name}, ${someObject.age} y.o, ${someObject.nationality}.
    Degree: ${someObject.degree ? 'Yes' : 'No'}
    Testing experience: 
    API: ${someObject.experience.apiTesting}
    Mobile: ${someObject.experience.mobileTesting}
    Desktop: ${someObject.experience.desktopTesting}`;
};

console.log(printSummary(newObject));
console.log(newObject.objectInfo);
console.log(newObject.updateAge = 28);
console.log(newObject.objectInfo);

