function applyCoupon(cart, coupon) {
  cart.items.forEach((item) => {
    item.price -= coupon.discount;
  });
}

const userACart = {
  items: [
    { name: "키보드", price: 30000 },
    { name: "마우스", price: 20000 },
  ],
};

//const userBCart = userACart;
const userBCart = { items: [] }


userBCart.items.push({ name: "키보드", price: 30000 });
userBCart.items.push({ name: "마우스", price: 20000 })

const coupon = { discount: 5000 };

applyCoupon(userBCart, coupon);
console.log("userACart ", userACart)
console.log("userBCart할인함수적용 ", userBCart)

/*
1.	실행 결과로 userACart.items와 userBCart.items는 각각 어떻게 달라져 있을까요?
두명다 물건값 전부가 5000원씩 깍임
2.	1번의 결과에 대한 이유를 설명해보세요.
applyCoupon 함수는 coupon의 discount 객체만큼 userACart.items.price를 5000원씩 깍는 함수임
const userBCart = userACart; 는 두개의 주소값을 같다하는 선언문임으로 두개는 같음
둘다깎임
3.	원래 의도대로라면 유저 A와 유저 B 장바구니가 독립적으로 동작해야 하는데, 그렇게 하려면 코드를 어떻게 수정해야 할까요? 하드코딩하는방법밖에 모르겠음
*/
