import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // Create Validation Pipe like middleware
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, //  데코레이터가 없는 속성은 제거해서 저장
      forbidNonWhitelisted: true, // forbidNonWhitelisted 옵션은 whitelist에서 유효한 속성이 아닌 것을 제외하는 것 대신에 에러를 날려주는 것
      transform: true, // 우리가 원하는 실제 타입으로 변환시켜줌
    }),
  );
  await app.listen(3000);
}
bootstrap();
