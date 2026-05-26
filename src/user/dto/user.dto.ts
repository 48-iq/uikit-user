import { EntityDto } from "src/shared/dto/entity.dto";

export class UserDto extends EntityDto {
  username: string;
  email: string;
}