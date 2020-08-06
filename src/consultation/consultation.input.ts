import { InputType, Field, ID } from '@nestjs/graphql';
import { InputDiagnostic } from 'src/diagnostic/diagnostic.input';
import { InputArticle } from 'src/article/article.input';
import { InputAnalyse } from 'src/analyse/analyse.input';

@InputType({ description: 'new consultation data' })
export class InputConsultation {
  @Field(type => ID, { nullable: true })
  idConsultation: number;

  @Field()
  temperature: number;

  @Field(type => [InputDiagnostic])
  diagnostics: InputDiagnostic[];

  @Field()
  poids: number;

  @Field()
  tension: string;

  @Field()
  traitement: string;

  @Field({ nullable: true })
  TDRPalu: string;

  @Field(type => [InputArticle])
  articles: InputArticle[];

  @Field(type => [InputAnalyse], { nullable: true })
  analyses: InputAnalyse[];
}
