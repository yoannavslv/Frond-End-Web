class Person {
    constructor(name, planet){
        this.name = name;
        this.planet = "Земя"
    }

    print() {
        console.log(`Здравей ${this.name} от планетата ${this.planet}`);
    }
}

const chuck = new Person("Чък Норис");
const petar = new Person("Петър");
const boris = new Person("Борис");

chuck.print();
petar.print();
boris.print();

