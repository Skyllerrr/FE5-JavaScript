// 컨벤션
// https://github.com/airbnb/javascript#iterators-and-generators
// 11.1 : 순회 대신 메서드
// 15.1 : 비교
// 18.1, 18.4, 18.5 : 코멘트
// 19.1 : 공백


// https://google.github.io/styleguide/jsguide.html#features-for-loops : 
// 반복구문에서는 가능하면 for of, object에서는 for in


// https://ui.toast.com/fe-guide/ko_CODING-CONVENTION#for-in%EB%AC%B8-%EC%95%88%EC%97%90%EC%84%9C%EB%8A%94-hasownproperty-%EC%A1%B0%EA%B1%B4-%EA%B2%80%EC%82%AC%EB%A5%BC-%EC%88%98%ED%96%89%ED%95%9C%EB%8B%A4 :
// 반복구문에서는 hasOwnProperty 조건 검사를 수행


// https://ko.javascript.info/array#ref-830(모던자바스크립트): Array 순회에서 권하지 않음

for (let i = 0; i < 10; i++) {
    console.log(10);
}

let arr = [10, 20, 30, 40, 50]
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

// airbnb 컨벤션에 권장
// IE에서도 사용 가능
let arr1 = [10, 20, 30, 40, 50]
let obj1 = {
    'one': 10,
    'two': 20
}
for (const i in arr) {
    console.log(arr[i]) // index를 가져온다!?
}

for (const i in obj1) {
    console.log(obj1[i]) // key를 가져온다!?
}

// hello world의 index값만 가져온다
for (const i in 'hello world') {
    console.log(i)
}

// 0부터 100까지의 합
let s1 = 0
for (const i in '.'.repeat(101)) {
    s1 += parseInt(i)
}
console.log(s1)

// airbnb 컨벤션에 권장
// IE에서는 사용 불가
// 개발자의 행복을 위해 익스플로러를 버리자 => 이렇게 해야만 사용할 수 있습니다.
let arr2 = [10, 20, 30, 40, 50]
let obj2 = {
    'one': 10,
    'two': 20
}

for (const item of arr2) {
    console.log(item)
}

let s2 = 0
for (const item of arr2) {
    s2 += item
}
console.log(s2)

for (const item of obj2) { // of 뒤에 iterable한 값이 나와야 합니다.
    console.log(item)
}

for (const item of 'hello world') {
    console.log(item)
}


// why? for of와 for in문에서는 const가 가능한가요?
// 한국어 : https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/for...of#%EB%AA%85%EC%84%B8%EC%84%9C
// 영어 : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of
// ECMAScript 명세서 : https://tc39.es/ecma262/multipage/ecmascript-language-statements-and-declarations.html#sec-for-in-and-for-of-statements
// https://tc39.es/ecma262/multipage/ecmascript-language-statements-and-declarations.html#prod-LetOrConst
for (const i = 0; i < 10; i++) {
    console.log(10);
} // error

{
    const x = 10
    console.log(x)
}
console.log(x)

for (const i in [1, 2, 3]) {
    console.log(i)
}

for (const i of [1, 2, 3]) {
    console.log(i)
}


// 문제
// https://codingdojang.com/scode/408?answer_mode=hide
s = [1, 3, 4, 8, 13, 17, 20]
for (let i = 0; i < s.length; i++) {
    console.log(s[i], s[i + 1]) // 마지막 값을 확인해보세요.
    console.log(s[i + 1] - s[i])
}

for (let i = 0; i < s.length - 1; i++) {
    console.log(s[i], s[i + 1]) // 마지막 값을 확인해보세요.
    console.log(s[i + 1] - s[i])
}

for (let i = 1; i < s.length; i++) {
    console.log(s[i - 1], s[i]) // 마지막 값을 확인해보세요.
    console.log(s[i] - s[i - 1])
}


// 문제
// 다음 수학 점수의 평균을 구하세요.
let 수학점수 = [10, 99, 89, 70]

