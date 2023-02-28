const button = document.querySelector("button")!;
const input1 = document.getElementById("num1")! as HTMLInputElement; // !을 붙여줌으로써 절대 null이 아님을 알려줌 
const input2 = document.getElementById("num2")! as HTMLInputElement;

function addUdemy(num1 : number, num2 : number) {
    return num1 + num2
}

button.addEventListener('click', function () {
    console.log(addUdemy(+input1.value, +input2.value)) // + 기호를 붙여서 number로 변환
})