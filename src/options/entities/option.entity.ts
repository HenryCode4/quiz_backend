import { Question } from "src/question/entities/question.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('options')
export class Option {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    text: string

    @Column({type: Boolean})
    isCorrect: boolean


    @ManyToOne(()=> Question, (question) => question.options)
    question: Question;
}
