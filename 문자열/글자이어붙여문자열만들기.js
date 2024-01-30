// 문제 설명
// 문자열 my_string과 정수 배열 index_list가 매개변수로 주어집니다. my_string의 index_list의 원소들에 해당하는 인덱스의 글자들을 순서대로 이어 붙인 문자열을 return 하는 solution 함수를 작성해 주세요.

// 제한 사항
// 1 ≤ my_string의 길이 ≤ 1,000
// my_string의 원소는 영소문자로 이루어져 있습니다.
// 1 ≤ index_list의 길이 ≤ 1,000
// 0 ≤ index_list의 원소 < my_string의 길이

const solution = (my_string, index_list) => {
  return index_list.map((el) => my_string[el]).join("");
};

// 해설 및 다른 사람 풀이
// join 메서드를 활용해서 배열을 합치는 것 까지 했지만 빈 문자열을 전달하면 문자사이에 공백없이 연결되는 것을 몰랐다..

// function solution(my_string, index_list) {
//   return index_list.reduce((result, i) => result + my_string[i], "");
// }
// reduce를 활용할 수도 있다는 것을 알게되었다..
