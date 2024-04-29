import { Module } from '@nestjs/common';
import { QuestionController } from './question.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Question } from './entities/question.entity';
import { QuestionService } from './question.service';
import { Quiz } from 'src/quiz/entities/quiz.entity';
import { QuizService } from 'src/quiz/quiz.service';

@Module({
  imports: [TypeOrmModule.forFeature([Question, Quiz])],
  controllers: [QuestionController],
  providers: [QuestionService, QuizService]
})
export class QuestionModule {}
