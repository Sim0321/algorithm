// 문제 설명
// 문자열 my_string과 정수 n이 매개변수로 주어질 때, my_string의 뒤의 n글자로 이루어진 문자열을 return 하는 solution 함수를 작성해 주세요.

// 제한 사항
// my_string은 숫자와 알파벳으로 이루어져 있습니다.
// 1 ≤ my_string의 길이 ≤ 1,000
// 1 ≤ n ≤ my_string의 길이

function solution(my_string, n) {
  return my_string.slice(-n);
}

// 해설
// 좀 더 직관적으로 하기 위해 n * -1 하는게 더 낫겠다 싶다.
