// 문제 설명
// 문자열 binomial이 매개변수로 주어집니다. binomial은 "a op b" 형태의 이항식이고 a와 b는 음이 아닌 정수, op는 '+', '-', '*' 중 하나입니다. 주어진 식을 계산한 정수를 return 하는 solution 함수를 작성해 주세요.

const solution = (binomial) => {
  // return eval(binomial)
  const arr = binomial.split(" ");
  const a = Number(arr[0]);
  const op = arr[1];
  const b = Number(arr[2]);
  if (op === "+") {
    return a + b;
  } else if (op === "-") {
    return a - b;
  } else if (op === "*") {
    return a * b;
  }
};

// 해설 및 다른 사람 풀이
// eval로 바로 사용가능하지만 보안이 취약

// const ops = {
//   "+": (a, b) => a + b,
//   "-": (a, b) => a - b,
//   "*": (a, b) => a * b,
// };

// function solution(binomial) {
//   const [a, op, b] = binomial.split(" ");
//   return ops[op](+a, +b);
// }
