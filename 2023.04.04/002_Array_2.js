// filter
// 1~10까지 짝수 구하기
const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
arr1.filter(function(el) {
    return el % 2 === 0
})

// 1~10까지 홀수 구하기
const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
arr2.filter(function(el) {
    return el % 2 === 1
})


function solution(n) {
    return Array(n)
        .fill()
        .map((_, i) => i + 1)
        .filter((v) => v % 2 === 0)
        .reduce((a, c) => a + c, 0);
}


const arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
arr2.filter(function(el) {
    return el % 2 !== 0
})

// 모음 제거
Array.from('hello world').filter(v => !["a", "e", "i", "o", "u"].includes(v))


// reduce
// 0을 항상 넣어주세요.
const arr = [1, 2, 3, 4, 5]
arr.reduce((a, c) => a + c, 0)


// includes
const arr4 = ['hello', 'world', 'sanghun']
arr4.includes('world')

const arr5 = ['hello', 'world', 'sanghun']
arr5.includes('hansanghun')


// join
const arr6 = ['hello', 'world', 'sanghun']
arr6.join('!')

const arr7 = ['010', '1234', '5678']
arr7.join('-')

const arr8 = [010, 1234, 5678]
arr8.join('-') // 이렇게 하시면 안됩니다. (010이 이진법으로 계산되어 8이 찍힘)

// 0b100 // b는 바이너리의 첫 글자 입니다.
// 0o100 // o는 옥타의 첫 글자 입니다.
// 0x100 // x는 헥사를 표현합니다.