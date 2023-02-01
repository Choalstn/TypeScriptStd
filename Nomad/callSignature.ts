//함수의 call signature 타입
type Add = (a:number, b:number) => number;

//const add = (a:number, b:number) => number;
//call signature를 사용한 add 함수 
const add : Add = (a,b) => a+b