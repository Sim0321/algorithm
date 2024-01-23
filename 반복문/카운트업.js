// 문제 설명
// 정수 start_num와 end_num가 주어질 때, start_num부터 end_num까지의 숫자를 차례로 담은 리스트를 return하도록 solution 함수를 완성해주세요.

// 제한 사항
// 0 ≤ start_num ≤ end_num ≤ 50

const solution = (start_num, end_num) => {
  let array = [];
  for (let i = start_num; i <= end_num; i++) {
    array.push(i);
  }

  return array;
};

console.log(solution(3, 10));
// 해설

// 다른 사람 풀이
// Array.from({ length: end_num - start_num + 1 }, () => {
//   return start_num++;
// });
// from의 첫번째 매개변수는 배열 또는 유사배열을 넣고, 두 번째 매개변수는 콜백함수를 넣는다. {length}를 이용해 먼저 배열을 undefined로 채우고 콜백함수를 통해 값을 넣는 방법
