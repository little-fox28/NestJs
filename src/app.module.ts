import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { ProductModule } from "./product/product.module";
import { MongooseModule } from "@nestjs/mongoose";

@Module({
  imports: [
    ProductModule,
    MongooseModule.forRoot("mongodb://root:1@localhost:27017"),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
