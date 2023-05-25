function solution1(t, p) {
  let arr = [];

  for (let i = 0; i < t.length; i++) {
    let test = t.slice(i, i + p.length);

    if (test.length === p.length && +test <= p) {
      arr.push(+test);
    }
  }

  return arr.length;
}

function solution2(t, p) {
  let count = 0;
  for (let i = 0; i <= t.length - p.length; i++) {
    let value = t.slice(i, i + p.length);
    if (+p >= +value) count++;
  }
  return count;
}

/**
 * solution => solution2
 * 배열 대신 count 선언하여 조건에 맞을 때마다 count++로 count 더해주기
 */
