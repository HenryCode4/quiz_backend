import { Module } from '@nestjs/common';
import { QuizModule } from './quiz/quiz.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QuestionModule } from './question/question.module';
import { OptionsModule } from './options/options.module';

import { ConfigModule } from '@nestjs/config';
import { UserModule } from './user/user.module';
import { dataSourceOptions } from 'db/data-source';

@Module({
  imports: [
    ConfigModule.forRoot({isGlobal: true}),
    TypeOrmModule.forRoot(dataSourceOptions),
    QuizModule,
    QuestionModule,
    OptionsModule,
    UserModule
]
})
export class AppModule {}
