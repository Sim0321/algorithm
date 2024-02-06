// 문제 설명
// 두 정수 a, d와 길이가 n인 boolean 배열 included가 주어집니다. 첫째항이 a, 공차가 d인 등차수열에서 included[i]가 i + 1항을 의미할 때, 이 등차수열의 1항부터 n항까지 included가 true인 항들만 더한 값을 return 하는 solution 함수를 작성해 주세요.

const solution = (a, b, included) => {
  let arr = [a];

  for (let i = 1; i < included.length; i++) {
    arr[i] = arr[i - 1] + b;
  }

  return arr.reduce((acc, cur, i) => (included[i] ? acc + cur : acc), 0);
};

console.log(solution(7, 1, [false, false, false, true, false, false, false]));

// 해설 및 다른 사람 풀이
// reduce 뒤에 ,0을 붙여서 초기값을 설정하지 않으면 arr의 0번째 요소인 a가 초기값으로 설정되서 값이 다름
