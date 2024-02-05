// 문제 설명
// 음이 아닌 정수를 9로 나눈 나머지는 그 정수의 각 자리 숫자의 합을 9로 나눈 나머지와 같은 것이 알려져 있습니다.
// 이 사실을 이용하여 음이 아닌 정수가 문자열 number로 주어질 때, 이 정수를 9로 나눈 나머지를 return 하는 solution 함수를 작성해주세요.

const solution = (num) => {
  return (
    num
      .split("")
      .map((el) => el * 1)
      .reduce((acc, cur) => acc + cur) % 9
  );
};

console.log(solution("123"));
console.log(solution("78720646226947352489"));

// 해설 및 다른 사람 풀이
// 굳이 map을 돌려서 *1로 숫자로 바꿀 필요없이 reduce에서 +acc+(+cur)하면 됐었다. 그리고 문자열을 배열로 바꾼다고 split() 메서드 말고 [...num]으로도 가능했다.
