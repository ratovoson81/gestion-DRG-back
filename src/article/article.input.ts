import { InputType, ID, Field } from '@nestjs/graphql';

@InputType({ description: 'input article data' })
export class InputArticle {
  @Field(type => ID, { nullable: true })
  idArticle: number;

  @Field()
  nom: string;

  @Field()
  cout: number;
}
