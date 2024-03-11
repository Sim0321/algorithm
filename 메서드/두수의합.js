// 문제 설명
// 0 이상의 두 정수가 문자열 a, b로 주어질 때, a + b의 값을 문자열로 return 하는 solution 함수를 작성해 주세요.

const solution = (a, b) => {
  return `${BigInt(a) + BigInt(b)}`;
};

console.log(solution("582", "734"));

// 해설 및 다른 사람 풀이
// 기존에는 아래의 로직되로 했지만 테스트케이스 통과하지 못함.
// 이유는 Number로 표현할 수 있는 값의 범위를 넘어서서, 넘어간 자리수는 0으로 채워지는 이유.
// const solution = (a, b) => {
//   return `${a * 1 + b * 1}`;
// };
