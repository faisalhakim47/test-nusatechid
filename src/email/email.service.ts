import { Injectable } from '@nestjs/common';

@Injectable()
export class EmailService {
  async sendEmail() {
    console.log('SEND EMAIL');
  }
}
