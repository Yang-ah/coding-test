function solution1(number) {
  let answer = 0;

  for (let i = 0; i < number.length; i++) {
    for (let j = i + 1; j < number.length; j++) {
      for (let k = j + 1; k < number.length; k++) {
        if (number[i] + number[j] + number[k] === 0) {
          answer++;
        }
      }
    }
  }

  return answer;
}

function solution2(number) {
  let result = 0;

  const combination = (current, start) => {
    if (current.length === 3) {
      result += current.reduce((acc, cur) => acc + cur, 0) === 0 ? 1 : 0;
      return;
    }

    for (let i = start; i < number.length; i++) {
      combination([...current, number[i]], i + 1);
    }
  };
  combination([], 0);
  return result;
}

/**
 * solution1 => solution2
 * 재귀함수에 대해 추가 학습이 필요함.
 * 재귀 함수는 알고리즘 설계와 문제 해결에 유용하게 사용될 수 있습니다.
 * 특히, 반복적인 작업을 수행하거나 문제를 작은 부분으로 분할하여 해결해야 할 때 재귀 함수가 유용합니다.
 *
 * solution2
 * 서로 다른 사람 3명을 필요로하므로
 * 조합 활용 => 3명이 존재 => 그 합을 구하여 0이면 count++;
 * combination 함수 사용
 *
 */
