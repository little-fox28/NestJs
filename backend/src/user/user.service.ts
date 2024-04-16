import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
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
}
