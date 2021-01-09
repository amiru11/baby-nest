import { PartialType } from '@nestjs/mapped-types';
import { CreateMovieDTO } from './create-movie.dto';

// CreateMovieDTO 기반으로 부분 타입을 적용해서 모두가 필수 값이 아니게한다.
export class UpdateMovieDTO extends PartialType(CreateMovieDTO) {}
