import { Controller, Get, Param, UseGuards } from "@nestjs/common";
import { UserService } from "./user.service";
import { JwtGuard } from "src/auth/guards/jwt.guards";

@Controller("user")
@UseGuards(JwtGuard)
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get(":id")
  getUserByID(@Param("id") id: string) {
    return this.userService.findById(id);
  }

  @Get()
  getAllUsers() {
    return this.userService.findAll();
  }
}
