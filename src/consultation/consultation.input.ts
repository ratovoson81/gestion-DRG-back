import { InputType, Field, ID } from '@nestjs/graphql';
import { Consultation } from './consultation.entity';
import { InputDiagnostic } from 'src/diagnostic/diagnostic.input';

@InputType({ description: 'new consultation data' })
export class InputConsultation implements Partial<Consultation> {
  @Field(type => ID, { nullable: true })
  idConsultation: number;

  @Field()
  temperature: number;

  @Field(type => [InputDiagnostic])
  diagnosticData: InputDiagnostic[];

  @Field()
  tension: string;

  @Field()
  TDRPalu: boolean;

  @Field()
  cout: number;
}
