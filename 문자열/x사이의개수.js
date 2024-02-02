// 문제 설명
// 문자열 myString이 주어집니다. myString을 문자 "x"를 기준으로 나눴을 때 나눠진 문자열 각각의 길이를 순서대로 저장한 배열을 return 하는 solution 함수를 완성해 주세요.

const solution = (string) => {
  return string.split("x").map((el) => el.length);
};

console.log(solution("oxooxoxxox"));

// 해설 및 다른 사람 풀이
