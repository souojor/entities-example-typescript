import Order from "./order";
import OrderItem from "./order_item";

describe("Order unit tests", () => {

    it("should throw error when id is empty", () => {

        expect(() => {
            let order = new Order("", "123", []);
        }).toThrowError("Id is required.");

    });

    it("should throw error when customerId is empty", () => {

        expect(() => {
            let order = new Order("123", "", []);
        }).toThrowError("CustomerId is required.");

    });

    it("should throw error when items is empty", () => {

        expect(() => {
            let order = new Order("123", "123", []);
        }).toThrowError("Items are required.");

    });

    it("should calculate total", () => {

        const item = new OrderItem("i1", "Item 1", 100);
        const item2 = new OrderItem("i2", "Item 2", 200);
        const order = new Order("o1", "c1", [item, item2]);

        const total = order.total();

        expect(total).toBe(300);
    });
});