import { InputType, Field, ID } from '@nestjs/graphql';
import { Consultation } from './consultation.entity';

@InputType({ description: 'new consultation data' })
export class InputConsultation implements Partial<Consultation> {
  @Field(type => ID, { nullable: true })
  idConsultation: number;

  @Field()
  temperature: number;

  @Field()
  diagnostic: string;

  @Field()
  tension: string;

  @Field()
  TDRPalu: boolean;

  @Field()
  cout: number;
}
