// 문제 설명
// 정수 배열 arr와 2차원 정수 배열 queries이 주어집니다. queries의 원소는 각각 하나의 query를 나타내며, [i, j] 꼴입니다.

// 각 query마다 순서대로 arr[i]의 값과 arr[j]의 값을 서로 바꿉니다.

// 위 규칙에 따라 queries를 처리한 이후의 arr를 return 하는 solution 함수를 완성해 주세요.

const solution = (arr, queryies) => {
  queryies.map((el) => {
    const [i, j] = el;
    const first = arr[i];

    arr[i] = arr[j];
    arr[j] = first;
  });

  return arr;
};

console.log(
  solution(
    [0, 1, 2, 3, 4],
    [
      [0, 3],
      [1, 2],
      [1, 4],
    ]
  )
);

// 해설 및 다른 사람 풀이
function solution(arr, queries) {
  queries.forEach(([a, b]) => {
    [arr[a], arr[b]] = [arr[b], arr[a]];
  });
  return arr;
}
