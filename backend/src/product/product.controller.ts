import {
  Controller,
  Post,
  Get,
  Body,
  Param,
  Patch,
  Delete,
} from "@nestjs/common";
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

  @Get(":name")
  async findOne(@Param("name") name: string) {
    return await this.productService.findOne(name);
  }

  @Patch(":id")
  async updateProduct(@Param("id") id: string, @Body() data: ProductDocument) {
    return await this.productService.updateOne(id, data);
  }

  @Delete(":id")
  async deleteProduct(@Param("id") id: string) {
    return await this.productService.deleteOne(id);
  }
}
