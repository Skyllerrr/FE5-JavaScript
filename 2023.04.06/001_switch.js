// const value = 'two'

// switch (value) {
// case 'one':
// console.log('hello one')
// break;

// case 'two':
// console.log('hello two')
// break;

// case 'three':
// console.log('hello three')
// break;

// default:
// console.log('hello default')
// break;
// }

///////////////////////

const value2 = 'four'

switch (value2) {
    case 'one':
        console.log('hello one')
        break;

    case 'two':
        console.log('hello two')
        break;

    case 'three':
        console.log('hello three')
        break;

    default:
        console.log('hello default')
        break;
}

///////////////////////

switch (new Date().getDay()) {
    case 0:
        console.log('일요일');
        break;

    case 1:
        console.log('월요일');
        break;

    case 2:
        console.log('화요일');
        break;

    case 3:
        console.log('수요일');
        break;

    case 4:
        console.log('목요일');
        break;

    case 5:
        console.log('금요일');
        break;

    case 6:
        console.log('토요일');
        break;

        // default는 견고한 코드를 위해 써주시는 편이 좋습니다.
    default:
        break;
}

// 다른 언어에서 switch문 어떻게 사용할까요? python은 switch문 없는데?

const 요일 = new Date().getDay()
const 요일객체 = {
    0: '일요일',
    1: '월요일',
    2: '화요일',
    3: '수요일',
    4: '목요일',
    5: '금요일',
    6: '토요일'
}

console.log(요일객체[요일])

// default는 어떻게 처리?
const 요일2 = 10
const 요일객체2 = {
    0: '일요일',
    1: '월요일',
    2: '화요일',
    3: '수요일',
    4: '목요일',
    5: '금요일',
    6: '토요일'
}

// 널리쉬 연산자 사용
console.log(요일객체2[요일2] ?? 'hello')
console.log(undefined ?? 'hello')
// 단락평가 사용
console.log(요일객체2[요일2] || 'hello')
console.log(undefined || 'hello')