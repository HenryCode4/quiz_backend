

import { IsNotEmpty, IsString } from "class-validator";



export class CreateOptionDto{
    @IsString()
    @IsNotEmpty()
    text: string 

    @IsNotEmpty()
    questionId: number


    @IsNotEmpty()
    isCorrect: boolean
}