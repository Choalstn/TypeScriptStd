function addUdemy(n1, n2) {
    return n1 + n2;
}
// void 타입 반환 
function printResult(num) {
    console.log('Result : ' + num);
}
function addAndHandle(n1, n2, callback) {
    var result = n1 + n2;
    callback(result);
}
printResult(addUdemy(5, 12));
var combinedValues;
combinedValues = addUdemy;
// printResult는 void 타입이며 인자를 한 개만 받고 있기 때문에 불가능 
// combinedValues = printResult;
console.log(combinedValues(8, 8));
addAndHandle(10, 20, function (result) {
    console.log(result);
});
