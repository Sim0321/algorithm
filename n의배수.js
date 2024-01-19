// 문제 설명
// 정수 num과 n이 매개 변수로 주어질 때, num이 n의 배수이면 1을 return n의 배수가 아니라면 0을 return하도록 solution 함수를 완성해주세요.

// 제한 사항
// 2 ≤ num ≤ 100
// 2 ≤ n ≤ 9

const solution = (num, n) => (num % n === 0 ? 1 : 0);

// 해설
// flag 문제에서 영감을 얻어 삼항 연산자로 대체

function solution(num, n) {
  return +!(num % n);
}
// 다른 사람 풀이를 보니 이렇게도 할 수 있는데 개인적인 의견으론 코드가 짧은건 장점이지만 가독성이 뛰어나지 않는다고 생각
