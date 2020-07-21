import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { ObjectType, Field, ID, GraphQLISODateTime } from '@nestjs/graphql';
import { Personne } from 'src/personne/personne.entity';

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
  diagnostic: string;

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
  )
  personne: Personne;
}
