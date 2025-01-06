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