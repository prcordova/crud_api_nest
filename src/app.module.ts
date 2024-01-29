import { Module } from "@nestjs/common";
import { UsersModule } from "./users/users.module";
import { MongooseModule } from "@nestjs/mongoose";

@Module({
  imports: [
    MongooseModule.forRoot("mongodb+srv://prcordova:JtVnv936b2zVP9lx@cluster0.ewqqxae.mongodb.net/"),

    UsersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
