export enum TaskStatus {
  PENDIENTE = 'PENDIENTE',
  EN_PROGRESO = 'EN_PROGRESO',
  COMPLETADA = 'COMPLETADA',
}

export class Task {
  id!: number;

  titulo!: string;

  descripcion?: string;

  estado!: TaskStatus;

  creadaEn!: Date;
}