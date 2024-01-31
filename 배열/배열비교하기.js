// 문제 설명
// 이 문제에서 두 정수 배열의 대소관계를 다음과 같이 정의합니다.
// 두 배열의 길이가 다르다면, 배열의 길이가 긴 쪽이 더 큽니다.
// 배열의 길이가 같다면 각 배열에 있는 모든 원소의 합을 비교하여 다르다면 더 큰 쪽이 크고, 같다면 같습니다.
// 두 정수 배열 arr1과 arr2가 주어질 때, 위에서 정의한 배열의 대소관계에 대하여 arr2가 크다면 -1, arr1이 크다면 1, 두 배열이 같다면 0을 return 하는 solution 함수를 작성해 주세요.

const solution = (arr1, arr2) => {
  if (arr1.length > arr2.length) {
    return 1;
  } else if (arr1.length < arr2.length) {
    return -1;
  } else if (arr1.length === arr2.length) {
    const total1 = arr1.reduce((acc, cur) => acc + cur);
    const total2 = arr2.reduce((acc, cur) => acc + cur);
    if (total1 > total2) {
      return 1;
    } else if (total1 < total2) {
      return -1;
    } else if (total1 === total2) {
      return 0;
    }
  }
};

// 해설 및 다른 사람 풀이
// if문이 너무 많으니깐 가독성이 안좋다. 함수로 따로 빼서 넣는 것도 좋은 방법인 것 같다
// const solution = (arr1, arr2) => {
//   return arr1.length !== arr2.length ? compare(arr1.length, arr2.length) : compare(arr1, arr2, "reduce");
// };

// const compare = (a, b, option) => {
//   if (option === "reduce") {
//       a = a.reduce((acc, cur) => acc + cur);
//       b = b.reduce((acc, cur) => acc + cur);
//   }
//   return a > b ? 1 : a < b ? -1 : 0;
// };
