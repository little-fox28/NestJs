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

  async findAll() {
    const listOfProduct = (await this.productModel.find()).reverse();
    return listOfProduct;
  }

  async findOne(name: string) {
    return await this.productModel.find({ name });
  }

  async updateOne(id: string, data: ProductDocument) {
    return await this.productModel.findByIdAndUpdate(id, data, { new: true });
  }

  async deleteOne(id: string) {
    return await this.productModel.findByIdAndDelete(id);
  }
}
