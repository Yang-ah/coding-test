function solution1(s) {
  // 0. 미리 거르기
  if (s[0] === ")" || s[s.length - 1] === "(") {
    return false;
  }

  // 1. ()를 문자열에서 제거한다.
  let filtered = s;
  while (filtered.includes("()")) {
    filtered = filtered.replace("()", "");
  }

  // 2. 남은 게 있다면, 결과는 false
  return filtered ? false : true;
}

function solution2(s) {
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      stack.push("(");
    } else if (s[i] === ")" && stack.length > 0) {
      stack.pop();
    } else {
      return false;
    }
  }

  return stack.length === 0;
}

function solution3(s) {
  let cum = 0;
  for (let paren of s) {
    cum += paren === "(" ? 1 : -1;
    if (cum < 0) {
      return false;
    }
  }
  return cum === 0 ? true : false;
}

/**
 * solution1 => solution2 => solution3
 *
 * solution1 : 효율성 테스트 FAIL
 * "()"를 찾아 제거하기 위해 replace 함수를 사용하고,
 * 이를 반복적으로 수행합니다. 하지만 이는 각 반복에서 문자열을 새로 생성하고
 * 복사하는 작업을 수행하므로 성능 저하를 일으킬 수 있습니다.
 *
 * solution2 : SUCCESS
 * 스택을 활용하여 괄호의 짝을 체크하는 방식을 사용하면 효율적인 해결책을 구현할 수 있습니다.
 * 스택은 데이터를 임시로 저장하는 자료구조로, 괄호의 짝을 확인하는 데 유용합니다.
 *
 * solution3 : SUCCESS
 * 각 괄호를 확인할 때마다 누적값 cum을 업데이트하고, 만약 cum이 음수가 되면 괄호의 균형이 맞지 않기 때문에 false를 반환합니다.
 * 모든 문자를 확인한 후 cum이 0이면 모든 괄호의 짝이 맞으므로 true를 반환합니다.
 *
 * 느낀점 : chatGPT를 활용해 내 코드의 문제점을 발견할 수 있었다.
 * 프로그래머스에서 잘 작성된 "solution3"을 보고, 새로웠다. 짝을 체크할 일이 생기면 꼭 이대로 활용해봐야겠다.
 */
