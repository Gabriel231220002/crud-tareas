import {
  Injectable,
  NotFoundException,
} from '@nestjs/common';

import {
  CreateTaskDto,
} from './dto/create-task.dto';

import {
  UpdateTaskDto,
} from './dto/update-task.dto';

import {
  Task,
  TaskStatus,
} from './entities/task.entity';

@Injectable()
export class TasksService {

  private tasks: Task[] = [];

  private nextId = 1;

  create(
    createTaskDto: CreateTaskDto,
  ): Task {

    const nuevaTarea: Task = {
      id: this.nextId++,

      titulo:
        createTaskDto.titulo,

      descripcion:
        createTaskDto.descripcion,

      estado:
        createTaskDto.estado ??
        TaskStatus.PENDIENTE,

      creadaEn:
        new Date(),
    };

    this.tasks.push(
      nuevaTarea,
    );

    return nuevaTarea;
  }

  findAll(): Task[] {
    return this.tasks;
  }

  findOne(
    id: number,
  ): Task {

    const tarea =
      this.tasks.find(
        (item) =>
          item.id === id,
      );

    if (!tarea) {
      throw new NotFoundException(
        `La tarea con ID ${id} no existe`,
      );
    }

    return tarea;
  }

  update(
    id: number,
    updateTaskDto:
      UpdateTaskDto,
  ): Task {

    const tarea =
      this.findOne(id);

    Object.assign(
      tarea,
      updateTaskDto,
    );

    return tarea;
  }

  remove(
    id: number,
  ) {

    const indice =
      this.tasks.findIndex(
        (item) =>
          item.id === id,
      );

    if (indice === -1) {
      throw new NotFoundException(
        `La tarea con ID ${id} no existe`,
      );
    }

    const tareaEliminada =
      this.tasks.splice(
        indice,
        1,
      )[0];

    return {
      mensaje:
        'Tarea eliminada correctamente',

      tarea:
        tareaEliminada,
    };
  }
}
