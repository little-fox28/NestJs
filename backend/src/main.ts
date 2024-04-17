import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { ValidationPipe } from "@nestjs/common";
import * as dotenv from "dotenv";
import { JwtGuard } from "./auth/guards/jwt.guards";

async function bootstrap() {
  dotenv.config();
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
    })
  );
  app.enableCors();
  app.setGlobalPrefix("apis");
  await app.listen(8000).then(() => {
    console.log(" 🚀 Server is running...");
  });
}
bootstrap();
