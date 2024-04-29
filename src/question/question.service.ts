import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Question } from './entities/question.entity';
import { Repository } from 'typeorm';
import { CreateQuestionDto } from './dto/create-question.dto';
import { Quiz } from 'src/quiz/entities/quiz.entity';

@Injectable()
export class QuestionService {

    constructor(
        @InjectRepository(Question) private questionRepository: Repository<Question>,
    ){}

    async saveQuestion(createQuestionDto: CreateQuestionDto, quiz: Quiz):Promise<Question>{

        const newQuestion = await this.questionRepository.save({
            question: createQuestionDto.question
        })

        quiz.questions = [ ...quiz.questions, newQuestion];

        await quiz.save()

        return newQuestion;
    }



    async findQuestionById(id: number):Promise<Question>{
       return await this.questionRepository.findOne({
            where: {id},
            relations: ['options']
        })
    }

}
