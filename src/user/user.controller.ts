import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDTO } from './dto/user.dto';
import { UserEntity } from './user.entity';
import { UserRO } from './user.interface';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  public async createUser(@Body() userDTO: CreateUserDTO): Promise<UserRO> {
    const { username, email } = await this.userService.create(userDTO);

    return { username, email };
  }

  @Post('/login')
  public async login() {
    return '';
  }
}
