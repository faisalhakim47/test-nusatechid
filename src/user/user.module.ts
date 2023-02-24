import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { ConfigModule } from '@nestjs/config';

const UserRepository = TypeOrmModule.forFeature([User]);

@Module({
  imports: [ConfigModule, UserRepository],
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService, UserRepository],
})
export class UserModule {}
