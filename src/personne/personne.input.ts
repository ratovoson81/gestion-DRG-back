import { InputType, Field } from '@nestjs/graphql';
import { Personne } from './personne.entity';

@InputType({ description: 'new personne data' })
export class InputPersonne implements Partial<Personne> {
  @Field()
  nom: string;

  @Field()
  anneeDeNaissance: number;

  @Field()
  poids: number;

  @Field({ nullable: true })
  phone: string;

  @Field()
  adresse: string;
}
