// 문제 설명

const solution = (string, pat) => {
  return string.slice(0, string.lastIndexOf(pat) + pat.length);
};

console.log(solution("AAAAaaaa", "a"));

// 해설 및 다른 사람 풀이
// pat이 여러번 등장한다면 마지막 인덱스를 알아야하는 문제
