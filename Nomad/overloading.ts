//오버로딩은 함수가 서로 다른 여러 개의 call signature를 갖고 있을 때 발생 
type ADD = {
    (a:number, b:number) : number,
    (a:number, b:string) : number,
};

const ADDfunc : ADD = (a,b) => {
    if(typeof b === "string") return a;
    else return a+b; 
}

type Config = {
    path : string,
    state : object
}

type Push = {
    (path : string) : void,
    (config : Config) : void
}

 const push :Push = (config) => { 
    if(typeof config === 'string') {console.log(config)}
    else {console.log(config.path)}
 }

 type AddOver = {
    (a:number, b:number) : number,
    (a:number, b:number, c:number) : number
 }

 const AddOverfunc:AddOver = (a, b, c?:number) => {
    if(c) return a + b + c;
    return a + b
 }

// 이것도 overloading 
//  type AddOver = {
//     (a: number, b: number, c?: number): number;
//     };
    
//     const AddOverfunc:AddOver = (a, b, c) => {
//     if (c) return a+b+c;
//     return a+b;
//     }