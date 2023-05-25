function solution1(n) {
  for (let i = 1; i < n; i++) {
    if (n % i === 1) {
      return i;
    }
  }
}

function solution2(n, x = 1) {
  while (x++) {
    if (n % x === 1) {
      return x;
    }
  }
}
