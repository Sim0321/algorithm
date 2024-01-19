// 문제 설명
// 두 정수 a, b와 boolean 변수 flag가 매개변수로 주어질 때, flag가 true면 a + b를 false면 a - b를 return 하는 solution 함수를 작성해 주세요.

// 제한 사항
// -1,000 ≤ a, b ≤ 1,000

function solution(a, b, flag) {
  if (flag) {
    return a + b;
  } else {
    return a - b;
  }
}

// 해설
// 삼항 연산자로 더 쉽게 풀 수 있다는걸 깨달았다.. react에서는 맨날 삼항 연산자 쓰면서 활용을 잘 못하는 듯
const solution = (a, b, flag) => (flag ? a + b : a - b);
