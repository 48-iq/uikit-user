import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "src/postgres/entities/user.entity";
import { UserController } from "./user.controller";
import { UserService } from "./services/user.service";
import { UserMapper } from "./mappers/user.mapper";


@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UserController],
  providers: [UserService, UserMapper],
})
export class UserModule {}