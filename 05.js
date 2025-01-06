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

const scores = [36, 62, 72, 55, 86, 95, 92, 48, 81];
function plusThree(scores) {
  // 4번 문제의 계산기 함수를 활용한 코드를 작성해주세요.
  for (let i = 0; i < scores.length; i++) {
    scores[i] = cal(scores[i], "+", 3)
  }
}
plusThree(scores);
console.log(scores);