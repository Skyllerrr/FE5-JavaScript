const avengers = ['아이언맨', '스파이더맨', '헐크', '토르'];
console.log(avengers.sort());

// 사전식 정렬입니다. 시간이 지나도 못바뀌는 내용입니다.
const nums1 = [3, 1, 8, 6];
console.log(nums1.sort());

const nums2 = [3, 1, 11, 8, 6];
console.log(nums2.sort()); // 'sort를 어느 알고리즘으로 할꺼냐?'는 브라우저의 자유!

// 오름차순
const nums3 = [3, 1, 11, 8, 6];
console.log(nums3.sort((a, b) => a - b));

// 내림차순
const nums4 = [3, 1, 11, 8, 6];
console.log(nums4.sort((a, b) => b - a));

// 실무사용코드
// https://www.notion.so/paullabworkspace/JavaScript-sort-compare-function-ff38f176e79e4c5d9ade9c4734620ffd
function sort(key) {
    if (click) {
        click = false
        var sortedData = jsonData.sort((a, b) => (a[key] < b[key] ? -1 : (a[key] > b[key] ? 1 : 0)))
    } else {
        click = true
        var sortedData = jsonData.sort((a, b) => (a[key] > b[key] ? -1 : (a[key] < b[key] ? 1 : 0)))
    }
}

// 딥하게 sort를 탐색해보겠다!?
const nums5 = [3, 1, 11, 8, 6];
console.log(nums5.sort((a, b) => {
    console.log(a, b)
}));

const nums6 = [3, 1, 11, 8, 6];
console.log(nums6.sort((a, b) => {
    console.log(a, b)
    console.log(a - b)
}));