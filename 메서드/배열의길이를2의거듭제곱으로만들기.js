// 문제 설명
// 정수 배열 arr이 매개변수로 주어집니다. arr의 길이가 2의 정수 거듭제곱이 되도록 arr 뒤에 정수 0을 추가하려고 합니다. arr에 최소한의 개수로 0을 추가한 배열을 return 하는 solution 함수를 작성해 주세요.

const solution = (arr) => {
  const length = arr.length;
  let count = 0;
  while (Math.pow(2, count) < length) count++;
  for (let i = 0; i < Math.pow(2, count) - length; i++) {
    arr.push(0);
  }
  return arr;
};

// 해설 및 다른 사람 풀이
// 2의 거듭제곱인지 확인(Math.pow)하고 반복문을 이용해 0 추가
// for 문의 조건식은 반복문이 실행될 때마다 평가됨

// log2 함수를 이용하고 올림한값과 2를 곱해 전체길이를 구한 다음 배열에 추가
function solution(arr) {
  const length = arr.length;
  const totalLength = 2 ** Math.ceil(Math.log2(length)); //2*3
  return [...arr, ...new Array(totalLength - length).fill(0)];
}

console.log(solution([1, 2, 3, 4, 5, 6]));
