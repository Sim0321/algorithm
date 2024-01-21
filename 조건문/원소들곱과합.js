// 문제 설명
// 정수가 담긴 리스트 num_list가 주어질 때, 모든 원소들의 곱이 모든 원소들의 합의 제곱보다 작으면 1을 크면 0을 return하도록 solution 함수를 완성해주세요.

// 제한 사항
// 2 ≤ num_list의 길이 ≤ 10
// 1 ≤ num_list의 원소 ≤ 9

function solution(num_list) {
  const sum = num_list.reduce((acc, cur) => acc + cur);

  const multiply = num_list.reduce((acc, cur) => acc * cur);

  return multiply > sum ** 2 ? 0 : 1;
}

// 해설
// reduce 메서드를 이용해 총 합을 구했다.

// function solution(num_list) {
//     let accMul = 1
//     let accSum = 0
//     for (const num of num_list) {
//         accMul *= num
//         accSum += num
//     }
//     return accMul < accSum ** 2 ? 1 : 0
// }

// 다른 사람의 풀이는 이렇게 있고, 대부분의 사람은 나 처럼 reduce 메서드를 사용했다. 새로운 방식으로 푸는 방법이 신선했다.
