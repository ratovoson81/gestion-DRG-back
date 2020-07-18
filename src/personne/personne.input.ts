import { InputType, Field, ID } from '@nestjs/graphql';
import { Personne } from './personne.entity';

@InputType({ description: 'new personne data' })
export class InputPersonne implements Partial<Personne> {
  @Field(type => ID, { nullable: true })
  idPersonne: number;

  @Field()
  nom: string;

  @Field()
  anneeDeNaissance: number;

  @Field()
  sexe: boolean;

  @Field()
  poids: number;

  @Field({ nullable: true })
  phone: string;

  @Field()
  adresse: string;
}
