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
var person = {
    name: 'minsu',
    age: 24,
    hobbies: ['Sports', 'Cooking'],
    role: [2, 'author']
};
// Push가 되긴 함
// person.role.push('admin');
//두 번째 인자는 string이기 때문에 불가능
// person.role[1] = 10;
var favoriteActivites;
favoriteActivites = ["Sports", "Cooking"];
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby);
}
console.log(person.name);
