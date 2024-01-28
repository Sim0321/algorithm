// 문제 설명
// 한 자리 정수로 이루어진 문자열 num_str이 주어질 때, 각 자리수의 합을 return하도록 solution 함수를 완성해주세요.

// 제한 사항
// 3 ≤ num_str ≤ 100

const solution = (num_str) => {
  let total = 0;
  for (let i = 0; i <= num_str.length - 1; i++) {
    total += Number(num_str[i]);
  }
  return total;
};

console.log(solution("1000000"));

// 해설및 다른 사람 풀이
// 처음엔 reduce 함수를 사용했지만 reduce는 array의 메서드라서 그냥 반복문을 돌렸지만 다른 사람 코드 보니 이렇게 활용할 수 있다는걸 알았다.

function solution(num_str) {
  return [...num_str].reduce((a, c) => a + +c, 0);
}

function solution(num_str) {
  var answer = 0;
  num_str.split("").map((a) => (answer += Number(a)));
  return answer;
}
