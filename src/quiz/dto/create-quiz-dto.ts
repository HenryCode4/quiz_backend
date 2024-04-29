import { IsNotEmpty, IsString } from "class-validator"

export class CreateQuizDto{
    @IsNotEmpty()
    @IsString()
    title: string

    @IsString()
    @IsNotEmpty()
    description: string
}