// while문

let x = 0

while (x < 10) {
    console.log('start')
    console.log(x)
    x += 1

    console.log('end')
}

/////
// why? 10까지 출력이 되는가?
// 일반 JS에서는 출력되지 않습니다.
// 콘솔에서만 출력됩니다.
let x1 = 0
while (x1 < 10) {
    console.log(x1)
    x1 += 1
}

let x2 = 0
while (x2 < 10) {
    console.log(x2)
    x2 += 1
    console.log('')
}

let x3 = 1
x3 += 1
x3 += 1
x3 += 1 // 여러번 해보세요. x값이 출력되는데 개발자 편의를 위해 제공하는 기능입니다. 
/////

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



// 암기코드 3
// 팩토리얼
// 5! = 5 * 4 * 3 * 2 * 1
let s1 = 1;
for (let i = 1; i < 6; i++) {
    s1 *= i
}
console.log(s1)

// s1 = s1  *  i // 1 * 1
// s1 = 1  *  2
// s1 = 2  *  3
// s1 = 6  *  4
// s1 = 24 *  5

let s2 = 1;
i = 1;
while (i < 6) {
    s2 *= i
    i += 1
}

console.log(s2)