import Address from "./entity/address";
import Customer from "./entity/customer";
import Order from "./entity/order";
import OrderItem from "./entity/order_item";

const address = new Address("Rua 1", 1, "12345-678", "Abc");
let customer = new Customer("123", "Jorlano", address);
customer.activate();

const item1 = new OrderItem("1", "Item 1", 10);
const item2 = new OrderItem("1", "Item 2", 15);

const order = new Order("1", "123", [item1, item2]);
