// const names: Array<string> = ["Minsu", "TaeYoung"]; // === : string[]
// // names[0].split(""); 제네릭 타입으로 배열 요소는 무조건 string이기 떄문에 split 사용 가능 

// const promise: Promise<string> = new Promise((resolve, reject) => {
//     setTimeout(() => resolve('This is Promise'), 2000);
// })

// promise.then((data) => {
//     data.split("")
// })

// 미상의 두 객체의 인터섹션은 새로운 미상의 객체일뿐이므로 추가적인 타입 정보를 넘겨줄 수 없다
// 제네릭타입은 두 매개변수가 서로 다른 타입이 될 수 있다고 알려줄 수 있으므로 무작위의 객체 타입으로 작업하는 것이 아닌 다양한 타입 데이터를 얻고자 한다는 것을 TS가 인식하게 됨
function merge <T extends Object,U>(objA: T, objB: U){
    return Object.assign(objA, objB);
} 

const mergeObj = merge<{name:string, hobbies:string[]}, {age:number}>({name: 'Minsu', hobbies: ['Sports']},{age: 24});
console.log(mergeObj.name)

interface Lengthy {
    length: number;
}

function countAndDescribe<T extends Lengthy >(element:T): [T, string] {
    let descriptionText = "Got no Value"

    if(element.length > 0) {
        descriptionText = 'Got' + element.length + ' elements';
    }

    return [element, descriptionText];
}

console.log(countAndDescribe("hello there"))