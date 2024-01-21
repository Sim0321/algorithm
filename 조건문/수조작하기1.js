// 문제 설명
// 정수 n과 문자열 control이 주어집니다. control은 "w", "a", "s", "d"의 4개의 문자로 이루어져 있으며, control의 앞에서부터 순서대로 문자에 따라 n의 값을 바꿉니다.

// "w" : n이 1 커집니다.
// "s" : n이 1 작아집니다.
// "d" : n이 10 커집니다.
// "a" : n이 10 작아집니다.
// 위 규칙에 따라 n을 바꿨을 때 가장 마지막에 나오는 n의 값을 return 하는 solution 함수를 완성해 주세요.

// 제한 사항
// -100,000 ≤ n ≤ 100,000
// 1 ≤ control의 길이 ≤ 100,000
// control은 알파벳 소문자 "w", "a", "s", "d"로 이루어진 문자열입니다.

function solution(n, control) {
  let answer = n;
  for (let word of control) {
    if (word === "w") {
      answer += 1;
    } else if (word === "s") {
      answer -= 1;
    } else if (word === "d") {
      answer += 10;
    } else if (word === "a") {
      answer -= 10;
    }
  }
  return answer;
}

// 해설
// 각 조건별로 분기처리해서 반환

// 다른 사람풀이
// const operations = {
//   w: (n) => n + 1,
//   s: (n) => n - 1,
//   d: (n) => n + 10,
//   a: (n) => n - 10,
// };

// function solution(n, control) {
//   return [...control].reduce((prev, op) => operations[op](prev), n);
// }

// for문을 사용하지 않고 reduce를 사용해서 풀었는데 깔끔했다. 또한 reduce 메서드를 배열들의 합을 구할때만 사용했는데 reduce 메서드에 대해 좀 더 공부해야겠다는 생각이 들었다.
