import OrderItem from "./order_item";

export default class Order {

    _id: string;
    _customerId: string; //not aggregate
    _items: OrderItem[]; //aggregate, relation by entity (object)
    _total: number;

    constructor(id: string, customerId: string, items: OrderItems[]) {
        this._id = id;
        this._customerId = customerId;
        this._items = items;
        this._total = 0;
    }

    total(): number {
        return this._items.reduce((acc, item) => acc + item._price, 0);
    }
}