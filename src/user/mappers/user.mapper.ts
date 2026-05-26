import { Injectable } from "@nestjs/common";
import { User } from "src/postgres/entities/user.entity";
import { ResultDto } from "src/shared/dto/result.dto";
import { UserDto } from "../dto/user.dto";

@Injectable()
export class UserMapper {
  toUserResultDto(user: User): ResultDto<UserDto> {
    const payload = new UserDto();
    payload.id = user.id;
    payload.username = user.username;
    payload.createdAt = user.createdAt?.toISOString() ?? null;
    payload.updatedAt = user.updatedAt?.toISOString() ?? null;
    payload.email = user.email;

    const dto = new ResultDto<UserDto>();
    dto.success = true;
    dto.result = payload;
    return dto;
  }
}
