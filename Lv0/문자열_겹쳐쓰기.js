function solution(my_string, overwrite_string, s) {
  let result = my_string.slice(0, s);

  result += overwrite_string;
  result += my_string.slice(s + overwrite_string.length);

  return result;
}
