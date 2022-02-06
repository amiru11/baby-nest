import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    app.useGlobalPipes(
      new ValidationPipe({
        whitelist: true, //  데코레이터가 없는 속성은 제거해서 저장
        forbidNonWhitelisted: true, // forbidNonWhitelisted 옵션은 whitelist에서 유효한 속성이 아닌 것을 제외하는 것 대신에 에러를 날려주는 것
        transform: true, // 우리가 원하는 실제 타입으로 변환시켜줌
      }),
    );
    await app.init();
  });

  it('/ (GET)', () => request(app.getHttpServer()).get('/').expect(200).expect('Welcome to Movie API!'));

  describe('/movies', () => {
    it('GET ALL', () => request(app.getHttpServer()).get('/movies').expect(200).expect([]));

    it('POST 201', () =>
      request(app.getHttpServer())
        .post('/movies')
        .send({
          title: 'test',
          year: 2000,
          genres: ['test'],
        })
        .expect(201));

    it('POST 400', () => {
      return request(app.getHttpServer())
        .post('/movies')
        .send({
          title: 'Test',
          year: 2000,
          genres: ['test'],
          other: 'thing',
        })
        .expect(400);
    });

    it('DELETE', () => request(app.getHttpServer()).delete('/movies').expect(404));
  });

  describe('/movies/:id', () => {
    it('GET 200', () => request(app.getHttpServer()).get('/movies/1').expect(200));
    it('GET 404', () => request(app.getHttpServer()).get('/movies/12').expect(404));
    it('PATCH 200', () => request(app.getHttpServer()).patch('/movies/1').send({ title: 'Updated Test' }).expect(200));
    it('DELETE 200', () => request(app.getHttpServer()).delete('/movies/1').expect(200));
  });
});
