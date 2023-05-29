function solution1(str1, str2) {
  let answer = "";

  for (let i = 0; i < str1.length; i++) {
    answer += str1[i] + str2[i];
  }

  return answer;
}

function solution2(str1, str2) {
  return [...str1].map((x, idx) => x + str2[idx]).join("");
}

/**
 * solution1 => solution2
 *
 */
