import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepo: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto) {
    const user = new User();
    user.email = createUserDto.email;
    user.username = createUserDto.username;
    const salt = await bcrypt.genSalt();
    user.password = await bcrypt.hash(createUserDto.password, salt);

    await this.userRepo.save(user);

    return user;
  }

  findAll() {
    return this.userRepo.find();
  }

  async findOne(id: number) {
    return await this.userRepo.findOneOrFail({ where: { id } });
  }

  async findOneByUsernameOrEmail(usernameOrEmail: string) {
    return await this.userRepo
      .createQueryBuilder()
      .where('user = :user OR email = :email', {
        user: usernameOrEmail,
        email: usernameOrEmail,
      })
      .getOne();
  }

  async verifyPassword(user: User, password: string) {
    return await bcrypt.compare(password, user.password);
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
