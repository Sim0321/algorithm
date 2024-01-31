// 문제 설명
// 문자 "A"와 "B"로 이루어진 문자열 myString과 pat가 주어집니다. myString의 "A"를 "B"로, "B"를 "A"로 바꾼 문자열의 연속하는 부분 문자열 중 pat이 있으면 1을 아니면 0을 return 하는 solution 함수를 완성하세요.

// 제한 사항
// 1 ≤ myString의 길이 ≤ 100
// 1 ≤ pat의 길이 ≤ 10
// myString과 pat는 문자 "A"와 "B"로만 이루어진 문자열입니다.

const solution = (myString, pat) => {
  return myString
    .split("")
    .map((el) => (el === "A" ? "B" : "A"))
    .join("")
    .includes(pat)
    ? 1
    : 0;
};

// 해설 및 다른 사람 풀이
// 문자열을 [...myString]으로 배열을 만들 수 있다. split 메서드 사용하지 않고
