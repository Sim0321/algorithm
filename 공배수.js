// 문제 설명
// 정수 number와 n, m이 주어집니다. number가 n의 배수이면서 m의 배수이면 1을 아니라면 0을 return하도록 solution 함수를 완성해주세요.

// 제한 사항
// 10 ≤ number ≤ 100
// 2 ≤ n, m < 10

function solution(number, n, m) {
  if (number % n === 0 && number % m === 0) {
    return 1;
  } else if (number % n !== 0 || number % m !== 0) {
    return 0;
  }
}

// 처음엔 아래 코드로 했더니 몇개는 통과, 몇개는 불통과가 되었다. 예외처리에 신경써야할 것 같다
if (number % n && number % m) {
  return 1;
} else {
  return 0;
}
