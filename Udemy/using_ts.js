var button = document.querySelector("button");
var input1 = document.getElementById("num1"); // !을 붙여줌으로써 절대 null이 아님을 알려줌 
var input2 = document.getElementById("num2");
function addUdemy(num1, num2) {
    return num1 + num2;
}
button.addEventListener('click', function () {
    console.log(addUdemy(+input1.value, +input2.value)); // + 기호를 붙여서 number로 변환
});
