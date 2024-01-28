// 문제 설명
// 정수 n과 k가 주어졌을 때, 1 이상 n이하의 정수 중에서 k의 배수를 오름차순으로 저장한 배열을 return 하는 solution 함수를 완성해 주세요.

// 제한 사항
// 1 ≤ n ≤ 1,000,000
// 1 ≤ k ≤ min(1,000, n)

const solution = (n, k) => {
  let arr = [];
  for (let i = k; i <= n; i += k) {
    arr.push(i);
  }
  return arr;
};

// 해설 및 다른 사람 풀이
// 처음엔 복잡하게 n/k 한 것을 정수로 바꾸고 그 length 만큼 array를 만들어 배열을 만들려했다.

// const solution = (n, k) =>
//   Array(~~(n / k))
//     .fill(k)
//     .map((v, i) => v * (i + 1));
//  ~~ 는 Math.floor()처럼 활용하는 것
