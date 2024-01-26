// 문제 설명
// 정수 배열 numbers와 정수 n이 매개변수로 주어집니다. numbers의 원소를 앞에서부터 하나씩 더하다가 그 합이 n보다 커지는 순간 이때까지 더했던 원소들의 합을 return 하는 solution 함수를 작성해 주세요.

// 제한 사항
// 1 ≤ numbers의 길이 ≤ 100
// 1 ≤ numbers의 원소 ≤ 100
// 0 ≤ n < numbers의 모든 원소의 합

const solution = (numbers, n) => {
  return numbers.reduce((acc, ccr) => (acc > n ? acc : acc + ccr), 0);
};

// 해설
// 누적값과 현재값으로 배열에서 쓰이는 reduce 메서드 사용해 누적값 비교

// 다른 사람 풀이
function solution(numbers, n) {
  let sum = 0;

  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
    if (sum > n) break;
  }
  return sum;
}
// break를 이용해 for문 탈출
