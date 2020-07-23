import { InputType, Field, ID } from '@nestjs/graphql';
import { InputConsultation } from 'src/consultation/consultation.input';

@InputType({ description: 'input diagnostic' })
export class InputDiagnostic {
  @Field(type => ID, { nullable: true })
  idDiagnostic: number;

  @Field()
  nom: string;

  @Field(type => [InputConsultation], { nullable: true })
  consultations: InputConsultation[];
}
