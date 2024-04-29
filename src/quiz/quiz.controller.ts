import { Body, Controller, DefaultValuePipe, Get, HttpCode, Param, ParseIntPipe, Post, Query } from '@nestjs/common';
import { QuizService } from './quiz.service';
import { CreateQuizDto } from './dto/create-quiz-dto';
import { Quiz } from './entities/quiz.entity';
import { IPaginationOptions, Pagination } from 'nestjs-typeorm-paginate';
import { ApiPaginatedResponse } from 'src/common/decorator/api-pagination.response';

@Controller('quiz')
export class QuizController {

    constructor(private readonly quizService: QuizService){}
    @Get('/')
  @ApiPaginatedResponse({ model: Quiz, description: 'List of quizzes' })
  async getAllQuiz(
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number = 1,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number = 1,
  ): Promise<Pagination<Quiz>> {
    const options: IPaginationOptions = {
      limit,
      page,
    };
    return await this.quizService.paginate(options);
  }

    @Get(':id')
    async getQuizById(@Param('id', ParseIntPipe) id: number): Promise<Quiz>{
        return await this.quizService.getQuizById(id)
    }

    @Post()
    @HttpCode(200)
    async createQuiz(@Body() quizDto: CreateQuizDto){
        return await this.quizService.createNewQuiz(quizDto)
    }
}
