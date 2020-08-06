import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  ManyToMany,
  JoinTable,
  OneToMany,
} from 'typeorm';
import { ObjectType, Field, ID, GraphQLISODateTime } from '@nestjs/graphql';
import { Personne } from 'src/personne/personne.entity';
import { Diagnostic } from 'src/diagnostic/diagnostic.entity';
import { Article } from 'src/article/article.entity';
import { Analyse } from 'src/analyse/analyse.entity';

@ObjectType()
@Entity()
export class Consultation {
  @Field(type => ID)
  @PrimaryGeneratedColumn()
  idConsultation: number;

  @Field()
  @Column()
  temperature: number;

  @Field()
  @Column()
  poids: number;

  @Field()
  @Column()
  tension: string;

  @Field({ nullable: true })
  @Column()
  traitement: string;

  @Field({ nullable: true })
  @Column()
  TDRPalu: string;

  @Field(type => GraphQLISODateTime)
  @Column()
  date: Date;

  @Field(type => Personne)
  @ManyToOne(
    type => Personne,
    personne => personne.consultations,
    { onDelete: 'CASCADE' },
  )
  personne: Personne;

  @Field(type => [Diagnostic])
  @ManyToMany(
    type => Diagnostic,
    diagnostic => diagnostic.consultations,
  )
  @JoinTable()
  diagnostics: Diagnostic[];

  @Field(type => [Article])
  @OneToMany(
    type => Article,
    article => article.consultation,
  )
  articles: Article[];

  @Field(type => [Analyse], { nullable: true })
  @OneToMany(
    type => Analyse,
    analyse => analyse.consultation,
  )
  analyses: Analyse[];
}
