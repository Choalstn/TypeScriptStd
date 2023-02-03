// abstract class User2 {
//     constructor(
//         protected firstname : string,
//         protected lastname : string
//     ) {}

//     abstract sayHi(name:string):string
//     abstract fullName():string
// }

// class Player2 extends User2 {
//     fullName(): string {
//         return `${this.firstname} ${this.lastname}`
//     }

//     sayHi(name: string): string {
//         return `Hello, ${name}. My name is ${this.fullName()}`
//     }
// }


// intefac를 이용하면 실제로 js 파일이 더 가벼워짐 (코드가 간결해짐)
interface User2 {
    firstname : string,
    lastname : string,
    sayHi(name:string) : string,
    fullName():string
}

interface Human {
    health : number
}

// interface를 상속할 때 property는 Public으로만 가능
class Player2 implements User2, Human {
    constructor(
        public firstname : string,
        public lastname : string,
        public health : number
    ) {}
    fullName(): string {
        return `${this.firstname} ${this.lastname}`
    }

    sayHi(name: string): string {
        return `Helllo, ${name}. My name is ${this.fullName()}`
    }
}