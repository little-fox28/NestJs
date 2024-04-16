import { Body, Controller, Get, Post } from "@nestjs/common";
import { UserService } from "./user.service";
import { UserDocument } from "src/schema/user.schema";

@Controller("user")
export class UserController {
  constructor(private readonly userService: UserService) {}
}
