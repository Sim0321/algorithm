// 문제 설명
// 정수 리스트 num_list와 정수 n이 주어질 때, num_list를 n 번째 원소 이후의 원소들과 n 번째까지의 원소들로 나눠 n 번째 원소 이후의 원소들을 n 번째까지의 원소들 앞에 붙인 리스트를 return하도록 solution 함수를 완성해주세요.

// 제한 사항
// 2 ≤ num_list의 길이 ≤ 30
// 1 ≤ num_list의 원소 ≤ 9
// 1 ≤ n ≤ num_list의 길이

const solution = (num_list, n) => {
  const sliceArr = num_list.slice(n);
  const pushArr = num_list.slice(0, n);
  return sliceArr.concat(pushArr);
};

console.log(solution([5, 2, 1, 7, 5], 3));

// 해설 및 다른 사람 풀이
// 굳이 두개의 변수를 만들 필요없이자른 것을 push 하면 한줄로 요약이 가능하다.
// function solution(num_list, n) {
//   num_list.push(...num_list.splice(0, n));
//   return num_list;
// }
