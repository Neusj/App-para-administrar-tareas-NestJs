import { Controller, Get, Post, Delete, Put } from '@nestjs/common';
import { TaskService } from './task.service';

@Controller('task')
export class TaskController {
    constructor(private taskServise: TaskService){}

    

}
