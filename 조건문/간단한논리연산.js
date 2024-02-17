// 문제 설명
// boolean 변수 x1, x2, x3, x4가 매개변수로 주어질 때, 다음의 식의 true/false를 return 하는 solution 함수를 작성해 주세요.
// (x1 ∨ x2) ∧ (x3 ∨ x4)
// V = 논리합 OR

const solution = (x1, x2, x3, x4) => {
  return (x1 || x2) && (x3 || x4);
};

console.log(solution(true, false, false, false));

// 해설 및 다른 사람 풀이
