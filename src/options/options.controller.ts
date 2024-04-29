import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { OptionsService } from './options.service';
import { CreateOptionDto } from './dto/create-option.dto';
import { UpdateOptionDto } from './dto/update-option.dto';
import { QuestionService } from 'src/question/question.service';
import { Option } from './entities/option.entity';

@Controller('options')
export class OptionsController {
  constructor(
    private readonly optionsService: OptionsService,
    private readonly questionService: QuestionService
  ) {}

  @Post()
  async saveOptionToQuestion(@Body() createOptionDto: CreateOptionDto):Promise<Option>{
    const question = await this.questionService.findQuestionById(createOptionDto.questionId)
    return await this.optionsService.createOption(createOptionDto, question)
  }
}
