import { PartialType } from '@nestjs/mapped-types';
import { CreateUserEmailVerificationDto } from './create-user-email-verification.dto';

export class UpdateUserEmailVerificationDto extends PartialType(
  CreateUserEmailVerificationDto,
) {}
