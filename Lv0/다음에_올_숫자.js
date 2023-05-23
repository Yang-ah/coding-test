function solution(common) {
  const test1 = common[1] - common[0];
  const test2 = common[2] - common[1];

  // 등차수열인가?
  if (test1 === test2) {
    return common[common.length - 1] + test1;
  } else {
    return (common[1] / common[0]) * common[common.length - 1];
  }
}
