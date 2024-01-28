// 문제 설명
// 정수 배열 arr과 정수 n이 매개변수로 주어집니다. arr의 길이가 홀수라면 arr의 모든 짝수 인덱스 위치에 n을 더한 배열을, arr의 길이가 짝수라면 arr의 모든 홀수 인덱스 위치에 n을 더한 배열을 return 하는 solution 함수를 작성해 주세요.

// 제한 사항
// 1 ≤ arr의 길이 ≤ 1,000
// 1 ≤ arr의 원소 ≤ 1,000
// 1 ≤ n ≤ 1,000

const solution = (arr, n) => {
  if (arr.length % 2 === 0) {
    return arr.map((el, i) => (i % 2 === 1 ? el + n : el));
  } else if (arr.length % 2 === 1) {
    return arr.map((el, i) => (i % 2 === 0 ? el + n : el));
  }
};

// 해설 및 다른 사람 풀이
// 애초에 arr의 length를 분기로 로직을 풀었는데 다른 사람 풀이는 같이 분기처리를 해서 값을 return 하는 것도 좋은 방법인 것 같다
const solution1 = (arr, n) =>
  arr.map((num, idx) => (arr.length % 2 !== idx % 2 ? num + n : num));
