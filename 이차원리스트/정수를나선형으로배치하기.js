// 문제 설명
// 양의 정수 n이 매개변수로 주어집니다. n × n 배열에 1부터 n2 까지 정수를 인덱스 [0][0]부터 시계방향 나선형으로 배치한 이차원 배열을 return 하는 solution 함수를 작성해 주세요.

const solution = (n) => {
  const move = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];
  const answer = Array.from(Array(n), () => Array(n).fill(0));

  let x = 0,
    y = 0,
    dir = 0,
    num = 1;
  while (num <= n ** 2) {
    answer[x][y] = num;
    let nextX = x + move[dir][0];
    let nextY = y + move[dir][1];
    if (
      nextX >= n ||
      nextX < 0 ||
      nextY >= n ||
      nextY < 0 ||
      answer[nextX][nextY] !== 0
    ) {
      dir = (dir + 1) % 4;
      nextX = x + move[dir][0];
      nextY = y + move[dir][1];
    }
    x = nextX;
    y = nextY;
    num++;
  }
  return answer;
};

console.log(solution(4));

// 해설 및 다른 사람 풀이
