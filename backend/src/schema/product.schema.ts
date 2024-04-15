import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import {
  IsDate,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from "class-validator";
import { Document } from "mongoose";

@Schema()
export class Product extends Document {
  @Prop({ type: String, unique: true })
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

  @Prop({ type: Date, default: Date.now() })
  @IsDate()
  @IsNotEmpty()
  createdAt: Date;

  @Prop({ type: Date, default: Date.now() })
  @IsDate()
  @IsNotEmpty()
  updatedAt: Date;
}

export type ProductDocument = Product;
export const ProductSchema = SchemaFactory.createForClass(Product);
