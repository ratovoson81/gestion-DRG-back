import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { ObjectType, Field, ID } from '@nestjs/graphql';
import { type } from 'os';
import { Consultation } from 'src/consultation/consultation.entity';

@ObjectType()
@Entity()
export class Personne {
  @Field(type => ID)
  @PrimaryGeneratedColumn()
  idPersonne: number;

  @Field()
  @Column()
  nom: string;

  @Field()
  @Column()
  anneeDeNaissance: number;

  @Field()
  @Column()
  sexe: boolean;

  @Field()
  @Column()
  poids: number;

  @Field({ nullable: true })
  @Column()
  phone: string;

  @Field()
  @Column()
  adresse: string;

  @Field(type => [Consultation])
  @OneToMany(
    type => Consultation,
    consultation => consultation.personne,
  )
  consultations: Consultation[];
}
