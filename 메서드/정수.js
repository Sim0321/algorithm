// 문제 설명
// 실수 flo가 매개 변수로 주어질 때, flo의 정수 부분을 return하도록 solution 함수를 완성해주세요.

// 제한 사항
// 0 ≤ flo ≤ 100

function solution(flo) {
  return Math.trunc(flo);
}

// 해설

Math.round(); // 반올림한 정수 반환
Math.ceil(); // 주어진 숫자보다 크거나 같은 수 중 가장 작은 정수 반환
Math.floor(); // 주어진 숫자와 같거나 작은 정수 중에서 가장 큰 수를 반환합니다.
Math.trunc(); // 주어진 값의 소수부분을 제거하고 숫자의 정수부분을 반환합니다.
// 위에 3개는 알고 있었지만 trunc는 처음 알았다.
// trunc 메서드는 위에 3개와 다르게 양수이건 음수건 상관없이 소수점 이하 우측 부분을 제거.
