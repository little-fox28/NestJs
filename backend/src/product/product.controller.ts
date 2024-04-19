import {
  Controller,
  Post,
  Get,
  Body,
  Param,
  Patch,
  Delete,
  UseGuards,
} from "@nestjs/common";
import { ProductService } from "./product.service";
import { Product, ProductDocument } from "src/schema/product.schema";
import { JwtGuard } from "src/auth/guards/jwt.guards";

@Controller("product")
@UseGuards(JwtGuard)
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

  @Post(":id")
  async findOne(@Param("id") id: string) {
    return await this.productService.findOne(id);
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
