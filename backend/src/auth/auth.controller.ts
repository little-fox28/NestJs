import { Body, Controller, Get, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { ExistingUserDTO } from "src/dto/user.dto";
import { UserDocument } from "src/schema/user.schema";

@Controller("auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post("register")
  register(@Body() user: UserDocument) {
    return this.authService.register(user);
  }

  @Post("login")
  login(@Body() user: { email: string; password: string }) {
    return this.authService.login(user);
  }
}
