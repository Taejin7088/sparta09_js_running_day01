function cal(n, os, m) {
  // 코드를 작성해주세요.
  switch (os) {
    case "+":
      return n + m;
    case "-":
      return n - m;
    case "*":
      return n * m;
    case "/":
      return n / m;
  }
}

cal(3, "+", 6); // 결과값 9
cal(11, "-", 6); // 결과값 5
cal(6, "*", 3); // 결과값 18
cal(15, "/", 3); // 결과값 5
