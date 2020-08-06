import { InputType, ID, Field } from '@nestjs/graphql';

@InputType({ description: 'input analyse data' })
export class InputAnalyse {
  @Field(type => ID, { nullable: true })
  idAnalyse: number;

  @Field()
  nomAnalyse: string;

  @Field()
  resultat: string;
}
