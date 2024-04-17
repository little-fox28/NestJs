import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { UserDTO } from "src/dto/user.dto";
import { UserDocument } from "src/schema/user.schema";
import * as bcrypt from "bcryptjs";
import { JwtService } from "@nestjs/jwt";

interface LoginResponse {
  token: string;
  user: UserDocument;
}

@Injectable()
export class AuthService {
  constructor(
    @InjectModel("User") private userModel: Model<UserDocument>,
    private jwtService: JwtService
  ) {}

  async register(user: UserDocument): Promise<UserDocument> {
    try {
      const hashedPassword = await bcrypt.hash(user.password, 10);
      const newUser: UserDocument = await this.userModel.create({
        ...user,
        password: hashedPassword,
      });
      return newUser.save();
    } catch (error) {
      throw new Error(`[authService ERR:] ${error.message}`);
    }
  }

  async login(user: UserDTO): Promise<LoginResponse | null> {
    try {
      const foundUser = await this.userModel.findOne({ email: user.email });
      if (!foundUser) {
        throw new Error("User not found");
      }
      const verifyPassword = await bcrypt.compare(
        user.password,
        foundUser.password
      );
      if (!verifyPassword) {
        throw new Error("Invalid password");
      }
      return {
        user: foundUser,
        token: await this.jwtService.signAsync({ foundUser }),
      };
    } catch (error) {
      throw new Error(`[authService ERR:] ${error.message}`);
    }
  }
}
