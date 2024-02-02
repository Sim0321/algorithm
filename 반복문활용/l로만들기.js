// 문제 설명
// 알파벳 소문자로 이루어진 문자열 myString이 주어집니다. 알파벳 순서에서 "l"보다 앞서는 모든 문자를 "l"로 바꾼 문자열을 return 하는 solution 함수를 완성해 주세요.

const solution = (string) => {
  return string
    .split("")
    .map((el) => (el < "l" ? "l" : el))
    .join("");
};

console.log(solution("abcdevwxyz"));

// 해설 및 다른 사람 풀이

// 문자 자체로도 크기 비교가 가능
// 위에 방식대로 하면 테스트들의 크기가 꽤 높은 것들이 있어서 정규식을 싫어하는 내가 정규식으로도 테스트 해봤는데 비슷하다 정규식과 별 차이는 없는 듯..
