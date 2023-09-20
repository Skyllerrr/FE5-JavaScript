// fetch()의 기본 문법 구조 = fetch(resource, [options]) - resource는 HTTP 요청 url(필수), options는 method, headers, body(선택)

// Promise만을 사용한 코드
// 출력 결과 : Nathan@yenseina.net
/* 
fetch('https://jsonplaceholder.typicode.com/users/3') 
  .then(response => response.json())
  .then(json => console.log(json.email))
*/


// async/await를 사용한 코드
// 출력 결과 : Nathan@yenseina.net
async function getUserEmail(id){
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const user = await(response.json());
  const email = user.email;
  console.log(email)
}
getUserEmail(3)

// 위 코드에서 상황에 따라 json형태로 변환하는 response.json()대신 text형태 = response.text(), img형태 = response.blob()으로 바꿀 수 있다. 

  
async function printImg(){
  const response = await fetch(`https://picsum.photos/200`);
  const blobImg= await(response.blob());
	
	//blob을 담을 img 태그를 만든다.
	const img = document.createElement('img');
	//html body에 위에서 만든 img 태그를 삽입한다.
	document.body.append(img);
	//img 태그의 주소를 설정한다.
	img.src = URL.createObjectURL(blobImg);
}
printImg()


// fetch() 함수의 HTTP 요청 예시
async function request() {
  const response = await fetch('url 기입',
  {
  method: "GET", //POST, DELETE, PATH, PUT
	headers: {
			"Content-type": "콘텐츠 형태",
			//application/json, text/plain 등
		},
    body: JSON.stringify(
      // 서버에 전달할 데이터
    )
  });
  const data = await response.json();
  console.log(data);
}
request();


// GET요청의 async/await 패턴
async function get() {
  const response = await fetch('url 기입',
  {
    method: "GET",
  });
  const data = await response.json();
  console.log(data);
}
get();

// GET요청의 Promise 패턴
function get() {
  fetch('url 기입',{
    method: "GET",
  })
  .then(response => response.json())
  .then(json => console.log(json));
}
get()

// GET요청 테스트
async function get() {
  const response = await fetch('https://httpbin.org/get?name=hojun',
  {
    method: 'GET',
  });
  const data = await response.json();
  console.log(data);
}
get();


// POST요청 테스트
async function post() {
  const response = await fetch('https://httpbin.org/post',
  {
  method: "POST",
	headers: {
			"Content-type": "application/json; charset=UTF-8",
		},
		body: JSON.stringify({
    "title" : "게시물 제목",
    "body" : "게시물 내용",
    "userId" : "hojun",
		})
  }
	)
  const data = await response.json();
  console.log(data)
}
post()


// DELETE요청 테스트
async function deleteNotice() {
  const response = await fetch('https://httpbin.org/delete?noticeNumber=3',
  { method: "DELETE"}
	);
  const data = await response.json();
  console.log(data);
}
deleteNotice();


// PUT요청 테스트
async function put() {
  const response = await fetch('https://httpbin.org/put?noticeNumber=3',
  {
  method: "PUT",
	headers: {
			"Content-type": "application/json; charset=UTF-8",
		},
		body: JSON.stringify({
			"title" : "오늘의 간식",
	    "body" : "마카다미아 쿠키", //업데이트할 내용
	    "userId" : 1 //1번 user
		})
  }
	);
  const data = await response.json();
  console.log(data);
}
put();


// PATCH요청 테스트
async function patch() {
  const response = await fetch('https://httpbin.org/patch?noticeNumber=3',
  {
  method: "PATCH",
	headers: {
			"Content-type": "application/json; charset=UTF-8",
		},
		body: JSON.stringify({
		"body" : "마카다미아 쿠키",
		})
  }
	);
  const data = await response.json();
  console.log(data);
}
patch();