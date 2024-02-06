// 문제 설명
// 정수 배열 numLog가 주어집니다. 처음에 numLog[0]에서 부터 시작해 "w", "a", "s", "d"로 이루어진 문자열을 입력으로 받아 순서대로 다음과 같은 조작을 했다고 합시다.

// "w" : 수에 1을 더한다.
// "s" : 수에 1을 뺀다.
// "d" : 수에 10을 더한다.
// "a" : 수에 10을 뺀다.
// 그리고 매번 조작을 할 때마다 결괏값을 기록한 정수 배열이 numLog입니다. 즉, numLog[i]는 numLog[0]로부터 총 i번의 조작을 가한 결과가 저장되어 있습니다.

// 주어진 정수 배열 numLog에 대해 조작을 위해 입력받은 문자열을 return 하는 solution 함수를 완성해 주세요.

const solution = (numLog) => {
  let answer = "";
  for (let i = 0; i < numLog.length; i++) {
    if (numLog[i + 1] - numLog[i] === 1) {
      answer += "w";
    } else if (numLog[i + 1] - numLog[i] === -1) {
      answer += "s";
    } else if (numLog[i + 1] - numLog[i] === 10) {
      answer += "d";
    } else if (numLog[i + 1] - numLog[i] === -10) {
      answer += "a";
    }
  }
  return answer;
};

console.log(solution([0, 1, 0, 10, 0, 1, 0, 10, 0, -1, -2, -1]));

// 해설 및 다른 사람 풀이
// 이렇게 객체로 만들어서 하는 방법도 있다.
// function solution(numLog) {
//   const convert = {
//     1: "w",
//     "-1": "s",
//     10: "d",
//     "-10": "a",
//   };

//   return numLog
//     .slice(1)
//     .map((v, i) => {
//       return convert[v - numLog[i]];
//     })
//     .join("");
// }

// 객체를 만들어서 reduce로도 가능하다
// const differences = {
//   '1': 'w',
//   '-1': 's',
//   '10': 'd',
//   '-10': 'a',
// };

// function solution(numLog) {
//   return numLog.reduce(
//     (result, curr, i) => (i === 0 ? result : result + differences[curr - numLog[i - 1]]),
//     '',
//   );
// }
