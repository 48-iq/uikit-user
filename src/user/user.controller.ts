import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  Query,
  Req,
} from '@nestjs/common';
import {
  UserCreateDto,
  UserEntityDto,
  UserUpdateDto,
} from '@48-iq/uikit-dto-lib';
import { UserService } from './services/user.service';
import { Public } from 'src/security/public.decorator';

@Controller('/api/user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  @Public()
  async createUser(@Body() body: UserCreateDto) {
    await this.userService.create({
      id: body.username,
      email: body.email,
    });
  }

  @Get('/me')
  async getMe(@Req() req: Request,) {
    const username = req['authPayload']['username'];

    const user = await this.userService.get(username);
    const userEntityDto = new UserEntityDto({
      id: user.id,
      email: user.email,
      createdAt: user.createdAt.toISOString(),
      updatedAt: user.updatedAt?.toISOString() ?? 'none',
    });
    return userEntityDto;
  }

  @Get('/:id')
  async getUser(@Param('id') id: string) {
    const user = await this.userService.get(id);
    const userEntityDto = new UserEntityDto({
      id: user.id,
      email: user.email,
      createdAt: user.createdAt.toISOString(),
      updatedAt: user.updatedAt?.toISOString() ?? 'none',
    });
    return userEntityDto;
  }

  @Put()
  async updateUser(@Req() request: Request, @Body() body: UserUpdateDto) {
    const id = request['authPayload'].id;
    await this.userService.update(id, { email: body.email });
  }
}
