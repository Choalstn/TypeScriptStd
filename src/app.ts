interface Greetable {
    name : string;

    greet(phrase: string, ) : void
}

// Person class는 Greetable interface 기준을 이행해야 한다
class Person implements Greetable {
    name : string;
    age = 24;

    constructor(n:string) {
        this.name = n;
    }

    greet(phrase:string) {
        console.log(phrase+ " " + this.name)
    }
}

let user1: Greetable;

user1 = new Person("Minsu")

console.log(user1)