function 함수명(n) {
  return (n % 2 === 0) ? "짝수" : "홀수";
}

console.log(함수명(10)); // 결과값 "짝수";
console.log(함수명(7)); // 결과값 "홀수";
console.log(함수명(0)); // 결과값 "홀수";