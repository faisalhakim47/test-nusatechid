import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UserEmailVerificationsService } from './user-email-verifications.service';
import { CreateUserEmailVerificationDto } from './dto/create-user-email-verification.dto';
import { UpdateUserEmailVerificationDto } from './dto/update-user-email-verification.dto';

@Controller('user-email-verifications')
export class UserEmailVerificationsController {
  constructor(
    private readonly userEmailVerificationsService: UserEmailVerificationsService,
  ) {}

  @Post()
  create(
    @Body() createUserEmailVerificationDto: CreateUserEmailVerificationDto,
  ) {
    return this.userEmailVerificationsService.create(
      createUserEmailVerificationDto,
    );
  }

  @Get()
  findAll() {
    return this.userEmailVerificationsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userEmailVerificationsService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateUserEmailVerificationDto: UpdateUserEmailVerificationDto,
  ) {
    return this.userEmailVerificationsService.update(
      +id,
      updateUserEmailVerificationDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userEmailVerificationsService.remove(+id);
  }
}
