import {IsString, IsBoolean, IsOptional} from 'class-validator'


export class UpdateTaskDto {
    @IsString()
    @IsOptional()
    title?: string;

    @IsString()
    @IsOptional()
    descripcion?: string;

    @IsBoolean()
    @IsOptional()
    done?: boolean;
}