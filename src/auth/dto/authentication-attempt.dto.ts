import { IsNotEmpty } from 'class-validator';

export class AuthenticationAttemptDto {
  @IsNotEmpty()
  usernameOrEmail: string;

  @IsNotEmpty()
  password: string;
}
