function 인사하는함수(이름) {
  return "안녕 " + 이름 + "야~";
}

// function 나이말해주는함수(나이) {
//   return "내 나이는 " + 나이 + "살이야";
// }

const hi = 인사하는함수("철수");
const age = 나이말해주는함수(20);


// 콘솔로그에 어떻게 작성해야 할까요?
console.log(hi + "반가워."  +age); // "안녕 철수야~ 반가워. 내 나이는 20살이야"