// 문제 설명
// 정수가 담긴 리스트 num_list가 주어집니다. num_list의 홀수만 순서대로 이어 붙인 수와 짝수만 순서대로 이어 붙인 수의 합을 return하도록 solution 함수를 완성해주세요.

// 제한 사항
// 2 ≤ num_list의 길이 ≤ 10
// 1 ≤ num_list의 원소 ≤ 9
// num_list에는 적어도 한 개씩의 짝수와 홀수가 있습니다.

function solution(num_list) {
  let odd = "";
  let even = "";
  for (let num of num_list) {
    if (num % 2 === 1) {
      odd += `${num}`;
    } else {
      even += `${num}`;
    }
  }

  return Number(odd) + Number(even);
}

// 해설
// 문자열 앞에 +가 붙으면 암묵적 타입변환을 해 숫자로 바뀜

// 다른 사람 풀이
// const { odds, evens } = num_list.reduce(({ odds, evens }, num) => {
//   if (num % 2 === 0) {
//       evens.push(num)
//   } else {
//       odds.push(num)
//   }
//   return { odds, evens }
// }, { odds: [], evens: [] })
// return Number(odds.join('')) + Number(evens.join(''))

// 좋은 코드긴 한데 쉬운 문제를 이렇게 굳이 이렇게 복잡하게 풀어야하나 생각이 든다.
