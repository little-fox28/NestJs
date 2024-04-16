import { Module } from "@nestjs/common";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { MongooseModule } from "@nestjs/mongoose";
import { UserSchema } from "src/schema/user.schema";
import { UserService } from "src/user/user.service";
import { UserModule } from "src/user/user.module";
import { JwtModule } from "@nestjs/jwt";

@Module({
  imports: [
    UserModule,
    JwtModule.registerAsync({
      useFactory: () => {
        return {
          secret: process.env.JWT_SECRET,
          signOptions: {
            expiresIn: 3600,
          },
        };
      },
    }),
    MongooseModule.forFeature([{ name: "User", schema: UserSchema }]),
  ],
  controllers: [AuthController],
  providers: [AuthService, UserService],
})
export class AuthModule {}
