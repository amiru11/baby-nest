import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // Create Validation Pipe live middleware
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, //  데코레이터가 없는 속성은 제거해서 저장
      forbidNonWhitelisted: true, // forbidNonWhitelisted 옵션은 whitelist에서 유효한 속성이 아닌 것을 제외하는 것 대신에 에러를 날려주는 것
    }),
  );
  await app.listen(3000);
}
bootstrap();
