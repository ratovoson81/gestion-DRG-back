import { Resolver, Mutation, Args, ID } from '@nestjs/graphql';
import { ConsultationService } from './consultation.service';
import { Consultation } from './consultation.entity';
import { InputConsultation } from './consultation.input';

@Resolver('Consultation')
export class ConsultationResolver {
  constructor(private consultationService: ConsultationService) {}

  @Mutation(returns => Consultation)
  async createConsultation(
    @Args('data') consultationData: InputConsultation,
    @Args('idPersonne', { type: () => ID }) idPersonne: string,
  ) {
    return this.consultationService.createConsultation(
      consultationData,
      idPersonne,
    );
  }
}
