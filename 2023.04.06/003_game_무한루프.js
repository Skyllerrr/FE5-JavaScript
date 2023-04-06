// 숫자 맞추기 게임
let answer = Math.floor(Math.random() * 100);
let count = 0;
// 프로그래밍 언어에서 random은 seed라는 값을 주면 동일한 랜덤값이 나오는 수학 수식입니다.
// ~~(Math.random()*100)를 사용해도 가능

for (;;) {
    let userInput = prompt('값을 입력해주세요!')
    if (answer > parseInt(userInput)) {
        alert('UP!')

    } else if (answer < parseInt(userInput)) {
        alert('DOWN!')

    } else if (Number.isNaN(userInput)) {
        window.alert('다시 입력하세요!')

    } else {
        alert('Correct!')
        break
    }
    count += 1
}

console.log(`${count}번째 맞추셨습니다!`)