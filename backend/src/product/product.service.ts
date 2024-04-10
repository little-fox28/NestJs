// product.service.ts
import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Product, ProductDocument } from "src/schema/product.schema";

@Injectable()
export class ProductService {
  constructor(
    @InjectModel("Product") private readonly productModel: Model<Product>
  ) {}

  async create(product: ProductDocument): Promise<ProductDocument> {
    const newProduct = new this.productModel(product);
    return newProduct.save();
  }

  async findAll(): Promise<Product[]> {
    return (await this.productModel.find()).reverse();
  }

  async findOne(productName: string): Promise<ProductDocument> {
    return this.productModel.findOne({ name: productName });
  }
}
