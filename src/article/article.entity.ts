import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Consultation } from 'src/consultation/consultation.entity';

@ObjectType()
@Entity()
export class Article {
  @Field(type => ID)
  @PrimaryGeneratedColumn()
  idArticle: number;

  @Field()
  @Column()
  nom: string;

  @Field()
  @Column()
  cout: number;

  @Field(type => Consultation)
  @ManyToOne(
    type => Consultation,
    consultation => consultation.articles,
    { onDelete: 'CASCADE' },
  )
  consultation: Consultation;
}
