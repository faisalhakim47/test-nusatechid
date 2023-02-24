import { Test, TestingModule } from '@nestjs/testing';
import { UserEmailVerificationsService } from './user-email-verifications.service';

describe('UserEmailVerificationsService', () => {
  let service: UserEmailVerificationsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserEmailVerificationsService],
    }).compile();

    service = module.get<UserEmailVerificationsService>(
      UserEmailVerificationsService,
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
