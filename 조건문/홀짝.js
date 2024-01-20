// 문제 설명
// 양의 정수 n이 매개변수로 주어질 때, n이 홀수라면 n 이하의 홀수인 모든 양의 정수의 합을 return 하고 n이 짝수라면 n 이하의 짝수인 모든 양의 정수의 제곱의 합을 return 하는 solution 함수를 작성해 주세요.

// 제한 사항
// 1 ≤ n ≤ 100

function solution(n) {
  let answer = 0;

  if (n % 2 === 1) {
    for (let i = 1; i <= n; i++) {
      if (i % 2 === 1) {
        answer += i;
      }
    }
  } else if (n % 2 === 0) {
    for (let i = 2; i <= n; i++) {
      if (i % 2 === 0) {
        answer += i ** 2;
      }
    }
  }
  return answer;
}

// 해설
// let answer 만 했고 NaN이 떴다. undefined로 초기화 했는데 answer+=i 형식으로 해서 undefined + numer로 되어서 그 후에도 NaN이 떴다. let answer =0으로 수정

// 다른 사람의 풀이를 보니 n이 짝수 일때는 등차수열의 합, 홀수 일때는 자연수 거듭 제곱의 합을 구하는 공식

// function solution(n) {
//   if(n%2===1)
//     return  (n+1)/2*((n + 1)/2) ;
//   else
//     return   n*(n+1)*(n+2)/6;
// }
