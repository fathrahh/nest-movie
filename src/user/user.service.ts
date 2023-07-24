import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from './user.entity';
import { CreateUserDTO } from './dto/user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  async findAll(): Promise<UserEntity[]> {
    return await this.userRepository.find();
  }

  async findOne(id: string): Promise<UserEntity | null> {
    return this.userRepository.findOneBy({ id });
  }

  async create(user: CreateUserDTO): Promise<UserEntity> {
    const userExist = await this.userRepository
      .createQueryBuilder('user')
      .where('user.email = :email', { email: user.email })
      .orWhere('user.username = :username', { username: user.username })
      .getOne();

    if (!userExist) {
      const userResponse = await this.userRepository.save(user);
      return userResponse;
    }

    let errorMsg: string;

    if (userExist.email === user.email) {
      errorMsg = 'Email Already Exist';
    } else {
      errorMsg = 'username Already Exist';
    }

    throw new HttpException(
      {
        status: HttpStatus.FORBIDDEN,
        error: errorMsg,
      },
      HttpStatus.FORBIDDEN,
    );
  }

  async remove(id: string): Promise<void> {
    await this.userRepository.delete(id);
  }
}
