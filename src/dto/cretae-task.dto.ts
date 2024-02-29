import {IsString, IsBoolean, IsOptional, IsNotEmpty} from 'class-validator'

export class CreateTaskDto {
    @IsString()
    @IsNotEmpty()
    title: string;

    @IsString()
    @IsOptional()
    descripcion?: string;
    
    @IsBoolean()
    @IsOptional()
    done?: boolean;
}