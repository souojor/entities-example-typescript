import Product from "../../domain/entity/product";
import ProductRepositoryInterface from "../../domain/repository/product-repository.interface";
import ProductModel from "../db/sequelize/model/product.model";

export default class ProductRepository implements ProductRepositoryInterface {

    async create(entity: Product): Promise<void> {

        await ProductModel.create({
            id: entity.id,
            name: entity.name,
            price: entity.price,
        });

    }

    async update(entity: Product): Promise<void> {
        throw new Error("Not implemented");
    }

    async find(id: String): Promise<Product> {
        throw new Error("Not implemented");
    }

    async findAll(): Promise<Product[]> {
        throw new Error("Not implemented");
    }
}