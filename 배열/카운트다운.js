// 문제 설명
// 정수 start_num와 end_num가 주어질 때, start_num에서 end_num까지 1씩 감소하는 수들을 차례로 담은 리스트를 return하도록 solution 함수를 완성해주세요.

// 제한 사항
// 0 ≤ end_num ≤ start_num ≤ 50

function solution(start, end_num) {
  // let resultArray = [];
  // for (let i = end_num; i <= start; i++) {
  //   resultArray.push(i);
  // }
  // return resultArray.sort((a, b) => b - a);

  let resultArray = [];
  for (let i = start; i >= end_num; i--) {
    resultArray.push(i);
  }

  return resultArray;
}

// 다른사람 해설
// do while문 사용
// function solution(start, end) {
//   var answer = [];
//   do {
//     answer.push(start);
//     start--;
//   } while (start >= end);
//   return answer;
// }

// const solution = (start, end) =>
//   Array(start - end + 1)
//     .fill(start)
//     .map((v, i) => v - i);
// 위에 방법도 좋지만 임시로 빈 배열을 만드는게 효율적일까 의문
