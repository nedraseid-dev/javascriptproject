let purchaseAmount = 120;
let discount = purchaseAmount >= 100 ? 100 : 0;
console.log(`your total is $${purchaseAmount - (discount/100)}`)