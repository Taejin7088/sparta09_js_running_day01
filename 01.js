let uninitialized;
console.log(uninitialized); // 결과값 < 참조오류 : let은 var와 다르게 값이 안정해져있으면 오류나옴 >

const apple = "사과";
//apple = "바나나"; // TypeError: Assignment to constant variable


let lotto = [3, 8, 13, 19, 21, 32];
console.log(lotto[3]); // 결과값 < 19 >

let mySchedule = "";
console.log(mySchedule); // < false >
console.log(!!mySchedule); // < false >