// 문제 설명

const solution = (string, pat) => {
  return string.slice(0, string.lastIndexOf(pat) + pat.length);
};

console.log(solution("AAAAaaaa", "a"));

// 해설 및 다른 사람 풀이
// pat이 여러번 등장한다면 마지막 인덱스를 알아야하는 문제
// const solution = (str, pat) => str.substring(0, str.lastIndexOf(pat)) + pat;
// substring은 잘 사용하지 않아서 모르는데 한번 공부가 필요하다.
