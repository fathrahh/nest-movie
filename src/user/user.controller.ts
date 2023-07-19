import { Injectable } from '@nestjs/common';
import { UserService } from './user.service';

@Injectable()
export class UserController {
  constructor(private readonly userService: UserService) {}
}
