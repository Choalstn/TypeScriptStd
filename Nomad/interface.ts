// call signature를 작성하는 다른 방법  
type Team = 'red' | 'blue' | "yellow"
type HealthBar = 1 | 5 | 10

// inteface로는 아래 코드 실행 불가 - 활용도 낮음 
// interface Hello = string

// object를 정의하는 법 1 - 활용도가 더 높다
// type PlayerInter = {
//     nickname : string,
//     team : Team,
//     healthbar : HealthBar    
// }

// object를 정의하는 법 2
// interface는 typeScripe에게 오브젝트의 모양을 설명해주는 하나의 목적으로만 기능
interface PlayerInter  {
    nickname : string,
    team : Team,
    healthbar : HealthBar    
}

const ms:PlayerInter = {
    nickname : "GomJam",
    team : "blue",
    healthbar : 5
    
}


// interface 형식 - 클래스와 유사
interface UserInter {
    readonly name : string
}

// interface는 여러 개 작성해도 합쳐줌
interface UserInter {
    readonly nickname : string
}

interface PlayerInter2 extends UserInter {}

const luna:PlayerInter2 = {
    name : "luna",
    nickname : "LULU"
}


// type 형식
type Usertype = {
    readonly name : string
}

type PlayerType = Usertype & {}

const lane: PlayerType = {
    name : "lane"
}