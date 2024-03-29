import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Task } from '../schemas/task.schema';
import { CreateTaskDto } from '../dto/cretae-task.dto';
import { UpdateTaskDto } from '../dto/update-task.dto';
import { Model } from 'mongoose';

@Injectable()
export class TaskService {
    constructor(@InjectModel(Task.name) private taskModel: Model<Task>) {}


    findAll() {
        return this.taskModel.find();
    }

    async create(createTask: CreateTaskDto) {
        const newTask =  new this.taskModel(createTask);
        return newTask.save();
    }

    async findOne(id: string) {
        return this.taskModel.findById(id);
    }

    async delete(id: string) {
        return this.taskModel.findByIdAndDelete(id);
    }

    async update(id: string, task: UpdateTaskDto) {
        //new: true. para que retorne el elemento recien editado
        return this.taskModel.findByIdAndUpdate(id, task, {new: true});
    }

}
