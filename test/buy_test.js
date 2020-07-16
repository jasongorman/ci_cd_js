const assert = require('assert');
const buy = require('../buy');

describe("Buy a CD", () => {
    const card = {number: "1234234534564567", expiry: "11/21", cv: "233"};
    let cd = {price: 9.99, stock: 10};

    it("Reduces stock by amount bought", () => {
        const payments = () => true;
        cd = buy(cd, 1, card, payments);
        assert.equal(cd.stock, 9);
    });

    it("Card is charged price of CD", () => {
        let paymentArgs = [];
        const payments = function ()  {
            paymentArgs = arguments;
            return true;
        }

        cd = buy(cd, 1, card, payments);

        assert.deepEqual(paymentArgs[0], card);
        assert.equal(paymentArgs[1], cd.price);
    });

    it("Throws an error when out of stock", () => {
        const payments = () => true;
        assert.throws(() => buy(cd, 11, card, payments), Error, "Out of stock");
    });

    it("Throws an error when the payment is not accepted", () => {
        const payments = () => false;
        assert.throws(() => buy(cd, 1, card, payments))
    });
})