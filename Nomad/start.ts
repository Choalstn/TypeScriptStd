//Alias(별칭) 타입 생성
type Player = {
    readonly name :string,
    age?:number
    //? === 선택적 타입은 undefind일수도 있다는 이야기 즉, age값이 있을 수도 있고 없을 수도 있다는 말
}

const Gom : Player = {
    name : 'Gom'
}

const Jam : Player = {
    name : "Jam",
    age : 24
}

//string 타입으로 name을 받고 Player 타입을 리턴하는 함수
function playerMaker(name:string) : Player {
    return {
        name
    }
}

// 화살표 함수 경우
// const playerMaker = (name:string) : Player => ({name});


const GomJam = playerMaker('Gom');

//아래 코드는 playerMaker 함수에서 : Player를 해주지 않으면 오류
GomJam.age = 24;

const numbers : readonly number[] = [1,2,3,4];
// readonly이기 때문에 수정이 불가
// numbers.push(5)

//Tuple 
const player : [string,number, boolean] = ["Gom", 24, true]


//any : TypeScript를 빠져나오게 만듬
const a : any[] = [1,2,3,4]
const b : any = true

//any로 지정했기 때문에 오류가 안 나는  것. 원래의 ts라면 오류 남
console.log(a+b)

//API를 받아올 때 어떤 타입인지 모르겠다면 unknown으로 설정
let c : unknown;

//아무것도 리턴하지 않으니 void 타입. default로 void 타입이 지정됨
function hello() {
    console.log('hello')
}

//함수가 절대 return 하지 않으면 never never 타입
//값이 둘 중 하나 일 때도 never 타입 
function hi(name:string|number) {
    if(typeof name === 'string') {
        name
    } else if(typeof name === 'number') {
        name
    } else {
        //name type은 never
        //이 구문을 절대로 실행되지 않음
        name
    }
}
