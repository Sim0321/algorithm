// 문제 설명
// 길이가 같은 문자열 배열 my_strings와 이차원 정수 배열 parts가 매개변수로 주어집니다. parts[i]는 [s, e] 형태로, my_string[i]의 인덱스 s부터 인덱스 e까지의 부분 문자열을 의미합니다. 각 my_strings의 원소의 parts에 해당하는 부분 문자열을 순서대로 이어 붙인 문자열을 return 하는 solution 함수를 작성해 주세요.

const solution = (my_strings, parts) =>
  my_strings.map((v, i) => v.slice(parts[i][0], parts[i][1] + 1)).join("");

console.log(
  solution(
    ["progressive", "hamburger", "hammer", "ahocorasick"],
    [
      [0, 4],
      [1, 2],
      [3, 5],
      [7, 7],
    ]
  )
);

// 해설 및 다른 사람 풀이
// 배열이라고 항상 map, filter 함수 쓰는건 아닌 것 같다. 가끔은 반복문 사용이 더 효율적일 수도 있다.

// map의 매개변수로 배열을 넣을 수도 있다..
function solution(my_strings, parts) {
  return parts
    .map(([s, e], i) => {
      return my_strings[i].slice(s, e + 1);
    })
    .join("");
}
