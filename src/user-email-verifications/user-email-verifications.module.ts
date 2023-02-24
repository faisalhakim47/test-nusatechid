import { Module } from '@nestjs/common';
import { UserEmailVerificationsService } from './user-email-verifications.service';
import { UserEmailVerificationsController } from './user-email-verifications.controller';

@Module({
  controllers: [UserEmailVerificationsController],
  providers: [UserEmailVerificationsService],
})
export class UserEmailVerificationsModule {}
