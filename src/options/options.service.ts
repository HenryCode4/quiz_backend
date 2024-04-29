import { Injectable } from '@nestjs/common';
import { CreateOptionDto } from './dto/create-option.dto';
import { UpdateOptionDto } from './dto/update-option.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Option } from './entities/option.entity';
import { Repository } from 'typeorm';
import { Question } from 'src/question/entities/question.entity';

@Injectable()
export class OptionsService {
  constructor(
    @InjectRepository(Option) private optionRepository: Repository<Option> 
  ){}

  async createOption(createOptionDto: CreateOptionDto, question: Question):Promise<Option>{

    const newOption = await this.optionRepository.save({
      text: createOptionDto.text,
      isCorrect: createOptionDto.isCorrect
    })

    question.options = [...question.options, newOption]

    await question.save()

    return newOption;

  }
}
