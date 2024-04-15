import { UserService } from "./../user/user.service";
import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { UserDocument } from "src/schema/user.schema";

@Injectable()
export class AuthService {
  constructor(@InjectModel("User") private readonly userService: UserService) {}
  async register(user: UserDocument): Promise<UserDocument> {
    try {
      const newUser = await this.userService.createUser(user);
      return newUser;
    } catch (error) {
      throw new Error(`Could not register user: ${error.message}`);
    }
  }

  async login(email, password) {
    try {
      return await this.userService.findOneUser(email, password);
    } catch (error) {
      throw new Error(`Could not found user: ${error.message}`);
    }
  }
}
