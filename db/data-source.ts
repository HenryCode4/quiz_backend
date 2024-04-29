import { Option } from "src/options/entities/option.entity";
import { Question } from "src/question/entities/question.entity";
import { Quiz } from "src/quiz/entities/quiz.entity";
import { DataSource, DataSourceOptions } from "typeorm";

export const dataSourceOptions: DataSourceOptions = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: "postgres",
    password: 'spark',
    database: 'quiz',
    entities: ['dist/**/*.entity.js'],
    // entities: [Option, Question, Quiz],
    migrations: ['dist/db/migrations/*.js']
}

const dataSource = new DataSource(dataSourceOptions)

export default dataSource;