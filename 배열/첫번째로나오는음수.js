// 문제 설명
// 정수 리스트 num_list가 주어질 때, 첫 번째로 나오는 음수의 인덱스를 return하도록 solution 함수를 완성해주세요. 음수가 없다면 -1을 return합니다.

// 제한 사항
// 5 ≤ num_list의 길이 ≤ 100
// -10 ≤ num_list의 원소 ≤ 100

const solution = (list) => {
  return list.findIndex((el) => el < 0);
};

// 해설
// forEach를 사용했는데 중간에 return이 안되었고,
// 반복문과 조건문을 이용해 indexOf로 값을 원하는 대로 구했지만, 예외처리가 잘 되어있지 않았다.
// findIndex를 생각하지 못했었다. 아직 메서드에 대해 많이 부족하다고 생각했다.

// 다른 사람 풀이
// function solution(num_list) {
//   let a = num_list.filter((c) => {
//     if (c < 0) return c;
//   });
//   return num_list.indexOf(a[0]);
// }
// 확장성을 고려해 모든 음수를 뽑아낸다면 이러한 코드가 더 효율적인 것 같다.
