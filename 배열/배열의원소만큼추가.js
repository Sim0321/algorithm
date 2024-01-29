// 문제 설명
// 아무 원소도 들어있지 않은 빈 배열 X가 있습니다. 양의 정수 배열 arr가 매개변수로 주어질 때, arr의 앞에서부터 차례대로 원소를 보면서 원소가 a라면 X의 맨 뒤에 a를 a번 추가하는 일을 반복한 뒤의 배열 X를 return 하는 solution 함수를 작성해 주세요.

// 제한 사항
// 1 ≤ arr의 길이 ≤ 100
// 1 ≤ arr의 원소 ≤ 100

const solution = (arr) => {
  return arr.reduce(
    (list, number) => [...list, ...new Array(number).fill(number)],
    []
  );
};

console.log(solution([5, 1, 4]));

// 해설 및 다른 사람 풀이
// 처음에는 map 함수 안에 반복문을 돌려 해결하려 했지만 reduce를 이용해 풀 수 있을 것 같다고 생각해서 reduce 사용
// 나는 spread를 이용했지만다른 사람풀이보니 concat을 사용했다. concat이 좀 더 가독성이 좋은 것 같다
return arr.reduce((a, c) => a.concat(Array(c).fill(c)), []);
