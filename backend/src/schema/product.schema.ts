import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";
import { Document } from "mongoose";

@Schema()
export class Product extends Document {
  @Prop()
  @IsString()
  @IsNotEmpty()
  name: string;

  @Prop()
  @IsNumber()
  @IsNotEmpty()
  price: number;

  @Prop()
  @IsOptional()
  @IsString()
  description?: string;
}

export type ProductDocument = Product;
export const ProductSchema = SchemaFactory.createForClass(Product);
