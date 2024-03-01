import {
    Controller,
    Get,
    Post,
    Delete,
    Put,
    Body,
    Param,
    ConflictException,
    NotFoundException
} from '@nestjs/common';
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
    async findOne(@Param('id') id: string) {
        const task = await this.taskServise.findOne(id);
        if (!task) throw new NotFoundException('Tarea no encontrada');
        return task;
    }

    @Post()
    async create(@Body() body: CreateTaskDto) {
        try {
            return await this.taskServise.create(body);
        } catch (error) {
            if (error.code == 11000) {
                throw new ConflictException('Tarea existente');
            }
            throw error;
        }
    }

    @Delete(':id')
    async delete(@Param('id') id: string) {
        const task = await this.taskServise.delete(id);
        if (!task) throw new NotFoundException('Tarea no encontrada');
        return task;
    }

    @Put(':id')
    async update(
        @Param('id') id: string,
        @Body() body: UpdateTaskDto
    ) {
        const task = await this.taskServise.update(id, body);
        if (!task) throw new NotFoundException('Tarea no encontrada');
        return task;
    }
}
