import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { ObjectType, Field, ID, GraphQLISODateTime } from '@nestjs/graphql';
import { Personne } from 'src/personne/personne.entity';
import { Diagnostic } from 'src/diagnostic/diagnostic.entity';

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

  @Field()
  @Column()
  TDRPalu: boolean;

  @Field()
  @Column()
  cout: number;

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
}
