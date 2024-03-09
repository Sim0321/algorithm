// 문제 설명
// 알파벳 대소문자로만 이루어진 문자열 my_string이 주어질 때, my_string에서 'A'의 개수, my_string에서 'B'의 개수,..., my_string에서 'Z'의 개수, my_string에서 'a'의 개수, my_string에서 'b'의 개수,..., my_string에서 'z'의 개수를 순서대로 담은 길이 52의 정수 배열을 return 하는 solution 함수를 작성해 주세요.

const solution = (my_string) => {
  const arr = Array(52).fill(0);

  for (let i = 0; i < my_string.length; i++) {
    let alpha = my_string.charCodeAt(i);
    if (alpha >= 65 && alpha <= 90) {
      arr[alpha - 65]++;
    } else {
      arr[alpha - 71]++;
    }
  }
  return arr;
};

console.log(solution("Programmers"));

// 해설 및 다른 사람 풀이
