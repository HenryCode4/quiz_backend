import { Question } from "src/question/entities/question.entity";
import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";


@Entity('quizzes')
export class Quiz extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    title: string 

    @Column()
    description: string

    @Column({
        default: 1
    })
    isActive: boolean

    @OneToMany(()=> Question, (question) => question.quiz)
    questions: Question[]

}