import { Controller, Delete, Get, Param, Post, Patch, Body, Query, Put } from '@nestjs/common';
import { CreateMovieDTO } from './dto/create-movie.dto';
import { UpdateMovieDTO } from './dto/update-movie.dto';
import { Movie } from './entities/movie.entity';
import { MoviesService } from './movies.service';

@Controller('movies') // Prefix make default router
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  @Get()
  getAll(): Movie[] {
    return this.moviesService.getAll();
  }

  @Get('search')
  search(@Query('year') year: string) {
    return `We are searching movie ${year}`;
  }

  @Get(':id')
  getById(@Param('id') movieId: number): Movie {
    // Prefix id === Param('id') will work.
    return this.moviesService.getById(movieId);
  }

  @Post()
  create(@Body() movieData: CreateMovieDTO) {
    return this.moviesService.create(movieData);
  }

  // @Put() // Update whole Resource.
  // putById() {
  //   return 'This will change movie';
  // }

  @Patch(':id') // Update part of resource.
  patchById(@Param('id') movieId: number, @Body() updateData: UpdateMovieDTO) {
    return this.moviesService.updateById(movieId, updateData);
  }

  @Delete(':id')
  deleteById(@Param('id') movieId: number) {
    this.getById(movieId);
    this.moviesService.deleteById(movieId);
  }
}
