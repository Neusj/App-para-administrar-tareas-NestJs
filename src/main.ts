import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //para validad datos en el body al crear una instancia
  app.useGlobalPipes(new ValidationPipe());
  //para poder utilizar el mismo dominio en el back y en le front
  app.enableCors();
  app.setGlobalPrefix('api');
  await app.listen(3000);
}
bootstrap();
