// 출력값 : s가 "1 2 3 4"라면 "1 4"를 리턴하고, "-1 -2 -3 -4"라면 "-4 -1"을 리턴

// solution1 : Math.min, Math.max 사용
function solution1(s) {
  const arr = s.split(" ");
  return Math.min(...arr) + " " + Math.max(...arr);
}

// solution2 : sort로 정렬 후 첫번째, 마지막 값 가져오기
function solution2(s) {
  let arr = s.split(" ");
  arr.sort((a, b) => a - b);
  let answer = arr[0] + " " + arr[arr.length - 1];

  return answer;
}

// 💡 : array도 Math.min, Math.max를 사용할 수 있다.
