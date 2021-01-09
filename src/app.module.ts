import { Module } from '@nestjs/common';
import { MoviesModule } from './movies/movies.module';
import { AppController } from './app.controller';

@Module({
  imports: [MoviesModule], // 모듈만 import해서 쓰게하쟈
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
