import { Test, TestingModule } from '@nestjs/testing';
import { UserEmailVerificationsController } from './user-email-verifications.controller';
import { UserEmailVerificationsService } from './user-email-verifications.service';

describe('UserEmailVerificationsController', () => {
  let controller: UserEmailVerificationsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserEmailVerificationsController],
      providers: [UserEmailVerificationsService],
    }).compile();

    controller = module.get<UserEmailVerificationsController>(
      UserEmailVerificationsController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
