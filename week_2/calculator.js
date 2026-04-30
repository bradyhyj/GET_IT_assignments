// 입력값 가져오기 함수
function getNumbers() {
    const a = parseFloat(document.getElementById("num1").value);
    const b = parseFloat(document.getElementById("num2").value);
    return [a, b];
} 

/* ===== 기본 사칙연산 (강의 중 함께 구현) ===== */
// function add() {
//     const [a, b] = getNumbers();
//     alert(`결과: ${a + b}`);
// }
// function subtract() {
//     const [a, b] = getNumbers();
//     alert(`결과: ${a - b}`);
// }
// /* ===== 과제: 곱하기, 나누기 연산 기능 구현 ===== */
// function multiply() {
//     const [a, b] = getNumbers();
//     alert(`결과: ${a * b}`);
// }
// function divide() {
//     // 나누기 연산을 구현합니다.
//     // ! 주의: 0으로 나누는 경우를 처리해야 합니다.
//     const [a, b] = getNumbers();
//     if(b != 0)
//         alert(`결과: ${a / b}`);
//     else
//         alert("0으로 나눌 수 없습니다!");

// }



/* 화살표 함수로 구현 */
const add = () => {
    const [a, b] = getNumbers();
    alert(`결과: ${a + b}`);
};
const subtract = () => {
    const [a, b] = getNumbers();
    alert(`결과: ${a - b}`);
}

const multiply = () => {
    const [a, b] = getNumbers();
    alert(`결과: ${a * b}`);
}
const divide = () => {
    const [a, b] = getNumbers();
    if(b != 0)
        alert(`결과: ${a / b}`);
    else
        alert("0으로 나눌 수 없습니다!");

}




/* ===== 이벤트 연결 ===== */
document.getElementById("addBtn").onclick = add;
document.getElementById("subtractBtn").onclick = subtract;
document.getElementById("multiplyBtn").onclick = multiply;
document.getElementById("divideBtn").onclick = divide;
