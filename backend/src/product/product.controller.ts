// product.controller.ts
import { Controller, Post, Get, Body, Param } from "@nestjs/common";
import { ProductService } from "./product.service";
import { Product, ProductDocument } from "src/schema/product.schema";

@Controller("product")
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  createProduct(@Body() product: ProductDocument): Promise<ProductDocument> {
    return this.productService.create(product);
  }

  @Get()
  async findAll(): Promise<Product[]> {
    return this.productService.findAll();
  }

  @Get("/name")
  async findOne(@Body("name") productName: string): Promise<ProductDocument> {
    return this.productService.findOne(productName);
  }
}
