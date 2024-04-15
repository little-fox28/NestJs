import { Body, Controller, Get, Post } from "@nestjs/common";
import { UserDocument } from "src/schema/user.schema";
import { AuthService } from "./auth.service";

@Controller("auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post("register")
  register(user: UserDocument) {
    return this.authService.register(user);
  }

  @Post("login")
  login(@Body("email") email: string, @Body("password") password: string) {
    return this.authService.login(email, password);
  }
}
