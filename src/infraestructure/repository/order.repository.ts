import Order from "../../domain/entity/order";
import OrderItem from "../../domain/entity/order_item";
import OrderRepositoryInterface from "../../domain/repository/order-repository.interface";
import OrderItemModel from "../db/sequelize/model/order-item.model";
import OrderModel from "../db/sequelize/model/order.model";

export default class OrderRepository implements OrderRepositoryInterface {

    async create(entity: Order): Promise<void> {

        await OrderModel.create({
            id: entity.id,
            customer_id: entity.customerId,
            total: entity.total(),
            items: entity.items.map((item) => ({
                id: item.id,
                name: item.name,
                price: item.price,
                product_id: item.productId,
                quantity: item.quantity,
            })),
        },
        {
            include: [{model: OrderItemModel}],
        });

    }

    async update(entity: Order): Promise<void> {
        
        await OrderModel.update({
            id: entity.id,
            customer_id: entity.customerId,
            total: entity.total(),
        }, 
        {
            where: {
                id: entity.id,
            }
        });

        entity.items.map((item) => {
            OrderItemModel.update(
                {
                    id: item.id,
                    name: item.name,
                    price: item.price,
                    product_id: item.productId,
                    order_id: entity.id,
                    quantity: item.quantity,
                },
                {
                    where: { id: item.id }
                }
            ).then(() => {});
        });
    }

    async find(id: String): Promise<Order> {
        const orderModel = await OrderModel.findOne(
            { 
              where: { id: id },
              include: ["items"], 
            });

        let orderItems:OrderItem[] = [];

        orderModel.items.map((itemModel) => {
            orderItems.push(new OrderItem(itemModel.id, itemModel.name, itemModel.price, itemModel.product_id, itemModel.quantity, itemModel.order_id));
        });

        const order = new Order(orderModel.id, orderModel.customer_id, orderItems);

        return order;
    }

    async findAll(): Promise<Order[]> {
        throw Error("Not implemented");
    }
}