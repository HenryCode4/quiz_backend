import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateQuizDto } from './dto/create-quiz-dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Quiz } from './entities/quiz.entity';
import { Repository } from 'typeorm';
import { Question } from 'src/question/entities/question.entity';
import { IPaginationOptions, Pagination, paginate } from 'nestjs-typeorm-paginate';

@Injectable()
export class QuizService {

    constructor(
        @InjectRepository(Quiz)
        private quizRepository: Repository<Quiz>,
      ) {}    
      
      async getAllQuiz():Promise<Quiz[]>{
        const getAllQuiz = await this.quizRepository
        .createQueryBuilder('q')
        .leftJoinAndSelect('q.questions', 'qt')
        .leftJoinAndSelect('qt.options', '0')
        // .take(1)
        // .getManyAndCount()
        .getMany()
        return getAllQuiz
    }

    
    async createNewQuiz(quizDto: CreateQuizDto):Promise<Quiz>{
        // const {title, description} = quizDto;
        // const newQuiz = new Quiz()

        // newQuiz.title= title;
        // newQuiz.description = description;
        try {
            return await this.quizRepository.save(quizDto);
            
        } catch (error) {
            throw new HttpException('Could not create quiz', HttpStatus.BAD_REQUEST)
        }
    }


    async getQuizById(id: number): Promise<Quiz>{
        return await this.quizRepository.findOne({
            where: {id},
            relations: ['questions', 'questions.options']
        })
    }



    async paginate(options: IPaginationOptions): Promise<Pagination<Quiz>> {
        const qb = this.quizRepository.createQueryBuilder('q');
        qb.orderBy('q.id', 'DESC');
    
        return paginate<Quiz>(qb, options);
      }


    

}
