// 포괄적인 타입 지정
// const person : object = {
//     name : "minsu",
//     age : 24,
// };

// const person : {
//     name : string,
//     age : number
// } = {
//     name : "minsu",
//     age : 24
// }

const person: {
    name : string,
    age :  number,
    hobbies : string[],
    role : [number, string]
} = {
    name : 'minsu',
    age : 24,
    hobbies : ['Sports', 'Cooking'],
    role: [2, 'author']
}

// Push가 되긴 함
// person.role.push('admin');

//두 번째 인자는 string이기 때문에 불가능
// person.role[1] = 10;

let favoriteActivites : string[] ; 
favoriteActivites = ["Sports", "Cooking"];

for(const hobby of person.hobbies) {
    console.log(hobby)
}

console.log(person.name)