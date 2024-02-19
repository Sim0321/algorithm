// 문제 설명
// 정수 배열 arr가 주어집니다. 배열 안의 2가 모두 포함된 가장 작은 연속된 부분 배열을 return 하는 solution 함수를 완성해 주세요.

// 단, arr에 2가 없는 경우 [-1]을 return 합니다.

const solution = (arr) => {
  return arr.includes(2)
    ? arr.slice(arr.indexOf(2), arr.lastIndexOf(2) + 1)
    : [-1];
};

console.log(solution([2, 2, 3, 3, 4, 5, 2]));

// 해설 및 다른 사람 풀이
// 만약 배열에 2가 있다면 첫번째 index와 마지막 index를 구해 slice하고, 2가 없다면 -1 return
