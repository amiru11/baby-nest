import { Injectable, NotFoundException } from '@nestjs/common';
import { Movie } from './entities/movie.entity';

@Injectable()
export class MoviesService {
  // Create Database
  private movies: Movie[] = [];

  getAll(): Movie[] {
    return this.movies;
  }

  getById(id: string): Movie {
    const movie = this.movies.find((movie) => movie.id === Number(id));
    if (!movie) {
      throw new NotFoundException(`Movie with ID ${id} not found`);
    }
    return movie;
  }

  create(movieData) {
    this.movies.push({
      id: this.movies.length + 1,
      ...movieData,
    });
  }

  updateById(id: string, updateData) {
    const movie = this.getById(id);
    this.deleteById(id);
    this.movies.push({ ...movie, ...updateData });
  }

  deleteById(id: string): boolean {
    this.movies = this.movies.filter((movie) => movie.id !== Number(id));
    return true;
  }
}
