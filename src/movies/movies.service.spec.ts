import { NotFoundException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { MoviesService } from './movies.service';

describe('MoviesService', () => {
  let service: MoviesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MoviesService],
    }).compile();

    service = module.get<MoviesService>(MoviesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('getAll', () => {
    it('should return an array', () => {
      const result = service.getAll();
      expect(result).toBeInstanceOf(Array);
    });
  });

  describe('getById', () => {
    it('Should return a movie', () => {
      service.create({
        title: 'Test Movie',
        genres: ['test'],
        year: 2021,
      });

      const movie = service.getById(1);

      expect(movie).toBeDefined();
      expect(movie.id).toEqual(1);
    });

    it('Should throw 404 error', () => {
      try {
        service.getById(123213);
      } catch (err) {
        expect(err).toBeInstanceOf(NotFoundException);
        expect(err.message).toEqual(`Movie with ID 123213 not found`);
      }
    });
  });
});
