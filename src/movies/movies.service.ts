import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateMovieDTO } from './dto/create-movie.dto';
import { UpdateMovieDTO } from './dto/update-movie.dto';
import { Movie } from './entities/movie.entity';

@Injectable()
export class MoviesService {
  // Create Database
  private movies: Movie[] = [];

  getAll(): Movie[] {
    return this.movies;
  }

  getById(id: number): Movie {
    console.log('getById', id);
    const movie = this.movies.find((movie) => movie.id === id);
    if (!movie) {
      throw new NotFoundException(`Movie with ID ${id} not found`);
    }
    return movie;
  }

  create(movieData: CreateMovieDTO) {
    this.movies.push({
      id: this.movies.length + 1,
      ...movieData,
    });
  }

  updateById(id: number, updateData: UpdateMovieDTO) {
    const movie = this.getById(id);
    this.deleteById(id);
    this.movies.push({ ...movie, ...updateData });
  }

  deleteById(id: number): boolean {
    this.movies = this.movies.filter((movie) => movie.id !== id);
    return true;
  }
}
