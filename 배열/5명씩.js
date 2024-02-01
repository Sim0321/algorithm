// 문제 설명
// 최대 5명씩 탑승가능한 놀이기구를 타기 위해 줄을 서있는 사람들의 이름이 담긴 문자열 리스트 names가 주어질 때, 앞에서 부터 5명씩 묶은 그룹의 가장 앞에 서있는 사람들의 이름을 담은 리스트를 return하도록 solution 함수를 완성해주세요. 마지막 그룹이 5명이 되지 않더라도 가장 앞에 있는 사람의 이름을 포함합니다.

const solution = (names) => {
  return names.filter((_, i) => i % 5 === 0);
};

console.log(
  solution(["nami", "ahri", "jayce", "garen", "ivern", "vex", "jinx"])
);

// 해설 및 다른 사람 풀이
// 필요없는 반복 하게됨. 차라리 for문으로 index를 5씩 건너뛰는게 시간복잡도가 더 적을 것 같다는 의견있음
