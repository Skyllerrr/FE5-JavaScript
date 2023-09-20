/*
function time() {
  const 시작 = Date.now();
  for (let k=0; k < 100000000; k++) {
}
  const 끝 = Date.now();
  console.log(끝 - 시작 + 'ms'); //61ms
}

time();
console.log('다음 작업');
*/

/*
function time() {
  setTimeout(() => {
    const 시작 = Date.now();
    for (let k=0; k < 100000000; k++) {
  } 
    const 끝 = Date.now();
    console.log(끝 - 시작 + 'ms');
}, 0);
}

console.log('시작');
time();
console.log('다음 작업');
*/

function time(callback) {
  setTimeout(() => {
      const 시작 = Date.now();
      for (let k = 0; k < 100000000; k++) {

      }
      const 끝 = Date.now();
      console.log(끝 - 시작 + 'ms');
      callback();
  }, 0);
}

console.log('시작');
time(() => {
  console.log('작업이 끝났습니다.');
});
console.log('다음 작업');