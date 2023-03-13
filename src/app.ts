// type addFn = (a:number, b:number) => number;

// 함수형 interface
interface addFn {
    (a:number, b:number) : number;
}

let add: addFn;

add = (n1:number, n2:number) => {
    return n1 + n2;
}

interface Named {
    readonly name?:string;
    outputName?:string; // ? = 선택적 속성 => 이 인터페이스를 구현하는 클래스 내에 선택적으로 존재
}

// interface는 여러 곳으로부터 상속 받을 수 있다
interface Greetable extends Named {
    //interface 내 readonly 가능 public, private은 불가능
    greet(phrase: string, ) : void
}

// Person class는 Greetable interface 기준을 이행해야 한다
class Person implements Greetable {
    name? : string;
    age = 24;

    constructor(n:string) {
        if(n) {
          this.name = n;  
        }
        
    }

    greet(phrase:string) {
        console.log(phrase+ " " + this.name)
    }
}

let user1: Greetable;

user1 = new Person("Minsu")

console.log(user1)