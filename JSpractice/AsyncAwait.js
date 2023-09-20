// 둘 다 같은 코드, Promise 생략 가능
/*
async function snack() {
  return 1;
}

snack().then(alert); // '1' 반환

function snack() {
  return Promise.resolve(1);
}

snack().then(alert); // '1' 반환
*/


// 또는 화살표 함수처럼 사용해도 가능
/*
let snack = async function() {
  return "cake!";
};

snack().then((value) => console.log(value))
// cake!

// 아래와 같이 간단하게 줄여서 작성할 수 있다.
snack().then(console.log) // cake!
*/


// async & await 제어 흐름 이해하기
// 출력 순서 = '주문하시겠어요?' -> '치즈 케이크 주세요!' -> '주문하신 케이크 나왔습니다' -> '와, 맛있겠다!'
/*
const snack = () => Promise.resolve('와, 맛있겠다!') // 4번

async function mySnack() {
		console.log('치즈 케이크 주세요!') // 3번
    const res = await snack() // 4번
    console.log(res) // 6번
}

console.log('주문하시겠어요?') // 1번
mySnack(); // 2번
console.log('주문하신 케이크 나왔습니다!') // 5번
*/


// setTimeOut를 이용한 코드
// 출력 순서 = '스낵을 만드는 중입니다!' (3초 쉬고)-> '스낵이 완성되었어요!' -> '맛있게 드세요!'
/*
function cook(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function process() {
  console.log('스낵을 만드는 중입니다!');
  await cook(3000);
  console.log('스낵이 완성되었어요!');
}

process().then(() => {
  console.log('맛있게 드세요!');
});
*/


// setTimeOut을 이용한 코드2
// 출력 순서 = (1초 뒤) 케이크 -> (0.5초 뒤) 커피 -> (3초 뒤) 쿠키
/*
function cook(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const myCake = async () => {
  await cook(1000);
  return '케이크';
};

const myCoffee = async () => {
  await cook(500);
  return '커피';
};
const myCookie = async () => {
  await cook(3000);
  return '쿠키';
};

async function asyncProcess() {
  const cake = await myCake();
  console.log(케이크);
  const coffee = await myCoffee();
  console.log(커피);
  const cookie = await myCookie();
  console.log(cookie);
}

asyncProcess();
*/

// setTimeOut를 이용한 코드2에서 Promise.all() 사용 = 배열 형태로 출력해야함
function cook(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const myCake = async () => {
  await cook(1000);
  return '케이크';
};

const myCoffee = async () => {
  await cook(500);
  return '커피';
};
const myCookie = async () => {
  await cook(5000);
  return '쿠키';
};

async function promiseProcess() {
  const results = await Promise.all([myCake(), myCoffee(), myCookie()]);
  console.log(results);
}

promiseProcess();

// async/await 내부에 forEach를 사용하기
const usernames = ['1', '2', '3', '4'];

usernames.forEach(async (usernames) => {
		const result = await fetch(`https://jsonplaceholder.typicode.com/users/${usernames}`);
	console.log(result.json());
});

console.log('user의 목록을 불러왔습니다!'); // forEach 반복문이 끝나기도 전에 'user의 목록을 불러왔습니다!'가 먼저 실행된다.