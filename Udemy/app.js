function addUdemy(n1, n2) {
    return n1 + n2;
}
// void 타입 반환 
function printResult(num) {
    console.log('Result : ' + num);
}
printResult(addUdemy(5, 12));
var combinedValues;
combinedValues = addUdemy;
// printResult는 void 타입이며 인자를 한 개만 받고 있기 때문에 불가능 
// combinedValues = printResult;
console.log(combinedValues(8, 8));
