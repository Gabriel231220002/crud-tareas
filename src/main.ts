import {
  ValidationPipe,
} from '@nestjs/common';

import {
  NestFactory,
} from '@nestjs/core';

import {
  DocumentBuilder,
  SwaggerModule,
} from '@nestjs/swagger';

import {
  AppModule,
} from './app.module';

async function bootstrap() {

  const app =
    await NestFactory.create(
      AppModule,
    );

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted:
        true,
      transform: true,
    }),
  );

  const config =
    new DocumentBuilder()
      .setTitle(
        'API de Gestión de Tareas',
      )
      .setDescription(
        'CRUD académico desarrollado con NestJS',
      )
      .setVersion('1.0')
      .addTag('Tareas')
      .build();

  const document =
    SwaggerModule.createDocument(
      app,
      config,
    );

  SwaggerModule.setup(
    'api',
    app,
    document,
  );

  await app.listen(
    3000,
  );

  console.log(
    'API: http://localhost:3000',
  );

  console.log(
    'Swagger: http://localhost:3000/api',
  );
}

bootstrap();
