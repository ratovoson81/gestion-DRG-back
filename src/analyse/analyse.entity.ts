import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Consultation } from 'src/consultation/consultation.entity';

@ObjectType()
@Entity()
export class Analyse {
  @Field(type => ID)
  @PrimaryGeneratedColumn()
  idAnalyse: number;

  @Field()
  @Column()
  nomAnalyse: string;

  @Field()
  @Column()
  resultat: string;

  @Field(type => Consultation)
  @ManyToOne(
    type => Consultation,
    consultation => consultation.analyses,
    { onDelete: 'CASCADE' },
  )
  consultation: Consultation;
}
