/*
const promise = new Promise((resolve, reject) => {
	console.log("1번손님 들어오세요");//executor(제작코드,실행함수) = 맛집
});
*/

/*
const promise = new Promise((resolve, reject) => {
  // promise가 만들어지면 executor함수는 자동으로 실행된다.
    setTimeout(()=>{
      resolve('입장해주세요');
    }, 3000);
}); // 3초후 일이 성공적으로 끝났다는 신호와 함께 result는'입장해주세요'가 된다.
*/

/*  
const promise = new Promise((resolve, reject) => {
  // 3초 뒤에 에러와 함께 실행이 종료되었다는 신호를 보낸다.
    setTimeout(()=>{
      reject(new Error('error'));
    }, 3000);
  });
*/

/*
const promise = new Promise(function(resolve, reject) {
  resolve("1번손님 입장해주세요");
  reject(new Error("~")); // 무시된다
  setTimeout(() => resolve("~")); // 무시된다
});
*/

//제작코드(producing code)
// resolve(성공)를 나타내기 위해서는 then을 사용
const promiseThen = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve('입장해주세요');
	}, 3000);
});

//소비코드(consuming code)
promiseThen.then(value => {
	console.log(value);
});


//제작코드(producing code)
// reject(실패)를 나타내기 위해서는 then, catch를 사용
const promiseThenCatch = new Promise((resolve, reject) => {
	setTimeout(() => {
		reject(new Error('손님의 입장순서가 아닙니다'));
	}, 3000)
});

//소비코드(consuming code)
promiseThenCatch
	.then(value => {
		console.log(value);
	})
	.catch(error => {
	console.log(error);
});

//제작코드(producing code)
// finally : 성공, 실패 여부와 상관없이 어떠한 기능을 마지막에 수행하고 싶을 때 사용
const promiseFinally = new Promise((resolve, reject) => {
	setTimeout(() => {
		reject(new Error('손님의 입장순서가 아닙니다'));
	}, 3000)
});

//소비코드(consuming code)
promiseFinally
	.then(value => {
	console.log(value);
	})
	.catch(error => {
	console.log(error);
	})
	.finally(() => {
	console.log('-제주맛집');
});