// 문제 설명
// 이차원 정수 배열 arr이 매개변수로 주어집니다. arr의 행의 수가 더 많다면 열의 수가 행의 수와 같아지도록 각 행의 끝에 0을 추가하고, 열의 수가 더 많다면 행의 수가 열의 수와 같아지도록 각 열의 끝에 0을 추가한 이차원 배열을 return 하는 solution 함수를 작성해 주세요.

const solution = (arr) => {
  const row = arr.length;
  const col = arr[0].length;

  if (row > col) {
    const gap = Array(row - col).fill(0);
    console.log(gap);
    return arr.map((a) => [...a, ...gap]);
  }

  if (col > row) {
    for (let i = 0; i < col - row; i++) {
      const gap = Array(col).fill(0);
      arr.push(gap);
    }
  }

  return arr;
};

console.log(
  solution([
    [57, 192, 534, 2],
    [9, 345, 192, 999],
  ])
);

// 해설 및 다른 사람 풀이
// function solution(arr) {
//   let n = Math.max(arr.length, Math.max(...arr.map((v) => v.length)));
//   for (let a of arr) while (a.length < n) a.push(0);
//   while (arr.length < n) arr.push(Array(n).fill(0));
//   return arr;
// }
