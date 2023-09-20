/* foreach() */

let numberList1 = [181, 161, 25, 44];

numberList1.forEach(function (value, index, array) {
    console.log(value, index, array);
    console.log(`${index}번째의 값은 ${value}`);
});


/* map() */

// 배열 선언
let numberList2 = [181, 161, 25, 44];

// 배열의 모든 값에 2를 곱한다.
numberList2 = numberList2.map(function (value, index, array) {
    return value * 2;
})

// 출력한다.
// 매개변수로 console.log 메서드 자체를 넘겨주었다.
numberList2.forEach(console.log);


/* filter() */

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8];

let evenNumbers = numbers.filter(function (value) {
    return value % 2 === 0;
});

let oddNumbers = numbers.filter(function (value) {
    return value % 2 === 1;
});
        
console.log(`원래 배열: ${numbers}`);
console.log(`홀수만 추출: ${oddNumbers}`);
console.log(evenNumbers);

