// 문제 설명
// 영소문자로 이루어진 문자열 my_string과 영소문자 1글자로 이루어진 문자열 alp가 매개변수로 주어질 때, my_string에서 alp에 해당하는 모든 글자를 대문자로 바꾼 문자열을 return 하는 solution 함수를 작성해 주세요.

// 제한 사항
// 1 ≤ my_string의 길이 ≤ 1,000

function solution(my_string, alp) {
  return my_string.replaceAll(alp, alp.toUpperCase());
}

// 해설
// 처음에는 반복문을 사용했지만 메서드를 찾다가 replaceAll()을 찾았다

// 다른사람풀이
// 정규식 사용, 배열 사용 두 가지가 대부분
