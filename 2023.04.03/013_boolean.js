let x = 5;
let y = 10;

console.log(x > y); // false


// true, false 값을 and, or 연산했을 경우 반환값은 true, false
let a = true;
let b = false;

console.log(a && b); // false


// true, false가 아닌 값을 값을 and, or연산했을 경우 단락회로평가를 하게 됩니다.
let a2 = 'hello';
let b2 = '';

console.log(a2 && b2)

console.log(Boolean('hello')) // true
console.log(Boolean('')) // false
console.log(Boolean([1, 2, 3])) // true
console.log(Boolean([])) // 말도 안되게 true
console.log(Boolean({'one': 10, 'two': 20})) // true
console.log(Boolean({})) // true
console.log(Boolean(0)) // false
console.log(Boolean(-1)) // true
console.log(Boolean(undefined)) // false
console.log(Boolean(null)) // false
console.log(Boolean(NaN)) // false


if (undefined) {
    console.log('hello') // false
}

let aa;
if (aa) {
    console.log('hello') // false
}

// 답할 수 있어야 견고한 코드를 짤 수 있습니다.
// 견고한 코드 : 어떤 상황에서도 기능이 무너지지 않는 코드
let aaa;
if (aaa) {
    console.log('hello') // false
}