// while문

let x = 0

while (x < 10) {
    console.log('start')
    console.log(x)
    x += 1

    console.log('end')
}


// do ~ while문

let input;

do {
    input = prompt("숫자를 입력하세요.");
} while (isNaN(input));

console.log("입력한 숫자는 " + input + "입니다.");


// 암기코드 1
// 구구단
// for문으로 구구단 만들기
for (let i = 2; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
        console.log(`${i} X ${j} = ${i * j}`)
    }
}


// while문으로 구구단 만들기
let i = 2;

while (i < 10) {
    let j = 1;
    
    while (j < 10) {
        console.log(`${i} X ${j} = ${i * j}`)
        j++
    }
    i++
}


// 암기코드 2
// 문자열 뒤집기
let s = 'hello world'
let result = ''

for (let i = 0; i < s.length; i++) {

    // result = result + s[i] -> hello world 출력 
    // result = s[i] + result -> dlrow olleh 출력
}
console.log(result)

// 문자열 뒤집어서 나오는 풀이과정
// s[0] + result => 'h' + '' => 'h'
// s[1] + result => 'e' + '' => 'eh'
// s[2] + result => 'l' + '' => 'leh' ...

