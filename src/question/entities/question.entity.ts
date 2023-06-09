import {
  Column,
  Model,
  Table,
  PrimaryKey,
  DataType,
  ForeignKey,
  HasOne,
  BelongsTo,
} from 'sequelize-typescript';
import { Answer } from './answer.entity';
import { Subject } from '../../subject/entities/subject.entity';

@Table({
  timestamps: true,
  createdAt: true,
  updatedAt: true,
})
export class Question extends Model<Question> {
  @PrimaryKey
  @Column({ type: DataType.UUID, defaultValue: DataType.UUIDV4 })
  questionId: string;

  @Column({ type: DataType.STRING(20000), unique: true })
  question: string;

  @Column(DataType.ARRAY(DataType.STRING))
  variants: string[];

  @BelongsTo(() => Answer)
  answer: Answer;

  @ForeignKey(() => Answer)
  @Column({ type: DataType.UUID })
  answerId: string;

  @BelongsTo(() => Subject)
  subject: Subject;

  @ForeignKey(() => Subject)
  @Column({ type: DataType.UUID })
  subjectId: string;
}
