import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  Req,
} from '@nestjs/common';
import {
  UserCreateDto,
  UserUpdateDto,
} from '@48-iq/uikit-dto-lib';
import { UserService } from './services/user.service';
import { Public } from 'src/security/public.decorator';
import { UserMapper } from './mappers/user.mapper';

@Controller('/api/user')
export class UserController {
  constructor(private readonly userService: UserService, private readonly userMapper: UserMapper) {}

  @Post()
  @Public()
  async createUser(@Body() body: UserCreateDto) {
    await this.userService.create({
      id: body.username,
      username: body.username,
      email: body.email,
    });
  }

  @Get('/me')
  async getMe(@Req() req: Request,) {
    const userId = req['authPayload']['userId'];
    const user = await this.userService.get(userId);

    return this.userMapper.toUserResultDto(user);
  }

  @Get('/:id')
  async getUser(@Param('id') id: string) {
    const user = await this.userService.get(id);

    return this.userMapper.toUserResultDto(user);;
  }

  @Put()
  async updateUser(@Req() request: Request, @Body() body: UserUpdateDto) {
    const id = request['authPayload']['userId'];
    await this.userService.update(id, { email: body.email });
  }
}
