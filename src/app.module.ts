import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { User } from './user/entities/user.entity';
import { UserModule } from './user/user.module';
import { Wallet } from './wallet/entities/wallet.entity';
import { WalletModule } from './wallet/wallet.module';
import { CurrencyModule } from './currency/currency.module';
import { Currency } from './currency/entities/currency.entity';
import { UserEmailVerificationsModule } from './user-email-verifications/user-email-verifications.module';
import { AuthModule } from './auth/auth.module';
import { EmailService } from './email/email.service';
import { UserEmailVerification } from './user-email-verifications/entities/user-email-verification.entity';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'mysql',
        host: configService.get('DB_HOST'),
        port: parseInt(configService.get('DB_PORT'), 10),
        username: configService.get('DB_USER'),
        password: configService.get('DB_PASS'),
        database: configService.get('DB_NAME'),
        entities: [User, Currency, Wallet, UserEmailVerification],
        synchronize: true,
      }),
    }),
    AuthModule,
    CurrencyModule,
    UserEmailVerificationsModule,
    UserModule,
    WalletModule,
  ],
  controllers: [AppController],
  providers: [AppService, EmailService],
})
export class AppModule {}
