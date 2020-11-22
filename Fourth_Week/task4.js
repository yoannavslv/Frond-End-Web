class Person{
    constructor(){
        let _sallary = 1000;

        this.getSecretSalaryInfo = () => _sallary;
    }
}

const person1 = new Person();
console.log(person1.getSecretSalaryInfo());