import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import {
  IsBoolean,
  IsDate,
  IsEmail,
  IsNotEmpty,
  IsString,
} from "class-validator";
import mongoose, { Document, model } from "mongoose";

@Schema()
export class User extends Document {
  @Prop({ type: String })
  @IsString()
  @IsNotEmpty()
  name: string;

  @Prop({ type: String, unique: true })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @Prop({ type: String })
  @IsString()
  @IsNotEmpty()
  password: string;

  @Prop({ type: Boolean })
  @IsBoolean()
  @IsNotEmpty()
  isAdmin: boolean;

  @Prop({ type: Date, default: Date.now() })
  @IsDate()
  @IsNotEmpty()
  createdAt: Date;

  @Prop({ type: Date, default: Date.now() })
  @IsDate()
  @IsNotEmpty()
  updatedAt: Date;
}

export type UserDocument = User;
export const UserSchema = SchemaFactory.createForClass(User); // Make a model in the DB
export type UserModel = mongoose.Model<User>;
