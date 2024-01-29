// 문제 설명
// 오늘 해야 할 일이 담긴 문자열 배열 todo_list와 각각의 일을 지금 마쳤는지를 나타내는 boolean 배열 finished가 매개변수로 주어질 때, todo_list에서 아직 마치지 못한 일들을 순서대로 담은 문자열 배열을 return 하는 solution 함수를 작성해 주세요.

// 제한 사항
// 1 ≤ todo_list의 길이 1 ≤ 100
// 2 ≤ todo_list의 원소의 길이 ≤ 20
// todo_list의 원소는 영소문자로만 이루어져 있습니다.
// todo_list의 원소는 모두 서로 다릅니다.
// finished[i]는 true 또는 false이고 true는 todo_list[i]를 마쳤음을, false는 아직 마치지 못했음을 나타냅니다.
// 아직 마치지 못한 일이 적어도 하나 있습니다.

const solution = (list, finished) => {
  const obj = list.reduce((acc, cur, i) => {
    //  acc[cur] = finished[i];
    //  return acc;
    //  또는
    return { ...acc, [cur]: finished[i] };
  }, {});

  return Object.keys(obj).filter((key) => obj[key] === false);
};

// 해설 및 다른 사람 풀이
// 두개의 배열을 key값과 value값을 가진 object로 변환 후 key값들로 배열을 생성 그 후 filter 메서드로 false 인 것만 key값 배열 추출

// 다른 사람 풀이
// return todo_list.filter((e, i) => !finished[i]);
// 그냥 index의 번호로 추출하는 방법.. 괜히 쓸데없이 object를 만들었다.
