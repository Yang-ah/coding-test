function solution1(ineq, eq, n, m) {
  if (n === m && eq === "=") return 1;

  if (ineq === "<") {
    return n < m ? 1 : 0;
  } else {
    return n > m ? 1 : 0;
  }
}

///////////////////////////////////////

const operations = {
  ">=": (n, m) => n >= m,
  "<=": (n, m) => n <= m,
  ">!": (n, m) => n > m,
  "<!": (n, m) => n < m,
};

function solution2(ineq, eq, n, m) {
  const op = operations[ineq + eq];
  return Number(op(n, m));
}

/**
 * solution1 => solution2
 *
 * 새롭게 알게 된 것
 * Number(true) = 1, Number(false) = 0
 *
 */
