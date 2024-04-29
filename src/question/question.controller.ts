import { Body, Controller, Post } from '@nestjs/common';
import { CreateQuestionDto } from './dto/create-question.dto';
import { QuestionService } from './question.service';
import { QuizService } from 'src/quiz/quiz.service';

@Controller('question')
export class QuestionController {
constructor(
    private readonly questionService: QuestionService,
    private readonly quizService: QuizService,
){}
    @Post()
    async saveQuestion(@Body() createQuestionDto: CreateQuestionDto){
        const quiz = await this.quizService.getQuizById(createQuestionDto.quizId)
        return await this.questionService.saveQuestion(createQuestionDto, quiz)
    }
}
