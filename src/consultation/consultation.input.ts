import { InputType, Field, ID } from '@nestjs/graphql';
import { Consultation } from './consultation.entity';
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
  tension: string;

  @Field()
  TDRPalu: boolean;

  @Field()
  cout: number;
}
