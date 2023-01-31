//Alias(별칭) 타입 생성
type Player = {
    name :string,
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