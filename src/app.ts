const names: Array<string> = ["Minsu", "TaeYoung"]; // === : string[]
// names[0].split(""); 제네릭 타입으로 배열 요소는 무조건 string이기 떄문에 split 사용 가능 

const promise: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => resolve('This is Promise'), 2000);
})

promise.then((data) => {
    data.split("")
})