function solution(s) {
  const arr = s.split(" ");

  return arr
    .map((v) => v.charAt(0).toUpperCase() + v.substring(1).toLowerCase())
    .join(" ");
}

/* ✔️ : v가 빈 문자열이면, 해당 요소를 배열 인덱스로 접근할 경우 undefined를 반환하기 때문에 toUpperCase()에서 런타임 오류가 발생
 
💡 charAt을 통해 index에 접근하기 
💡 substring을 통해 나머지 문자열에 접근

🌟 str.substring(indexStart[, indexEnd])
indexStart : 반환문자열의 시작 인덱스
indexEnd : 옵션. 반환문자열의 마지막 인덱스 (포함하지 않음)

*/
