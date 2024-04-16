import { Injectable } from "@nestjs/common";
import { UserDocument } from "src/schema/user.schema";
import { UserService } from "src/user/user.service";

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService) {}

  async register(user: UserDocument): Promise<UserDocument> {
    try {
      return await this.userService.register(user);
    } catch (error) {
      throw new Error(`Could not register user: ${error.message}`);
    }
  }

  async login(email, password) {
    try {
      return await this.userService.login(email, password);
    } catch (error) {
      throw new Error(`Could not found user: ${error.message}`);
    }
  }
}
