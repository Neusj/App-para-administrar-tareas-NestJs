import { Module } from '@nestjs/common';
import { TaskModule } from './task/task.module';
import { MongooseModule } from '@nestjs/mongoose'



@Module({
  imports: [
    TaskModule,
    MongooseModule.forRoot('mongodb://localhost/taskdb')
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
