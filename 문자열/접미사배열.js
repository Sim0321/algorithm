// 문제 설명
// 어떤 문자열에 대해서 접미사는 특정 인덱스부터 시작하는 문자열을 의미합니다. 예를 들어, "banana"의 모든 접미사는 "banana", "anana", "nana", "ana", "na", "a"입니다.
// 문자열 my_string이 매개변수로 주어질 때, my_string의 모든 접미사를 사전순으로 정렬한 문자열 배열을 return 하는 solution 함수를 작성해 주세요.

const solution = (string) => {
  let arr = [];

  for (let i = 0; i < string.length; i++) {
    arr.push(string.slice(-1 * i));
  }

  return arr.sort();
};

console.log(solution("banana"));

// 해설 및 다른 사람 풀이
// function solution(my_string) {
//   return Array.from(my_string)
//     .map((_, i) => my_string.substring(i))
//     .sort();
// }
