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

type Unversal = Combinable & Numeric;