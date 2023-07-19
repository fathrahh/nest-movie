import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { MailModule } from './mail/mail.module';
import { configService } from './config/config.service';
import { UserEntity } from './user/user.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      ...configService.getTypeOrmConfig(),
      entities: [UserEntity],
    }),
    MailModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
