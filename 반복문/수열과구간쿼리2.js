// 문제 설명

// 정수 배열 arr와 2차원 정수 배열 queries이 주어집니다. queries의 원소는 각각 하나의 query를 나타내며, [s, e, k] 꼴입니다.

// 각 query마다 순서대로 s ≤ i ≤ e인 모든 i에 대해 k보다 크면서 가장 작은 arr[i]를 찾습니다.

// 각 쿼리의 순서에 맞게 답을 저장한 배열을 반환하는 solution 함수를 완성해 주세요.
// 단, 특정 쿼리의 답이 존재하지 않으면 -1을 저장합니다.

const solution = (arr, queries) => {
  const answer = [];

  for (let i = 0; i < queries.length; i++) {
    const [s, e, k] = queries[i];
    const sliceArr = arr.slice(s, e + 1);
    const filterArr = sliceArr.filter((num) => num > k);
    if (filterArr.length === 0) {
      answer.push(-1);
    } else {
      answer.push(Math.min(...filterArr));
    }
  }

  return answer;
};

console.log(
  solution(
    [0, 1, 2, 4, 3],
    [
      [0, 4, 2],
      [0, 3, 2],
      [0, 2, 2],
    ]
  )
);

// 해설 및 다른 사람 풀이
// sort를 이용한 정렬
// function solution(arr, queries) {
//   return queries.map(([s, e, k]) => arr.slice(s, e + 1).filter((n) => n > k).sort((a, b) => a - b)[0] || -1);
// }
