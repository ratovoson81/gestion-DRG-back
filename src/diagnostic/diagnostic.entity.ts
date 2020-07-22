import { Entity, Column, PrimaryGeneratedColumn, ManyToMany } from 'typeorm';
import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Consultation } from 'src/consultation/consultation.entity';

@ObjectType()
@Entity()
export class Diagnostic {
  @Field(type => ID)
  @PrimaryGeneratedColumn()
  idDiagnostic: number;

  @Field()
  @Column()
  nom: string;

  @Field(type => [Consultation])
  @ManyToMany(
    type => Consultation,
    consultation => consultation.diagnostics,
  )
  consultations: Consultation[];
}
