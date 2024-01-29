// 문제 설명
// 알파벳으로 이루어진 문자열 myString과 pat이 주어집니다. myString의 연속된 부분 문자열 중 pat이 존재하면 1을 그렇지 않으면 0을 return 하는 solution 함수를 완성해 주세요.

// 단, 알파벳 대문자와 소문자는 구분하지 않습니다.

// 제한 사항
// 1 ≤ myString의 길이 ≤ 100,000
// 1 ≤ pat의 길이 ≤ 300
// myString과 pat은 모두 알파벳으로 이루어진 문자열입니다.

const solution = (string, pat) => {
  return string.toUpperCase().includes(pat.toUpperCase()) ? 1 : 0;
};

// 해설 및 다른 사람 풀이
// 대소문자 구분없다해서 매개변수들을 전부 대문자로 바꾼 후 포함되어있는지 여부에 따라 1,0 return
