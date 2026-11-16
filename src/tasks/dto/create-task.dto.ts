import {
  IsEnum,
  IsOptional,
  IsString,
  MinLength,
} from 'class-validator';

import {
  ApiProperty,
  ApiPropertyOptional,
} from '@nestjs/swagger';

import {
  TaskStatus,
} from '../entities/task.entity';

export class CreateTaskDto {

  @ApiProperty({
    example: 'Estudiar NestJS',
    description: 'Título de la tarea',
  })
  @IsString()
  @MinLength(3)
  titulo!: string;

  @ApiPropertyOptional({
    example: 'Practicar módulos, controladores y servicios',
  })
  @IsOptional()
  @IsString()
  descripcion?: string;

  @ApiPropertyOptional({
    enum: TaskStatus,
    example: TaskStatus.PENDIENTE,
  })
  @IsOptional()
  @IsEnum(TaskStatus)
  estado?: TaskStatus;
}