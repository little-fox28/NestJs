import { Body, Controller, Get, Post } from "@nestjs/common";
import { UserService } from "./user.service";
import { UserDocument } from "src/schema/user.schema";

@Controller("user")
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Post()
  createUser(@Body() user: UserDocument) {
    return this.userService.createUser(user);
  }

  @Get()
  hello() {
    return "Hello";
  }
}
