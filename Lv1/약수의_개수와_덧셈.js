function solution1(left, right) {
  let answer = 0;

  for (let i = left; i <= right; i++) {
    let arr = [];
    for (let j = 1; j <= i; j++) {
      if (i % j === 0) arr.push(j);
    }
    arr.length % 2 ? (answer -= i) : (answer += i);
  }

  return answer;
}

function solution2(left, right) {
  let answer = 0;

  for (let i = left; i <= right; i++) {
    if (Number.isInteger(Math.sqrt(i))) {
      answer -= i;
    } else {
      answer += i;
    }
  }

  return answer;
}

/**
 * 새롭게 알게된 것
 * 제곱근이 정수면 약수의 개수가 홀수다.
 * Number.isInteger() 메서드는 주어진 값이 정수인지 판별합니다.
 */
