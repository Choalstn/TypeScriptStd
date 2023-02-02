// 다형성이라 함은 여러 다른 구조들을 의미 
// 아래와 같이 call signature를 작성하면 모든 경우의 수를 작성해주어야 한다는 단점이 있음
// type SuperPrint = {
//     (array:number[]) : void
//     (array:boolean[]) : void
//     (array: (number|boolean)[]) : void
// }

// 위 문제를 해결하기 위해 generic(:확실한 타입을 모를 때) 사용 
// 즉, 타입스트립트에게 타입을 유츄하도록 만들어줌 
type SuperPrint = { 
    <T, M> (arr :  T[], b: M) : T
}

const superPrint:SuperPrint = (arr) => arr[0]

//위 방식과 동일  
function superPrintfunc <T>(a:T[]) {
    return a[0]
}

superPrint([1,2,3,], 'x');
superPrint([true, false, true], 2)
superPrint([2,true,2,false], 'hi')

type Playerpoly<E> = {
    name : string
    extraInfo: E
}

type GomPlayer = Playerpoly<{favFood : string}>;

const GomOfPoly:GomPlayer = {
    name : "Gom",
    extraInfo : {
        favFood : "chocolate"
    }
}