function solution1(cards1, cards2, goal) {
  let idx1 = 0;
  let idx2 = 0;

  for (let i = 0; i < goal.length; i++) {
    if (goal[i] === cards1[idx1]) {
      idx1++;
    } else if (goal[i] === cards2[idx2]) {
      idx2++;
    } else {
      return "No";
    }
  }

  return "Yes";
}

function solution2(cards1, cards2, goal) {
  for (const s of goal) {
    if (cards1[0] === s) {
      cards1.shift();
    } else if (cards2[0] === s) {
      cards2.shift();
    } else {
      return "No";
    }
  }

  return "Yes";
}

/**
 * 배운점
 * solution1 => solution2
 * 1) for ...of 활용
 * for loop이 익숙해서 계속 쓴 것 같다.
 * for을 대체할 수 있는 반복문에 대해 다시 학습해야겠다.
 *
 * 2) shift 활용
 * cards의 첫번째 카드를 사용하게 되면, "없어진다"라고 했으니,
 * shift를 통해 실제로 없애버리는 것도 좋은 방법인 것 같다.
 *
 */
