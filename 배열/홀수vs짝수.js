// 문제 설명
// 정수 리스트 num_list가 주어집니다. 가장 첫 번째 원소를 1번 원소라고 할 때, 홀수 번째 원소들의 합과 짝수 번째 원소들의 합 중 큰 값을 return 하도록 solution 함수를 완성해주세요. 두 값이 같을 경우 그 값을 return합니다.

const solution = (list) => {
  let odd = 0;
  let even = 0;
  list.map((el, i) => {
    if (i % 2 === 0) {
      even += el;
    } else {
      odd += el;
    }
  });

  if (odd > even) {
    return odd;
  } else if (odd < even) {
    return even;
  } else if (odd === even) {
    return odd;
  }
};

console.log(solution([4, 2, 6, 1, 7, 6]));

// 해설 및 다른 사람 풀이

// Math.max() 이용해서 큰 값을 return 할 수도 있다..
