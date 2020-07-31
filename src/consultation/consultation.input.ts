import { InputType, Field, ID } from '@nestjs/graphql';
import { InputDiagnostic } from 'src/diagnostic/diagnostic.input';

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
  analyse: string;

  @Field()
  traitement: string;

  @Field()
  TDRPalu: boolean;

  @Field()
  cout: number;
}