// step1
(수학점수[0] + 수학점수[1] + 수학점수[2] + 수학점수[3]) / 수학점수.length

// step2
let grade = 0
for (let i = 0; i < 수학점수.length; i++) {
    grade += 수학점수[i];
}
console.log(grade / 수학점수.length);


// 문제
// 다음 user의 나이 평균을 구하세요.
let user = [{
        "_id": "642e3071c61a23c70ae6076b",
        "index": 0,
        "age": 31,
        "name": "Hicks Garza",
        "gender": "male",
    },
    {
        "_id": "642e3071ecd6f90a87d64731",
        "index": 1,
        "age": 32,
        "name": "Ayers Harrington",
        "gender": "male",
    },
    {
        "_id": "642e3071cef9ddc131f047fb",
        "index": 2,
        "age": 39,
        "name": "Lamb Adams",
        "gender": "male",
    }
]

// 내가 적은 정답
let avg = 0;
for (let i = 0; i < user.length; i++) {
    avg += user[i].age;
}
console.log(avg / user.length);


// 견고한 코드란?
// 1. age가 문자였다면?
// 2. age가 입력되지 않았다면?
// 3. age 필드가 없다면?(MongoDB의 경우)

// 강사님의 정답
let s7 = 0
for (let i = 0; i < user.length; i++) {
    console.log(user[i]['age'])
    s7 += user[i]['age']
}
// console.log(Math.floor(s / user.length))
console.log((s7 / user.length).toFixed(2))


////////////////////////////

let s3 = 0;
for (const i of user) {
    s3 += i.age
}
console.log((s3 / user.length).toFixed(2))

////////////////////////////

let s4= 0;
for (const i in user) {
    s4 += user[i].age
}
console.log((s4 / user.length).toFixed(2))


/////////////// 심화 수업 ///////////////
let user1 = [
    {
        "_id": "642e3071c61a23c70ae6076b",
        "index": 0,
        "age": 31,
        "name": "Hicks Garza",
        "gender": "male",
    },
    {
        "_id": "642e3071ecd6f90a87d64731",
        "index": 1,
        "age": 32,
        "name": "Ayers Harrington",
        "gender": "male",
    },
    {
        "_id": "642e3071cef9ddc131f047fb",
        "index": 2,
        "age": 39,
        "name": "Lamb Adams",
        "gender": "male",
    },
    {
        "_id": "642e3071cef9ddc131f047fb",
        "index": 2,
        "name": "Lamb Adams",
        "gender": "male",
    }
]

let s5 = 0
for (const i of user) {
    console.log(i)
    console.log(i.age)  // 마지막에 undefined
    console.log(s5) // 마지막에 102
    console.log('----------')
    s5 += i.age // 마지막에 undefined + 102
}
console.log((s5 / user.length).toFixed(2))

/////////

let s8 = 0
for (const i of user) {
    console.log(i)
    console.log(i.age) // 마지막에 undefined
    console.log(s8) // 마지막에 102
    console.log('----------')
    s8 += i.age ?? 0
}
console.log((s8 / user.length).toFixed(2))

// step 1
let s9 = 0
console.log(user[0])
console.log(user[0].age)
console.log(s9)
console.log('----------')
s9 += user[0].age ?? 0

// step 2
console.log(user[1])
console.log(user[1].age)
console.log(s)
console.log('----------')
s += user[1].age ?? 0

// ... 생략 ...


/////////////
s = 0
for (const i of user.map(v => v.age)) {
    if (!!i) {
        s += i
    }
}
console.log((s / user.length).toFixed(2))


s = 0
for (const i of [31, 32, 39, undefined]) {
    if (!!i) {
        s += i
    }
}
console.log((s / user.length).toFixed(2))

/////
!true // false
!false // true
!!31 // true
!!1 // true
!!-1 // true
!!0 // false
!!'hello' // true
!!NaN // false
!!undefined // false
!!null // false

///// 외우세요. /////
user
    .map(v => v.age)
    .filter(v => !!v)
    .reduce((a, b) => a + b, 0)
    
