function solution1(x, n) {
  let answer = [x];

  for (let i = 1; i < n; i++) {
    answer.push(answer[i - 1] + x);
  }

  return answer;
}

function solution2(x, n) {
  return Array(n)
    .fill(x)
    .map((v, i) => (i + 1) * v);
}

/**
 * solution1 => solution2
 * Array(n)을 통해 길이가 n이고 내용이 비어있는 array를 만든다.
 * 내용을 x로 채운다.
 * map을 통해 채워져있는 x(v)에 index+1씩 곱하여 새롭게 배열을 만든다.
 */
