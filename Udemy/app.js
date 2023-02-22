var userInput;
var userName;
userInput = 5;
userInput = 'Minsu';
userName = 'Cho';
if (typeof userInput === 'string') {
    userName = userInput;
}
console.log(userName);
// any와 비슷한 역할이지만 아래 코드에서 차이점이 나타남
// userInput이 unknown이면 에러, any면 에러x
// userName = userInput;
function generateErrors(message, code) {
    throw { message: message, errorCode: code };
}
generateErrors('An Error Occurred !', 500);
