import { Controller, Get, Post, Delete, Put, Body, Param } from '@nestjs/common';
import { TaskService } from './task.service';
import { CreateTaskDto } from 'src/dto/cretae-task.dto';
import { UpdateTaskDto } from 'src/dto/update-task.dto';

@Controller('tasks')
export class TaskController {
    constructor(private taskServise: TaskService){}

    @Get()
    findAll() {
        return this.taskServise.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.taskServise.findOne(id);
    }

    @Post()
    create(@Body() body: CreateTaskDto) {
        return this.taskServise.create(body);
    }

    @Delete(':id')
    delete(@Param('id') id: string) {
        return this.taskServise.delete(id);
    }

    @Put(':id')
    update(
        @Param('id') id: string,
        @Body() body: UpdateTaskDto) {
        return this.taskServise.update(id, body);

    }

}
