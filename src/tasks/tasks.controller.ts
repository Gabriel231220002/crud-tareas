import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';

import {
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';

import {
  CreateTaskDto,
} from './dto/create-task.dto';

import {
  UpdateTaskDto,
} from './dto/update-task.dto';

import {
  TasksService,
} from './tasks.service';

@ApiTags('Tareas')
@Controller('tasks')
export class TasksController {

  constructor(
    private readonly tasksService:
      TasksService,
  ) {}

  @Post()
  @ApiOperation({
    summary:
      'Crear una nueva tarea',
  })
  create(
    @Body()
    createTaskDto:
      CreateTaskDto,
  ) {
    return this.tasksService.create(
      createTaskDto,
    );
  }

  @Get()
  @ApiOperation({
    summary:
      'Listar todas las tareas',
  })
  findAll() {
    return this.tasksService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary:
      'Buscar tarea por ID',
  })
  findOne(
    @Param(
      'id',
      ParseIntPipe,
    )
    id: number,
  ) {
    return this.tasksService.findOne(
      id,
    );
  }

  @Patch(':id')
  @ApiOperation({
    summary:
      'Actualizar una tarea',
  })
  update(
    @Param(
      'id',
      ParseIntPipe,
    )
    id: number,

    @Body()
    updateTaskDto:
      UpdateTaskDto,
  ) {
    return this.tasksService.update(
      id,
      updateTaskDto,
    );
  }

  @Delete(':id')
  @ApiOperation({
    summary:
      'Eliminar una tarea',
  })
  remove(
    @Param(
      'id',
      ParseIntPipe,
    )
    id: number,
  ) {
    return this.tasksService.remove(
      id,
    );
  }
}