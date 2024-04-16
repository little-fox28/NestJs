import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import * as bcrypt from "bcryptjs";

import { UserDocument } from "src/schema/user.schema";
import { iUserDetails } from "./iUser";
import { Model } from "mongoose";

@Injectable()
export class UserService {
  constructor(@InjectModel("User") private userModel: Model<UserDocument>) {}

  _getUserDetails(user: UserDocument): iUserDetails {
    return {
      id: user.id,
      name: user.name,
      email: user.email,
    };
  }

  async register(user: UserDocument): Promise<UserDocument> {
    try {
      const hashedPassword = await bcrypt.hash(user.password, 10);
      const newUser = new this.userModel({ ...user, password: hashedPassword });
      await newUser.save();
      return newUser;
    } catch (error) {
      throw new Error(`Could not create user: ${error.message}`);
    }
  }

  async login(email: string, password: string): Promise<UserDocument> {
    const foundUser = await this.userModel.findOne({ email: email });
    if (!foundUser) {
      throw new Error(`Could not found user with email: ${email}`);
    } else {
      const isMatch = await bcrypt.compare(password, foundUser.password);
      if (isMatch) {
        return foundUser;
      } else {
        throw new Error("Invalid password");
      }
    }
  }
}
