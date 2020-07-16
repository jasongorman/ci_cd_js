function buy(cd, amount, card, payments) {
    if (amount > cd.stock)
        throw new Error("Out of stock");
    if (!payments(card, cd.price))
        throw new Error("Payment rejected");
    return {stock: cd.stock - amount};
}

module.exports = buy;