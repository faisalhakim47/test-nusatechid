import { Injectable } from '@nestjs/common';
import { CreateUserEmailVerificationDto } from './dto/create-user-email-verification.dto';
import { UpdateUserEmailVerificationDto } from './dto/update-user-email-verification.dto';

@Injectable()
export class UserEmailVerificationsService {
  create(createUserEmailVerificationDto: CreateUserEmailVerificationDto) {
    return 'This action adds a new userEmailVerification';
  }

  findAll() {
    return `This action returns all userEmailVerifications`;
  }

  findOne(id: number) {
    return `This action returns a #${id} userEmailVerification`;
  }

  update(
    id: number,
    updateUserEmailVerificationDto: UpdateUserEmailVerificationDto,
  ) {
    return `This action updates a #${id} userEmailVerification`;
  }

  remove(id: number) {
    return `This action removes a #${id} userEmailVerification`;
  }
}
