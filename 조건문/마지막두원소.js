// 문제 설명
// 정수 리스트 num_list가 주어질 때, 마지막 원소가 그전 원소보다 크면 마지막 원소에서 그전 원소를 뺀 값을 마지막 원소가 그전 원소보다 크지 않다면 마지막 원소를 두 배한 값을 추가하여 return하도록 solution 함수를 완성해주세요.

// 제한 사항
// 2 ≤ num_list의 길이 ≤ 10
// 1 ≤ num_list의 원소 ≤ 9

const solution = (list) => {
  const last = list.at(-1);
  const lastSecond = list.at(-2);
  const arr = [...list];

  if (last > lastSecond) {
    arr.push(last - lastSecond);
  } else {
    arr.push(last * 2);
  }

  return arr;
};

// 해설
// 처음에는 num_list[num_list.length -1] 이렇게 하다가 at메서드를 알게 되었다. 코드의 가독성이 많이 좋아졌다.
// splice는 원본 배열 수정 그래서 return은 원본 배열로 return
// 마지막 수를 수정해서 값을 바꿔줘야하는 건줄 알았는데 그냥 뒤에 push하면 되는 문제였다....ㅎ 문제를 잘 읽자

// 다른 사람 풀이
//  const [a, b] = [...num_list].reverse();
//  return [...num_list, a > b ? a - b : a * 2];
// 구조분해할당을 이런식으로 쓸 수 있다는 것에 놀랐다. react를 사용하면서 구조분해할당 맨날 쓰는데..
