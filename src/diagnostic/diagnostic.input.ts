import { InputType, Field, ID } from '@nestjs/graphql';
import { Diagnostic } from './diagnostic.entity';

@InputType({ description: 'input diagnostic' })
export class InputDiagnostic implements Partial<Diagnostic> {
  @Field(type => ID)
  idDiagnostic: number;

  @Field()
  nom: string;
}
