//재사용이 가능한 알리어스 타입 (불필요한 반복을 피하고 타입을 중심에서 관리할 수 있음)
type Combinable = number | string;
type ConversionDescriptor = 'as-number' | 'as-text';

function combine(input1 : Combinable, input2 : Combinable, resultConversion : ConversionDescriptor) {
    let result;
    if(typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number') {
        result = +input1 + +input2; 
    } else {
        result = input1.toString() + input2.toString();
    }

    // if(resultConversion === 'as-number') {
    //     return +result;
    // } else {
    //     return result.toString();
    // }
    return result;
}

const combineAges = combine(30,26, 'as-number');
console.log(combineAges);
 
const combineStringAges = combine('30','26', 'as-number');
console.log(combineStringAges)

const combineNames = combine("TaeYoung", "Minsu", 'as-text');
console.log(combineNames)