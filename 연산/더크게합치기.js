// 문제 설명
// 연산 ⊕는 두 정수에 대한 연산으로 두 정수를 붙여서 쓴 값을 반환합니다. 예를 들면 다음과 같습니다.

// 12 ⊕ 3 = 123
// 3 ⊕ 12 = 312
// 양의 정수 a와 b가 주어졌을 때, a ⊕ b와 b ⊕ a 중 더 큰 값을 return 하는 solution 함수를 완성해 주세요.

// 단, a ⊕ b와 b ⊕ a가 같다면 a ⊕ b를 return 합니다.

// 제한 사항
// 1 ≤ a, b < 10,000

function solution(a, b) {
  const atob = a.toString() + b.toString();
  const btoa = b.toString() + a.toString();
  return atob >= btoa ? Number(atob) : Number(btoa);
}

// 해설
// number인 매개변수를 string으로 바꾸고 합치면 문자열로 합칠 수 있다는 점을 이용해 변수를 만들고 변수를 비교해서 number 타입으로 값을 반환했다.

// 다른 사람풀이
// return Math.max(Number(`${a}${b}`), Number(`${b}${a}`))
// Math.max 함수를 이용해 인수들 중 가장 큰 것을 반환
