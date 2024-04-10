// product.controller.ts
import { Controller, Post, Get, Body } from "@nestjs/common";
import { ProductService } from "./product.service";
import { Product, ProductDocument } from "src/schema/product.schema";

@Controller("product")
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  createProduct(
    @Body("name") name: string,
    @Body("price") price: number,
    @Body("description") description?: string
  ): Promise<ProductDocument> {
    return this.productService.create(name, price, description);
  }

  @Get()
  async findAll(): Promise<Product[]> {
    return this.productService.findAll();
  }
}
