// 문제 설명
// 문자열 my_string, overwrite_string과 정수 s가 주어집니다. 문자열 my_string의 인덱스 s부터 overwrite_string의 길이만큼을 문자열 overwrite_string으로 바꾼 문자열을 return 하는 solution 함수를 작성해 주세요.

const solution = (my_string, overwrite_string, s) => {
  const strArr = my_string.split("");
  strArr.splice(s, overwrite_string.length, overwrite_string);
  return strArr.join("");
};

console.log(solution("He11oWor1d", "lloWorl", 2));

// 해설 및 다른 사람 풀이
// 굳이 배열로 만들어서 짜르고 합칠 필요없이 자르것들 끼리 합치면 되었었다.
// function solution(my_string, overwrite_string, s) {
//     return my_string.slice(0,s)+overwrite_string+my_string.slice(s+overwrite_string.length);
// }
