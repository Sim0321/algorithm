// 문제 설명
// 정수 리스트 num_list와 정수 n이 주어질 때, n 번째 원소부터 마지막 원소까지의 모든 원소를 담은 리스트를 return하도록 solution 함수를 완성해주세요.

// 제한 사항
// 2 ≤ num_list의 길이 ≤ 30
// 1 ≤ num_list의 원소 ≤ 9
// 1 ≤ n ≤ num_list의 길이

const solution = (num_list, n) => {
  return num_list.filter((_, i) => i + 1 >= n);
};

// 해설
// 배열을 매개변수로 받으니 filter로 조건을 만들어 새로운 배열로 return.
// 너무 어렵게 생각하는 것 같다. 간단하면 간단할 수록 좋음을 계속 생각하자

// 다른 사람 풀이
// num_list.slice(n - 1);
// slice는 begin부터 end까지(end 미포함) 얕은 복사본을 새로운 배열로 return
