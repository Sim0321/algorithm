// 문제 설명
// 단어가 공백 한 개로 구분되어 있는 문자열 my_string이 매개변수로 주어질 때, my_string에 나온 단어를 앞에서부터 순서대로 담은 문자열 배열을 return 하는 solution 함수를 작성해 주세요.

const solution = (my_string) => {
  return my_string.split(" ").filter((v) => v !== "");
};

// 해설 및 다른 사람 풀이
// 빈칸이 어떻든 filter에서 걸러지니깐 공백으로 구분하기2와 풀이가 같다.
