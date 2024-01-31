// 문제 설명
// 문자열 myString이 주어집니다. myString에서 알파벳 "a"가 등장하면 전부 "A"로 변환하고, "A"가 아닌 모든 대문자 알파벳은 소문자 알파벳으로 변환하여 return 하는 solution 함수를 완성하세요.
const solution = (my_string) => {
  return my_string.toLowerCase().replaceAll("a", "A");
};

// 해설 및 다른 사람 풀이
// 처음에는 따로 함수를 만들어서 대문자일 때, 소문자일 때, 빈칸일 때를 분기처리한 후에 값을 return 했고 예시는 답이 다 맞았지만 테스트가 1개가 통과가 안됐다.
// 그냥 처음부터 모두 소문자로 바꾼 후, a만 찾아서 replaceAll()을 사용하면 되는거였는데 replaceAll 메서드도 알고 있는데 너무 꼬아서 생각했다. 가끔은 그냥 간단하게 생각하는 것도 좋은 것 같다

// 기존 코드
// const solution = (my_string) => {
//   return [...my_string]
//     .map((el) => (el === "a" ? "A" : checkLower(el)))
//     .join("");
// };

// function checkLower(string) {
//   if (string.toUpperCase() === string) {
//     return string.toLowerCase();
//   } else if (string.toUpperCase() !== string) {
//     return string;
//   } else {
//     return;
//   }
// }
