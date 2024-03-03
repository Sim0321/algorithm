// 문제 설명

const solution = (q, r, code) => {
  let answer = "";
  for (let i = 0; i < code.length; i++) {
    if (i % q === r) {
      answer += code[i];
    }
  }
  return answer;
};

console.log(solution(3, 1, "qjnwezgrpirldywt"));

// 해설 및 다른 사람 풀이
