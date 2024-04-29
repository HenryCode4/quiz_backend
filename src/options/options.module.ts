import { Module } from '@nestjs/common';
import { OptionsService } from './options.service';
import { OptionsController } from './options.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Option } from './entities/option.entity';
import { QuestionService } from 'src/question/question.service';
import { Question } from 'src/question/entities/question.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Option, Question])],
  controllers: [OptionsController],
  providers: [OptionsService, QuestionService]
})
export class OptionsModule {}
