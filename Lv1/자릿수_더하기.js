function solution(n) {
  let strArr = (n + "").split("");
  return strArr.reduce((acc, curr) => acc + parseInt(curr), 0);
}
