import { Injectable, UseGuards } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { UserDocument } from "src/schema/user.schema";

import { iUserDetails } from "./iUser";
import { Model } from "mongoose";
import { JwtGuard } from "src/auth/guards/jwt.guards";

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
  async findById(id: string): Promise<iUserDetails | null> {
    const user = await this.userModel.findById(id).exec();
    if (!user) return null;
    return this._getUserDetails(user);
  }

  async findAll(): Promise<iUserDetails[]> {
    const users = await this.userModel.find().exec();
    return users.map((user) => this._getUserDetails(user));
  }
}
