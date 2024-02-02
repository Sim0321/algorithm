// 문제 설명
// 정수로 이루어진 문자열 n_str이 주어질 때, n_str의 가장 왼쪽에 처음으로 등장하는 0들을 뗀 문자열을 return하도록 solution 함수를 완성해주세요.

const solution = (str) => {
  let arr = str.split("");

  while (arr[0] === "0") {
    arr.shift();
  }

  return arr.join("");
};

console.log(solution("0010"));

// 해설 및 다른 사람 풀이

// 발상의 전환으로 숫자로 바꾸면 앞에 0 이 자연스럽게 빠지므로 이런식으로도 가능
//const solution = (str) => String(Number(str))
