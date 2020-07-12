import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType()
@Entity()
export class Patient {
  @Field(type => ID)
  @PrimaryGeneratedColumn()
  idPatient: number;

  @Field()
  @Column()
  nom: string;

  @Field()
  @Column()
  prenom: string;

  @Field()
  @Column()
  phone: string;

  @Field()
  @Column()
  adresse: string;
}
