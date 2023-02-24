import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/user/entities/user.entity';
import { UserService } from '../user/user.service';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUser(
    usernameOrEmail: string,
    password: string,
  ): Promise<User | undefined> {
    const user = await this.userService.findOneByUsernameOrEmail(
      usernameOrEmail,
    );
    if (!user) {
      return undefined;
    }
    const isPasswordCorrect = await this.userService.verifyPassword(
      user,
      password,
    );
    return isPasswordCorrect ? user : undefined;
  }

  async signJWT(user: User) {
    const payload = { username: user.username, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
