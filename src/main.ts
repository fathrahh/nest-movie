import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { configService } from './config/config.service';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  await app.listen(configService.getPort(), '0.0.0.0', () => {
    console.log(`application has running on port ${configService.getPort()}`);
  });
}
bootstrap();
