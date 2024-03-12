// 문제 설명
// 문자열 my_string과 이차원 정수 배열 queries가 매개변수로 주어집니다. queries의 원소는 [s, e] 형태로, my_string의 인덱스 s부터 인덱스 e까지를 뒤집으라는 의미입니다. my_string에 queries의 명령을 순서대로 처리한 후의 문자열을 return 하는 solution 함수를 작성해 주세요.

const reverseString = (str) => {
  return str.split("").reverse().join("");
};

const solution = (my_string, queries) => {
  for (let i = 0; i < queries.length; i++) {
    const [start, end] = queries[i];
    const reverseStr = reverseString(my_string.slice(start, end + 1));
    my_string =
      my_string.slice(0, start) + reverseStr + my_string.slice(end + 1);
  }

  return my_string;
};

console.log(
  solution("rermgorpsam", [
    [2, 3],
    [0, 7],
    [5, 9],
    [6, 10],
  ])
);

// 해설 및 다른 사람 풀이
// function solution(my_string, queries) {
//   let str = my_string.split("");
//   queries.forEach(([start, end]) => {
//     const changeStr = str.slice(start, end + 1);
//     str.splice(start, changeStr.length, ...changeStr.reverse());
//   });
//   return str.join("");
// }
