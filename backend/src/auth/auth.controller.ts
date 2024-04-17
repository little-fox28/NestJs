import { Body, Controller, Get, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { UserDocument } from "src/schema/user.schema";

@Controller("auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post("register")
  register(@Body() user: UserDocument): Promise<UserDocument | null> {
    return this.authService.register(user);
  }

  @Post("login")
  async login(
    @Body() user: { email: string; password: string }
  ): Promise<{ token: string}> {
    return this.authService.login(user);
  }
}
