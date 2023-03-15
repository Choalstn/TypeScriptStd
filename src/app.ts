type Admin = {
    name: string;
    previleges: string[];
};


type Employee = {
    name: string;
    startDate: Date;
};

// 두 개의 타입이 결합된 새 객체 타입 
type ElevatedEmployee = Admin & Employee;

const el1: ElevatedEmployee = {
    name: "Minsu",
    previleges: ['create-server'],
    startDate : new Date()
}

// 인터페이스와 밀접한 관련이 있다 = 인터페이스로 대체가 가능하다  
// interface Admin {
//     name: string;
//     previleges: string[];
// };


// interface Employee {
//     name: string;
//     startDate: Date;
// };

// // A-1. interface의 상속 사용 
// interface ElevatedEmployee extends Admin, Employee {}

// // A-2. 인터페이스 두 가지를 인터섹션으로 사용가능
// type ElevatedEmployee = Admin & Employee;

// // A-1, A-2 둘 다 결과는 동일하게 출력

type Combinable = number | string;
type Numeric = number | boolean;

// Universal의 타입은 number => 유니언 타입의 공통점으로 추측
type Unversal = Combinable & Numeric;

// 함수 overroading
function add(a:number, b:number): number;
function add(a: string, b: string): string;
function add(a:Combinable, b:Combinable) { 
    // 아래 조건문이 바로 타입가드 -> union 타입이 지닌 유연성을 활용할 수 있게 해주며 런타임 시 코드가 정확하게 작동하게 도와주기 떄문
    if(typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }

    return a+b;
}

const result = add('Minsu', 'TaeYoung') as string;
result.split("")

// type UnkownEmployee = Employee | Admin;

// function printEmployeeInformation(emp:UnkownEmployee) {
//     // 두 번째 형태의 타입가드 = in 키워드 사용 
//     if('previleges' in emp) {
//         console.log('Previleges : ', emp.previleges)
//     }

//     if('startDate' in emp) {
//         console.log('StartDate : ', emp.startDate)
//     }

//     // 두 타입 모두 갖고 있는 속성이기에 오류가 나지 않는다 
//     console.log('Name : ', emp.name);
// }

// printEmployeeInformation(el1)

// class Car {
//     drive() {
//         console.log("Driving...")
//     }
// }

// class Truck {
//     drive() {
//         console.log("Driving a truck...")
//     }

//     loadCargo(amount: number) {
//         console.log("Loading Cargo..." + amount)
//     }
// }

// type Vehicle = Car | Truck;

// const v1 = new Car();
// const v2 = new Truck();

// function useVehicle(vehicle: Vehicle) {
//     // 오타의 위험성을 줄여주는 세 번째 타입가드 방법 = instanceOf
//     if(vehicle instanceof Truck) {
//         vehicle.loadCargo(1000)
//     }
// }

// useVehicle(v1);
// useVehicle(v2);

// interface Bird {
//     type : 'bird';
//     flyingSpeed : number;
// }

// interface Horse {
//     type : 'horse';
//     runningSpeed: number;
// }

// type Animal = Bird | Horse;

// function moveAnimal(animal: Animal) {
//     let speed;
//     switch(animal.type) {
//         case 'bird' : 
//         speed = animal.flyingSpeed;
//         break;

//         case 'horse' :
//             speed = animal.runningSpeed;
//             break;
//     }

//     console.log('Moving at Speed :' + speed)
// }

// moveAnimal({type: 'bird', flyingSpeed:10})

// // 형변환 첫 번째 방법
// // <> -> 빌드 도구와 리액트로 구문 분석되어 결과적으로 화면에 렌더링하고자 하는 것이 무엇인지 알아내는 데 사용 
// // const userInputElement = <HTMLInputElement>document.getElementById("user-input")!;

// // 형변환 두 번째 방법 
// // const userInputElement = document.getElementById("user-input")! as HTMLInputElement ;

// // 만일 해당 요소가 null이 아님이 확실치 않다면 ? => 느낌표 사용 불가능
// const userInputElement = document.getElementById('user-input');

// // 타입가드와 비슷하게 userInputElement가 truthy 이면 속성 값에 접근하도록 
// if(userInputElement) {
//    (userInputElement as HTMLInputElement).value = "Hi there";
// }

// // 인덱스 타입 -> 객체가 지닐 수 있는 속성에 보다 유연한 객체를 생성할 수 있게 해주는 기능 
// interface ErrorContainer {
//     // 정확한 속성 이름도, 개수도 모르고 이 객체에 추가되는 모든 속성은 string으로 해석할 수 있는 속성 이름을 지녀야 한다는 것과 해당 속성에 대한 값도 string이어야 함
//     [prop: string]: string;
// }

// const errorBag: ErrorContainer = {
//     email : "Not a Valid email !! ",
//     userName: "Must start with a Capital character !! "
// }