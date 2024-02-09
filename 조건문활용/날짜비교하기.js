// 문제 설명
// 정수 배열 date1과 date2가 주어집니다. 두 배열은 각각 날짜를 나타내며 [year, month, day] 꼴로 주어집니다. 각 배열에서 year는 연도를, month는 월을, day는 날짜를 나타냅니다.

// 만약 date1이 date2보다 앞서는 날짜라면 1을, 아니면 0을 return 하는 solution 함수를 완성해 주세요.

const solution = (date1, date2) => {
  console.log(...date1);
  const formatDate1 = new Date(date1[0], date1[1] - 1, date1[2]);
  const formatDate2 = new Date(date2[0], date2[1] - 1, date2[2]);
  return formatDate1 < formatDate2 ? 1 : 0;
};

console.log(solution([2021, 12, 28], [2021, 12, 29]));

// 해설 및 다른 사람 풀이
// 이런식으로도 된다.
// const solution = (date1, date2) => (new Date(date1) < new Date(date2) ? 1 : 0);

// function solution(date1, date2) {
//   return new Date(...date1) < new Date(...date2) ? 1 : 0;
// }
