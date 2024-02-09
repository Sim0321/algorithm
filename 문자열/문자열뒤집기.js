// 문제 설명
// 문자열 my_string과 정수 s, e가 매개변수로 주어질 때, my_string에서 인덱스 s부터 인덱스 e까지를 뒤집은 문자열을 return 하는 solution 함수를 작성해 주세요.

const solution = (string, s, e) => {
  return string.replace(
    string.slice(s, e + 1),
    [...string]
      .slice(s, e + 1)
      .reverse()
      .join("")
  );
};

console.log(solution("Progra21Sremm3", 6, 12));

// 해설 및 다른 사람 풀이
