// 문제 설명
// 정수가 있을 때, 짝수라면 반으로 나누고, 홀수라면 1을 뺀 뒤 반으로 나누면, 마지막엔 1이 됩니다. 예를 들어 10이 있다면 다음과 같은 과정으로 1이 됩니다.

// 10 / 2 = 5
// (5 - 1) / 2 = 4
// 4 / 2 = 2
// 2 / 2 = 1
// 위와 같이 4번의 나누기 연산으로 1이 되었습니다.

// 정수들이 담긴 리스트 num_list가 주어질 때, num_list의 모든 원소를 1로 만들기 위해서 필요한 나누기 연산의 횟수를 return하도록 solution 함수를 완성해주세요.

const solution = (list) => {
  let answer = 0;
  for (let num of list) {
    while (num !== 1) {
      if (num % 2) {
        num = (num - 1) / 2;
      } else {
        num /= 2;
      }
      answer += 1;
    }
  }
  return answer;
};

console.log(solution([12, 4, 15, 1, 14]));

// 해설 및 다른 사람 풀이
function solution(num_list) {
  return num_list.reduce((acc, cur) => {
    let count = 0;
    while (cur !== 1) {
      cur = cur % 2 ? (cur - 1) / 2 : cur / 2;
      count++;
    }
    return acc + count;
  }, 0);
}
